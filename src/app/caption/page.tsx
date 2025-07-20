"use client";

import React, { useState, useEffect } from "react";
import {
  Upload,
  MessageCircle,
  Camera,
  Sparkles,
  Languages,
  Copy,
  Share2,
  Heart,
  Edit3,
  Hash,
  Zap,
} from "lucide-react";

export default function CaptionGeneratorPage() {
  const [assistantLang, setAssistantLang] = useState("en");
  const [image, setImage] = useState<File | null>(null);
  const [generatedCaption, setGeneratedCaption] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const [theme, setTheme] = useState("");
  const [captionType, setCaptionType] = useState("marketing");
  const [captionLength, setCaptionLength] = useState("medium");
  const [tone, setTone] = useState("professional");

  // useEffect(() => {
  //   const handleMouseMove = (e: { clientX: any; clientY: any }) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("scroll", handleScroll);
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


  const handleGenerateCaption = async () => {
    if (!image) {
      alert("Please upload an image!");
      return;
    }

    setLoading(true);
    setGeneratedCaption(null);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("theme", theme);
    formData.append("captionType", captionType);
    formData.append("captionLength", captionLength);
    formData.append("tone", tone);
    formData.append("language", assistantLang);

    try {
      const response = await fetch("https://fast-api-render-qkmb.onrender.com/generate-caption", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedCaption(data.caption);
        console.log("Caption generated:", data.caption);
      } else {
        console.error("Error:", data.error);
        alert("Caption generation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedCaption) {
      navigator.clipboard.writeText(generatedCaption);
    }
  };

  const themes = [
    "None",
    "Wedding Season",
    "Baby Shower",
    "Product Launch",
    "Grand Opening",
    "Discount Day",
    "Special Collection",
    "Fashion Shoot",
  ];

  const captionTypes = [
    "Marketing",
    "Social Media",
    "Product Description",
    "Instagram",
    "Facebook",
    "Website",
  ];

  const captionLengths = ["Short", "Medium", "Long", "Extra Long"];

  const tones = [
    "Professional",
    "Casual",
    "Friendly",
    "Luxury",
    "Playful",
    "Elegant",
    "Bold",
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
    { code: "gu-IN", name: "Gujarati", flag: "🇮🇳" },
    { code: "ta-IN", name: "Tamil", flag: "🇮🇳" },
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
            transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.1}px)`,
          }}
        ></div>
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-3xl animate-blob animation-delay-2000"
          style={{
            right: mousePosition.x - 200,
            bottom: mousePosition.y - 200,
            transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.2}px)`,
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="max-w-15xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NoorKala Caption Studio
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
                  <option
                    key={lang.code}
                    value={lang.code}
                    className="bg-slate-800 text-white"
                  >
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex ml-70">
        <div>
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
                        <p className="text-sm text-purple-300 mt-2">
                          Click to change image
                        </p>
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
                    <Edit3 className="w-5 h-5 mr-2 text-purple-400" />
                    Caption Settings
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Caption Type */}
                    <div>
                      <label className="block text-purple-300 font-medium mb-2">
                        📝 Caption Type
                      </label>
                      <select
                        value={captionType}
                        onChange={(e) => setCaptionType(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {captionTypes.map((item) => (
                          <option
                            key={item}
                            value={item.toLowerCase()}
                            className="bg-slate-800"
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Caption Length */}
                    <div>
                      <label className="block text-purple-300 font-medium mb-2">
                        📏 Length
                      </label>
                      <select
                        value={captionLength}
                        onChange={(e) => setCaptionLength(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {captionLengths.map((item) => (
                          <option
                            key={item}
                            value={item.toLowerCase()}
                            className="bg-slate-800"
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tone */}
                    <div>
                      <label className="block text-purple-300 font-medium mb-2">
                        🎭 Tone
                      </label>
                      <select
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {tones.map((item) => (
                          <option
                            key={item}
                            value={item.toLowerCase()}
                            className="bg-slate-800"
                          >
                            {item}
                          </option>
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
                        <option value="" className="bg-slate-800">
                          Select theme
                        </option>
                        {themes.map((item) => (
                          <option
                            key={item}
                            value={item}
                            className="bg-slate-800"
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Generate Button */}
                    <button 
                      onClick={handleGenerateCaption}
                      disabled={loading || !image}
                      className="ml-30 w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Generating Caption...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Generate Caption
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div>
                <div className="space-y-6">
                  {generatedCaption ? (
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                        <Sparkles className="w-6 h-6 mr-2 text-purple-400" />
                        Generated Caption
                      </h3>

                      {/* Caption Display */}
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-purple-300 font-medium flex items-center">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Your AI Caption
                          </p>
                          <div className="flex space-x-2">
                            <button
                              onClick={copyToClipboard}
                              className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors"
                              title="Copy to clipboard"
                            >
                              <Copy className="w-4 h-4 text-white" />
                            </button>
                            <button className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors">
                              <Share2 className="w-4 h-4 text-white" />
                            </button>
                            <button className="bg-white/20 backdrop-blur-lg p-2 rounded-full hover:bg-white/30 transition-colors">
                              <Heart className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>

                        <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                          <p className="text-white text-lg leading-relaxed whitespace-pre-wrap">
                            {generatedCaption}
                          </p>
                        </div>
                      </div>

                      {/* Caption Stats */}
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <Hash className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                          <p className="text-sm text-purple-300">Characters</p>
                          <p className="text-white font-semibold">
                            {generatedCaption?.length || 0}
                          </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <Edit3 className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                          <p className="text-sm text-purple-300">Words</p>
                          <p className="text-white font-semibold">
                            {generatedCaption?.split(" ").length || 0}
                          </p>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 text-center">
                          <Zap className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                          <p className="text-sm text-purple-300">Tone</p>
                          <p className="text-white font-semibold capitalize">
                            {tone}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-150 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-12 h-12 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Ready to Create Perfect Captions?
                      </h3>
                      <p className="text-gray-300">
                        Upload your product image and customize the caption
                        settings to generate engaging, AI-powered captions for
                        your marketing needs.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    </div>
  );
}
