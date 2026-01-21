

import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addScheme } from "../Redux/Slice/schemesSlice";
import { useNavigate } from "react-router-dom";
import { Plus, X, Briefcase, Award, Send, Globe, Zap, CheckCircle2, Info } from "lucide-react";

export default function AddScheme() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    schemeId: "",
    schemeName: "",
    launchYear: new Date().getFullYear(),
    ministry: "",
    objective: "",
    focusAreas: [],
    benefits: [],
    officialWebsite: ""
  });

  const [currentFocus, setCurrentFocus] = useState("");
  const [currentBenefit, setCurrentBenefit] = useState("");

  // Innovation: Completeness score for a professional "guided" feel
  const completeness = useMemo(() => {
    const fields = Object.values(formData).filter(v => v.length !== 0);
    return Math.round((fields.length / Object.keys(formData).length) * 100);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTag = (field, value, setter) => {
    if (value.trim() && !formData[field].includes(value)) {
      setFormData({ ...formData, [field]: [...formData[field], value.trim()] });
      setter("");
    }
  };

  const removeTag = (field, tagToRemove) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addScheme({ ...formData, launchYear: Number(formData.launchYear) }));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Mission Details */}
        <div className="lg:col-span-8 space-y-10">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tighter">
              Mission <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">Architect</span>
            </h1>
            <p className="text-slate-500 mt-4 text-lg">Configure and deploy national-scale agricultural frameworks.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section: Core Identity */}
            <FormSection title="01. Core Identity" icon={<Info size={18} />}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <Input label="System ID" name="schemeId" placeholder="e.g. PMMSY" value={formData.schemeId} onChange={handleChange} />
                </div>
                <div className="md:col-span-3">
                  <Input label="Official Mission Name" name="schemeName" placeholder="Full title of the initiative..." value={formData.schemeName} onChange={handleChange} />
                </div>
              </div>
            </FormSection>

            {/* Section: Logistics */}
            <FormSection title="02. Deployment Logistics" icon={<Globe size={18} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Governing Ministry" name="ministry" value={formData.ministry} onChange={handleChange} />
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Year" name="launchYear" type="number" value={formData.launchYear} onChange={handleChange} />
                  <Input label="Portal Link" name="officialWebsite" placeholder="https://..." value={formData.officialWebsite} onChange={handleChange} />
                </div>
              </div>
              <Textarea label="Strategic Objective" name="objective" value={formData.objective} onChange={handleChange} />
            </FormSection>

            {/* Section: Impact Architecture */}
            <FormSection title="03. Impact Architecture" icon={<Zap size={18} />}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <TagInput 
                  label="Focus Sectors" 
                  icon={<Briefcase size={16}/>}
                  placeholder="Enter area..."
                  value={currentFocus}
                  setter={setCurrentFocus}
                  tags={formData.focusAreas}
                  onAdd={() => addTag("focusAreas", currentFocus, setCurrentFocus)}
                  onRemove={(tag) => removeTag("focusAreas", tag)}
                />
                <TagInput 
                  label="Defined Benefits" 
                  icon={<Award size={16}/>}
                  placeholder="Enter benefit..."
                  value={currentBenefit}
                  setter={setCurrentBenefit}
                  tags={formData.benefits}
                  onAdd={() => addTag("benefits", currentBenefit, setCurrentBenefit)}
                  onRemove={(tag) => removeTag("benefits", tag)}
                />
              </div>
            </FormSection>

            <button type="submit" className="flex items-center justify-center gap-3 w-full bg-slate-950 text-white py-5 rounded-2xl font-bold text-xl hover:bg-emerald-600 transition-all duration-300 shadow-2xl shadow-slate-200">
              <Send size={22} />
              Publish Mission Framework
            </button>
          </form>
        </div>

        {/* Right Column: Intelligent Status Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-6">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Mission Status</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-slate-600">Completeness</span>
                  <span className="text-emerald-600">{completeness}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 transition-all duration-700" style={{ width: `${completeness}%` }} />
                </div>
              </div>

              <div className="space-y-3">
                <StatusItem label="ID Assigned" checked={formData.schemeId.length > 0} />
                <StatusItem label="Ministry Verified" checked={formData.ministry.length > 0} />
                <StatusItem label="Impact Defined" checked={formData.focusAreas.length > 0} />
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  );
}

/* Professional Reusable Components */

function FormSection({ title, icon, children }) {
  return (
    <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm space-y-6 transition-all hover:shadow-md">
      <div className="flex items-center gap-3 text-slate-400 font-bold text-sm uppercase tracking-widest border-b border-slate-50 pb-4">
        <span className="p-2 bg-slate-50 rounded-lg text-emerald-600">{icon}</span>
        {title}
      </div>
      {children}
    </div>
  );
}

function StatusItem({ label, checked }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <CheckCircle2 size={18} className={checked ? "text-emerald-500" : "text-slate-200"} />
      <span className={checked ? "text-slate-900 font-medium" : "text-slate-400"}>{label}</span>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="group relative">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 mb-1.5 block group-focus-within:text-emerald-600 transition-colors">
        {label}
      </label>
      <input {...props} className="w-full bg-slate-50 border-2 border-transparent rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all" />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div className="group relative">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 mb-1.5 block group-focus-within:text-emerald-600 transition-colors">
        {label}
      </label>
      <textarea {...props} rows="4" className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-4 py-3.5 text-sm font-medium outline-none focus:bg-white focus:border-emerald-500/20 focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none" />
    </div>
  );
}

function TagInput({ label, icon, placeholder, value, setter, tags, onAdd, onRemove }) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1 flex items-center gap-2">
        {icon} {label}
      </label>
      <div className="flex gap-2">
        <input 
          className="flex-1 bg-slate-50 border-2 border-transparent rounded-xl px-4 py-3 text-sm font-medium outline-none focus:bg-white focus:border-emerald-500/20 transition-all"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setter(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), onAdd())}
        />
        <button type="button" onClick={onAdd} className="bg-emerald-50 text-emerald-600 p-3 rounded-xl hover:bg-emerald-600 hover:text-white transition-all">
          <Plus size={20} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="flex items-center gap-2 bg-slate-50 border border-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-tight group hover:border-red-100">
            {tag}
            <X size={14} onClick={() => onRemove(tag)} className="cursor-pointer text-slate-300 hover:text-red-500 transition-colors" />
          </span>
        ))}
      </div>
    </div>
  );
}