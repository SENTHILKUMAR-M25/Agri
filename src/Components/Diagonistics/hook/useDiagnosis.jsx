import { useState } from "react";

// Mock diagnosis function – replace with real AI API later
export function useDiagnosis() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState(null);

  const analyzePlant = async (imageData, language) => {
    setIsAnalyzing(true);
    setError(null);
    setDiagnosis(null);

    try {
      // Simulate AI delay
      await new Promise((resolve) => setTimeout(resolve, 2500));

      const mockDiagnosis = {
        plantName:
          language === "ta"
            ? "தக்காளி"
            : language === "hi"
            ? "टमाटर"
            : "Tomato",

        healthStatus: "moderate",

        diseaseName:
          language === "ta"
            ? "ஆரம்பகால இலைக்கருகல்"
            : language === "hi"
            ? "अगेती झुलसा"
            : "Early Blight",

        diseaseType: "fungal",

        symptoms:
          language === "ta"
            ? [
                "பழுப்பு நிற வட்ட புள்ளிகள்",
                "மஞ்சள் ஹாலோ",
                "இலை மஞ்சள் நிறமாதல்",
              ]
            : language === "hi"
            ? ["भूरे गोलाकार धब्बे", "पीला हेलो", "पत्ती का पीलापन"]
            : [
                "Brown circular spots",
                "Yellow halo around spots",
                "Leaf yellowing",
              ],

        cause:
          language === "ta"
            ? "அல்டர்னேரியா சோலானி என்ற பூஞ்சையால் ஏற்படுகிறது"
            : language === "hi"
            ? "अल्टरनेरिया सोलानी कवक के कारण"
            : "Caused by Alternaria solani fungus",

        severityLevel: "medium",

        organicTreatment:
          language === "ta"
            ? [
                "பாதிக்கப்பட்ட இலைகளை அகற்றவும்",
                "வேப்ப எண்ணெய் (2ml/L)",
                "சோடா பைகார்பனேட் கரைசல்",
              ]
            : language === "hi"
            ? [
                "प्रभावित पत्तियाँ हटाएँ",
                "नीम तेल (2ml/L)",
                "बेकिंग सोडा घोल",
              ]
            : [
                "Remove affected leaves",
                "Neem oil spray (2ml/L)",
                "Baking soda solution",
              ],

        chemicalTreatment:
          language === "ta"
            ? [
                "மான்கோசெப் (2g/L)",
                "குளோரோதலோனில்",
              ]
            : language === "hi"
            ? [
                "मैनकोज़ेब (2g/L)",
                "क्लोरोथालोनिल",
              ]
            : [
                "Mancozeb (2g/L)",
                "Chlorothalonil fungicide",
              ],

        preventionTips:
          language === "ta"
            ? [
                "செடிகளுக்கு இடைவெளி வைக்கவும்",
                "நீர் தேங்காமல் பார்த்துக்கொள்ளவும்",
                "காலையில் நீர் ஊற்றவும்",
                "பயிர் சுழற்சி பின்பற்றவும்",
              ]
            : language === "hi"
            ? [
                "पौधों में दूरी रखें",
                "अच्छी जल निकासी रखें",
                "सुबह पानी दें",
                "फसल चक्र अपनाएँ",
              ]
            : [
                "Maintain spacing",
                "Ensure drainage",
                "Water in the morning",
                "Practice crop rotation",
              ],

        farmerSummary:
          language === "ta"
            ? "உங்கள் தக்காளி செடியில் ஆரம்பகால இலைக்கருகல் நோய் உள்ளது. உடனே சிகிச்சை மேற்கொள்ளுங்கள்."
            : language === "hi"
            ? "आपके टमाटर के पौधे में अगेती झुलसा रोग है। तुरंत उपचार करें।"
            : "Your tomato plant has Early Blight. Start treatment immediately.",

        confidenceLevel: 85,
      };

      setDiagnosis(mockDiagnosis);
    } catch (err) {
      setError("Analysis failed. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const reset = () => {
    setDiagnosis(null);
    setError(null);
    setIsAnalyzing(false);
  };

  return {
    isAnalyzing,
    diagnosis,
    error,
    analyzePlant,
    reset,
  };
}
