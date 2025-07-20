"use client";

import React, { useState, useEffect } from "react";
import { Upload, Wand2, Camera, Sparkles, Languages, RefreshCw, Download} from "lucide-react";

export default function GeneratePage() {
  const [assistantLang, setAssistantLang] = useState("en");
  const [image, setImage] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  // const [generatedCaption, setGeneratedCaption] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const [occasion, setOccasion] = useState("");
  const [theme, setTheme] = useState("");
  const [productType, setProductType] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [feedback, setFeedback] = useState("");
  const [regenerating, setRegenerating] = useState(false);

  // useEffect(() => {
  //   const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   window.addEventListener('scroll', handleScroll);
    
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  const handleGenerate = async () => {
    if (!image) {
      alert("Please upload an image!");
      return;
    }

    setLoading(true);
    setGeneratedImage(null);
    // setGeneratedCaption(null);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("theme", theme);
    formData.append("occasion", occasion);
    formData.append("productType", productType);
    formData.append("region", region);
    formData.append("gender", gender);

    try {
      const response = await fetch("http://localhost:8000/generate-image", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Image URL:", data.image_url);
        console.log("Caption:", data.caption);
      } else {
        console.error("Error:", data.error);
      }
      if (data.image_url) {
        console.log("generated image url: ", data.image_url);
        setGeneratedImage(data.image_url);
      } else {
        alert("Image generation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateWithFeedback = async () => {
    if (!image || !feedback) return;

    setRegenerating(true);
    setGeneratedImage(null);
    // setGeneratedCaption(null);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("theme", theme);
    formData.append("occasion", occasion);
    formData.append("productType", productType);
    formData.append("region", region);
    formData.append("gender", gender);
    formData.append("feedback", feedback);

    try {
      const response = await fetch(
        "http://localhost:8000/regenerate-with-feedback",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        setGeneratedImage(data.image_url);
        // setGeneratedCaption(data.caption || );
      } else {
        console.error("Error:", data.error);
        alert("Image regeneration failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    } finally {
      setRegenerating(false);
    }
  };

  const occasions = [
    "None", "Wedding Season", "Baby Shower", "Product Launch", 
    "Grand Opening", "Discount Day", "Special Collection", "Fashion Shoot"
  ];

  const themes = [
    "Traditional", "Vibrant", "Minimalist", "Artistic", 
    "Studio Look", "Warm & Cozy", "Cool & Bright"
  ];

  const productTypes = [
    "None", "Saree", "Kurta", "Suit", "Shirt", 
    "Pant", "Dress", "Shoes"
  ];

  const regions = [
    "None", "North India", "East India", "South India", "West India"
  ];

  const genders = ["None", "Male", "Female"];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
    { code: "gu-IN", name: "Gujarati", flag: "🇮🇳" },
    { code: "ta-IN", name: "Tamil", flag: "🇮🇳" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-3xl animate-blob"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl animate-blob animation-delay-2000"
          style={{
            right: mousePosition.x - 200,
            bottom: mousePosition.y - 200,
            transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.2}px)`
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NoorKala Image Studio
              </h1>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-3">
              <Languages className="w-5 h-5 text-purple-400" />
              <select
                value={assistantLang}
                onChange={(e) => setAssistantLang(e.target.value)}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-slate-800 text-white">
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input Form */}
          <div className="space-y-6">
            {/* Upload Section */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Upload className="w-6 h-6 mr-2 text-purple-400" />
                Upload Your Product
              </h2>
              
              <label className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-purple-400/50 rounded-2xl cursor-pointer bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
                {image ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Selected"
                      className="w-48 h-48 object-cover rounded-xl shadow-2xl"
                    />
                    <p className="text-sm text-purple-300 mt-2">Click to change image</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-purple-300 mb-2 block">
                      Click to upload your product image
                    </span>
                    <span className="text-sm text-gray-400">
                      PNG, JPG, JPEG (Max 5MB)
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Settings Panel */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Wand2 className="w-5 h-5 mr-2 text-purple-400" />
                Customization Settings
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Occasion */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    🎉 Occasion
                  </label>
                  <select
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select occasion</option>
                    {occasions.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>

                {/* Theme */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    🎨 Theme
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select theme</option>
                    {themes.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>

                {/* Product Type */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    👔 Product Type
                  </label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select product</option>
                    {productTypes.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>

                {/* Region */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    🗺️ Region
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select region</option>
                    {regions.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>

                {/* Gender */}
                <div className="md:col-span-2">
                  <label className="block text-purple-300 font-medium mb-2">
                    👤 Model Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select gender</option>
                    {genders.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                disabled={loading || !image}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Generating Magic...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Image
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {generatedImage ? (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Camera className="w-6 h-6 mr-2 text-purple-400" />
                  Generated Result
                </h3>
                
                <div className="relative group">
                  <img
                    src={"http://localhost:8000/get-enhanced-image/" + generatedImage}
                    alt="AI Generated Product"
                    className="w-full h-96 object-contain rounded-2xl shadow-2xl"
                  />

                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Download Button */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={"http://localhost:8000/get-enhanced-image/" + generatedImage}
                      download={generatedImage} // will download with the original file name
                      className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Download className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors">
                      <a
                        href={`http://localhost:8000/get-enhanced-image/${generatedImage}`}
                        download={generatedImage}
                        // className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
                      ></a>
                      <Download className="w-4 h-4 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div> */}
                </div>

                {/* Feedback Section */}
                <div className="mt-6 bg-white/5 rounded-2xl p-4">
                  <label className="block text-purple-300 font-medium mb-3">
                    ✨ Want to improve? Tell us what to change:
                  </label>
                  <textarea
                    placeholder="e.g., Change model to female, use a brighter background, add Diwali theme..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={3}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />

                  <button
                    onClick={handleRegenerateWithFeedback}
                    disabled={regenerating || !feedback}
                    className="mt-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                  >
                    {regenerating ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Updating...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate with Feedback
                      </div>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-150 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Create Magic?
                </h3>
                <p className="text-gray-300">
                  Upload your product image and customize the settings to generate stunning AI-enhanced visuals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}