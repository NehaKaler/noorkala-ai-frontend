'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, BookOpen, TrendingUp, Languages, Target, DollarSign, BarChart, Sparkles,  Eye, Clock, Star, ChevronRight, CheckCircle } from 'lucide-react';

export default function BusinessTutorialsPage() {
    const [assistantLang, setAssistantLang] = useState("en");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
 const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [completedTutorials, setCompletedTutorials] = useState(new Set());
  const videoRef = useRef(null);

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


  type Tutorial = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  level: string;
  views: string;
  rating: number;
  lessons: number;
  videoUrl: string;
};


  const tutorials = [
    {
      id: 1,
      title: 'Digital Marketing Mastery',
      description: 'Learn how to create compelling social media campaigns that drive sales and build brand awareness for your local business.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'marketing',
      duration: '15 min',
      level: 'beginner',
      views: '2.3k',
      rating: 4.8,
      lessons: 5,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    },
    {
      id: 2,
      title: 'Customer Acquisition Strategies',
      description: 'Discover proven techniques to attract and convert customers using low-cost, high-impact sales strategies.',
      thumbnail: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop',
      category: 'sales',
      duration: '22 min',
      level: 'intermediate',
      views: '1.8k',
      rating: 4.9,
      lessons: 7,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
      id: 3,
      title: 'Scaling Your Small Business',
      description: 'Strategic growth planning, hiring, and systems that help you scale from a one-person show to a thriving team.',
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop',
      category: 'growth',
      duration: '18 min',
      level: 'advanced',
      views: '1.2k',
      rating: 4.7,
      lessons: 6,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    },
    {
      id: 4,
      title: 'Business Analytics & Data',
      description: 'Understand your numbers, track key metrics, and make data-driven decisions to optimize your business performance.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'analytics',
      duration: '25 min',
      level: 'intermediate',
      views: '950',
      rating: 4.6,
      lessons: 8,
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    }
  ];

  const categoryConfig = {
    marketing: {
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      shadow: 'shadow-purple-500/25',
      color: 'purple'
    },
    sales: {
      icon: <DollarSign className="w-6 h-6" />,
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      shadow: 'shadow-green-500/25',
      color: 'green'
    },
    growth: {
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-blue-400 via-cyan-500 to-indigo-500',
      shadow: 'shadow-blue-500/25',
      color: 'blue'
    },
    analytics: {
      icon: <BarChart className="w-6 h-6" />,
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      shadow: 'shadow-amber-500/25',
      color: 'amber'
    }
  };
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi-IN", name: "Hindi", flag: "🇮🇳" },
    { code: "gu-IN", name: "Gujarati", flag: "🇮🇳" },
    { code: "ta-IN", name: "Tamil", flag: "🇮🇳" }
  ];

  

  const openTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
    document.body.style.overflow = 'hidden';
  };

  const closeTutorial = () => {
    setSelectedTutorial(null);
    document.body.style.overflow = 'unset';
    // if (videoRef.current) {
    //   videoRef.current.pause();
    // }
  };

  // const markAsCompleted = (tutorialId: any) => {
  //   setCompletedTutorials(prev => new Set([...prev, tutorialId]));
  // };
  const markAsCompleted = (tutorialId: number) => {
  setCompletedTutorials(prev => new Set([...prev, tutorialId]));
};

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
                NoorKala Business Tutorials Studio
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

      {/* Hero Section */}
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto text-center z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <BookOpen className="text-white w-8 h-8" />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the latest market trends and upgrade your business skills with our 
            <span className="text-blue-400 font-semibold"> expert-curated tutorials</span>
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{tutorials.length}</div>
              <div className="text-gray-300 text-sm">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{completedTutorials.size}</div>
              <div className="text-gray-300 text-sm">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {tutorials.reduce((total, t) => total + parseInt(t.views.replace('k', '00').replace('.', '')), 0) / 1000}k
              </div>
              <div className="text-gray-300 text-sm">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="relative px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {tutorials.map((tutorial) => {
              const config = categoryConfig[tutorial.category as keyof typeof categoryConfig];


              const isCompleted = completedTutorials.has(tutorial.id);
              
              return (
                <div key={tutorial.id} className="group relative cursor-pointer" onClick={() => openTutorial(tutorial)}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${config.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className={`relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105 ${config.shadow}`}>
                    
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Play className="w-8 h-8 ml-1" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                        {tutorial.duration}
                      </div>

                      {/* Completed Badge */}
                      {isCompleted && (
                        <div className="absolute top-4 left-4 bg-green-500 rounded-full p-2">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${config.gradient} rounded-full flex items-center justify-center text-white`}>
                            {config.icon}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`px-2 py-1 rounded-full text-xs border `}>
                                {tutorial.level}
                              </span>
                              <span className="text-xs text-gray-400 capitalize">
                                {tutorial.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-white">{tutorial.rating}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {tutorial.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {tutorial.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {tutorial.views}
                          </span>
                          <span className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            {tutorial.lessons} lessons
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Close Button */}
            <button
              onClick={closeTutorial}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
            >
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors">
                ✕
              </div>
            </button>

            {/* Video Container */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden">
              {/* Video */}
              <div className="relative bg-black aspect-video">
                <video
                  ref={videoRef}
                  src={selectedTutorial.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onEnded={() => markAsCompleted(selectedTutorial.id)}
                />
              </div>

              {/* Tutorial Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedTutorial.title}</h2>
                    <p className="text-gray-300 text-lg">{selectedTutorial.description}</p>
                  </div>
                  <button
                    onClick={() => markAsCompleted(selectedTutorial.id)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Mark Complete
                  </button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedTutorial.duration}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {selectedTutorial.views} views
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {selectedTutorial.rating}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {selectedTutorial.lessons} lessons
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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