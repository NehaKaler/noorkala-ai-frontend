"use client";

import React, { useState, useEffect } from "react";
import { Lightbulb, TrendingUp, DollarSign, Package, BarChart3, Sparkles, Languages } from "lucide-react";

export default function BusinessInsightPage() {
  const [formData, setFormData] = useState({
    product: '',
    category: '',
    price: '',
    units_sold: '',
  });

  const [assistantLang, setAssistantLang] = useState("en");
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  // Validation for price and units_sold to not be less than 0
  if (name === 'price' || name === 'units_sold') {
    if (Number(value) < 0) return;  // Cast value to number for comparison
  }

  setFormData({ ...formData, [name]: value });
};

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const { name, value } = e.target;

  // Validation for price and units_sold to not be less than 0
  if (name === 'price' || name === 'units_sold') {
    if (Number(value) < 0) return;  // Cast value to number for comparison
  }

  setFormData({ ...formData, [name]: value });
};

  // const handleChange = (e: { target: { name: any; value: any; }; }) => {
  //   const { name, value } = e.target;
    
  //   // Validation for price and units_sold to not be less than 0
  //   if (name === 'price' || name === 'units_sold') {
  //     if (value < 0) return;
  //   }
    
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async () => {
    if (!formData.product || !formData.category || !formData.price || !formData.units_sold) {
      alert("Please fill all fields!");
      return;
    }

    setLoading(true);
    setReport('');

    try {
      const response = await fetch('http://localhost:8000/api/business-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sales_data: [
            {
              product: formData.product,
              category: formData.category,
              price: parseFloat(formData.price),
              units_sold: parseInt(formData.units_sold),
            },
          ],
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setReport(data.report);
      } else {
        setReport('❌ Error generating report');
      }
    } catch (error) {
      console.error('Error:', error);
      setReport('❌ Something went wrong while generating the report');
    } finally {
      setLoading(false);
    }
  };

  const productOptions = [
    "Saree", "Kurta", "Suit", "Shirt", "Pant", "Dress", "Shoes", "Jewelry", 
    "Bag", "Watch", "Electronics", "Books", "Home Decor", "Kitchen Items"
  ];

  const categoryOptions = [
    "Fashion & Clothing", "Electronics", "Home & Garden", "Books & Media", 
    "Sports & Outdoors", "Beauty & Personal Care", "Jewelry & Accessories",
    "Health & Wellness", "Food & Beverages", "Toys & Games"
  ];

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
                NoorKala Business Insight Studio
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
            {/* Product Details Section */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Package className="w-6 h-6 mr-2 text-purple-400" />
                Product Information
              </h2>
              
              <div className="space-y-4">
                {/* Product Name */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    📦 Product Name
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select product</option>
                    {productOptions.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    🏷️ Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="" className="bg-slate-800">Select category</option>
                    {categoryOptions.map((item) => (
                      <option key={item} value={item} className="bg-slate-800">{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Sales Data Section */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-400" />
                Sales Metrics
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Price */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    💰 Price (in ₹)
                  </label>
                  <input
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={inputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Units Sold */}
                <div>
                  <label className="block text-purple-300 font-medium mb-2">
                    📊 Units Sold
                  </label>
                  <input
                    name="units_sold"
                    type="number"
                    min="0"
                    placeholder="Enter units sold"
                    value={formData.units_sold}
                    onChange={inputChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleSubmit}
                disabled={loading || !formData.product || !formData.category || !formData.price || !formData.units_sold}
                className="w-full mt-6 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg shadow-purple-500/25"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Analyzing Data...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Generate Business Insight
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {report ? (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-2 text-purple-400" />
                  Your Business Report
                </h3>
                
                <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-xl p-6">
                  <div className="space-y-4">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <DollarSign className="w-6 h-6 text-green-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Revenue</p>
                        <p className="text-lg font-bold text-white">
                          ₹{(parseFloat(formData.price) * parseInt(formData.units_sold)).toLocaleString()}
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3 text-center">
                        <Package className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                        <p className="text-sm text-gray-300">Units Sold</p>
                        <p className="text-lg font-bold text-white">{formData.units_sold}</p>
                      </div>
                    </div>

                    {/* Report Content */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <pre className="whitespace-pre-wrap text-gray-200 text-sm leading-relaxed font-sans">
                        {report}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Analyze Your Business?
                </h3>
                <p className="text-gray-300">
                  Enter your product details and sales data to generate comprehensive business insights and recommendations.
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