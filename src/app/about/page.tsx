'use client';

import { Sparkles, Globe, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50 px-4 py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-orange-700 mb-6">🌟 About NoorKala AI</h1>
      <p className="max-w-3xl text-lg text-gray-700 mb-10">
        NoorKala AI is an inclusive digital assistant built for small-town entrepreneurs and rural artisans across India.
        We use AI to turn your simple product photos into beautifully styled images, and your thoughts into captions that sell — in your language.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl">
        <div className="p-6 rounded-xl bg-white shadow-lg">
          <Sparkles className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">Culturally Aware</h3>
          <p className="text-sm text-gray-600">Understands local festivals, emotions, and traditions.</p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-lg">
          <Users className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">Inclusive First</h3>
          <p className="text-sm text-gray-600">Built for first-time sellers, not tech experts.</p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-lg">
          <Globe className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">Vernacular Voice</h3>
          <p className="text-sm text-gray-600">Talk to NoorKala in your regional language.</p>
        </div>

        <div className="p-6 rounded-xl bg-white shadow-lg">
          <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold mb-2">Business Growth</h3>
          <p className="text-sm text-gray-600">Turn AI magic into sales and monthly earnings.</p>
        </div>
      </div>
    </div>
  );
}
