'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mic, Camera, MessageCircle, ArrowRight, Sparkles, Lightbulb, Zap, Palette, Brain, Rocket } from 'lucide-react';
export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);


  // useEffect(() => {
  //   setIsVisible(true);
    
  //   const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   window.addEventListener('scroll', handleScroll);
    
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % 3);
  //   }, 4000);
    
  //   return () => {
  //     clearInterval(interval);
  //     window.removeEventListener('mousemove', handleMouseMove);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
    useEffect(() => {
  // setIsVisible(true);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll);

  const interval = setInterval(() => {
    // setCurrentTestimonial((prev) => (prev + 1) % 3);
  }, 4000);

  return () => {
    clearInterval(interval);
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const cards = [
    {
      title: '🎨 Enhance Image',
      description: 'Upload product image, select festival, and get a styled image.',
      icon: <Camera className="w-6 h-6" />,
      mode: 'generate',
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      shadow: 'shadow-purple-500/25'
    },
    {
      title: '📝 Generate Caption',
      description: 'Just get a festival-ready caption from your product image.',
      icon: <MessageCircle className="w-6 h-6" />,
      mode: 'caption',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      shadow: 'shadow-blue-500/25'
    },
    {
      title: '📊 Product Insight',
      description: 'Receive data-driven insight to optimize your product listing.',
      icon: <Lightbulb className="w-6 h-6" />,
      mode: 'business-insight',
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      shadow: 'shadow-amber-500/25'
    },
    {
      title: '📢 Business Tutorials',
      description: 'Catch up on these latest market trends and upgrade your learning.',
      icon: <Sparkles className="w-6 h-6" />,
      mode: 'tutorials',
      gradient: 'from-green-400 via-blue-500 to-purple-500',
      shadow: 'shadow-green-500/25'
    },
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Advanced neural networks understand your products and market trends"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Enhancement",
      description: "Transform ordinary photos into festival-ready masterpieces"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Get results in seconds, not hours"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Business Growth",
      description: "Proven strategies to boost your sales and reach"
    }
  ];

  return (
    <div className="group relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
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

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center z-10">
          {/* Logo with glow effect */}
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white w-8 h-8" />
              </div>
            </div>
            <span className="ml-4 text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              NoorKala AI
            </span>
          </div>

          {/* Main heading with typewriter effect */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Business Story
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered enhancer, captioner, and business assistant for 
            <span className="text-purple-400 font-semibold"> sellers</span>
          </p>

          {/* CTA Button */}
          <div className="mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40">
              <span className="flex items-center">
              <a href='/generate'>
                Get Started Free </a>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
              </span>
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cards.map((card, index) => (
              <a
                href={`/${card.mode}`}
                key={index}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className={`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${card.shadow}`}>
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {card.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the cutting-edge AI tools that will revolutionize your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-purple-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started in just 3 simple steps
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                step: "1", 
                title: "Upload Image", 
                desc: "Take a simple photo of your product",
                icon: <Mic className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              { 
                step: "2", 
                title: "Enhance", 
                desc: "Let our AI work its magic",
                icon: <Camera className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              { 
                step: "3", 
                title: "Feeback Upgrade", 
                desc: "Don't like the image? Don't worry, change it with your feedback.",
                icon: <Sparkles className="w-8 h-8" />,
                color: "from-green-500 to-teal-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.step}
                  </div>
                </div>
                <div className="mb-4 text-purple-400 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/40 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  NoorKala AI
                </span>
              </div>
              <p className="text-gray-400 text-lg">
                Empowering entrepreneurs with the limitless potential of AI
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">संपर्क</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📧</span> support@noorkala.ai
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span> WhatsApp: +91 98765 43210
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🌐</span> www.noorkala.ai
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['हिंदी', 'English', 'मराठी', 'ગુજરાતી', 'বাংলা', 'தமிழ்'].map((lang) => (
                  <span key={lang} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-sm text-purple-300 hover:bg-purple-500/30 transition-colors">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NoorKala AI. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

