
import {
  Leaf, Bug, Eye, AlertTriangle, TrendingUp,
  Beaker, FlaskConical, Shield, FileText, Target, Sprout,
  ArrowRight, CheckCircle2, Info
} from "lucide-react";
import { HealthStatusBadge } from "./HealthStatusBadge";
import { SeverityIndicator } from "./SeverityIndicator";
import { ConfidenceMeter } from "./ConfidenceMeter";
import { TRANSLATIONS } from "./Language";

export function DiagnosisReport({ diagnosis, language, onNewAnalysis }) {
  const t = TRANSLATIONS[language];
  const isHealthy = diagnosis.healthStatus === "healthy";

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* 1. Hero Diagnosis Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl border border-slate-100">
        <div className={`absolute top-0 left-0 w-full h-2 ${isHealthy ? 'bg-emerald-500' : 'bg-amber-500'}`} />
        
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-5">
              <div className={`p-4 rounded-2xl ${isHealthy ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                <Sprout className="w-10 h-10" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.plantName}</span>
                  {isHealthy && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                  {diagnosis.plantName}
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <HealthStatusBadge status={diagnosis.healthStatus} language={language} size="lg" />
              <div className="flex items-center gap-2 text-slate-400 text-sm font-medium px-2">
                <Target className="w-4 h-4" />
                <span>{diagnosis.confidenceLevel}% {t.confidence}</span>
              </div>
            </div>
          </div>

          {!isHealthy && (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Bug className="w-4 h-4" /> {t.diseaseName}
                </div>
                <p className="text-xl font-bold text-slate-800">{diagnosis.diseaseName || t.noDisease}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" /> {t.severity}
                </div>
                <SeverityIndicator level={diagnosis.severityLevel} language={language} />
              </div>
              <div className="md:col-span-1">
                <ConfidenceMeter percentage={diagnosis.confidenceLevel} />
              </div>
            </div>
          )}
        </div>
      </div>

      {!isHealthy && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 2. Analysis & Symptoms (Left Column) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Symptoms Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                <Eye className="w-5 h-5 text-indigo-500" /> {t.symptoms}
              </h3>
              <div className="flex flex-wrap gap-2">
                {diagnosis.symptoms?.map((symptom, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 text-sm font-medium">
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            {/* Treatment Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500 rounded-lg text-white">
                    <Beaker className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-emerald-900">{t.organic}</span>
                </div>
                <ul className="space-y-3">
                  {diagnosis.organicTreatment.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-emerald-800 leading-relaxed">
                      <span className="h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group p-6 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500 rounded-lg text-white">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-blue-900">{t.chemical}</span>
                </div>
                <ul className="space-y-3">
                  {diagnosis.chemicalTreatment?.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-blue-800 leading-relaxed">
                      <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Sidebar Alerts & Prevention */}
          <div className="space-y-6">
            {diagnosis.cause && (
              <div className="p-6 rounded-3xl bg-rose-50 border border-rose-100 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-10">
                  <AlertTriangle className="w-24 h-24" />
                </div>
                <h4 className="flex items-center gap-2 font-bold text-rose-900 mb-2">
                  <AlertTriangle className="w-4 h-4" /> {t.cause}
                </h4>
                <p className="text-sm text-rose-800 leading-relaxed relative z-10">{diagnosis.cause}</p>
              </div>
            )}

            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
              <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-4">
                <Shield className="w-5 h-5 text-emerald-500" /> {t.prevention}
              </h4>
              <div className="space-y-4">
                {diagnosis.preventionTips.map((tip, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <p className="text-sm text-slate-600 font-medium">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Executive Summary Card */}
      <div className="relative group p-8 rounded-[2rem] bg-slate-900 text-white overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
          <FileText className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-emerald-500 rounded-full" />
            <span className="uppercase text-xs font-bold tracking-[0.2em] text-emerald-400">{t.summary}</span>
          </div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light italic">
            "{diagnosis.farmerSummary}"
          </p>
        </div>
      </div>

      {/* 5. Bottom Actions */}
      <div className="flex flex-col items-center gap-4 pt-6">
        <button
          onClick={onNewAnalysis}
          className="group relative flex items-center gap-3 px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold shadow-lg shadow-emerald-200 transition-all hover:-translate-y-1 active:scale-95"
        >
          <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          {t.uploadNew}
        </button>
        <p className="text-slate-400 text-xs flex items-center gap-1">
          <Info className="w-3 h-3" />
          AI-generated diagnosis for informational purposes.
        </p>
      </div>
    </div>
  );
}