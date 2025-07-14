'use client';

import Link from 'next/link';
import { Sparkles, Play, MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <div className="flex items-center justify-center mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="ml-3 text-3xl font-bold text-orange-700">NoorKala AI</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Empower Your Product with Regional Festive Flair ✨
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          AI-powered image enhancer and caption generator for small-town sellers. Speak your product, upload a photo, and let AI handle the rest.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/generate">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" /> Try Image Generator
            </button>
          </Link>

          <Link href="/caption">
            <button className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" /> Try Caption Generator
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
