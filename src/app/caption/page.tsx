'use client';

import React, { useState } from 'react';
import { Mic, Sparkles } from 'lucide-react';

export default function CaptionPage() {
  const [productName, setProductName] = useState('');
  const [language, setLanguage] = useState('Hindi');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleGenerateCaption = async () => {
    setLoading(true);
    setCaption('');
    try {
      const res = await fetch('http://localhost:8000/generate-caption', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: productName, language }),
      });
      const data = await res.json();
      if (data.caption) setCaption(data.caption);
      else alert('Caption generation failed');
    } catch (err) {
      alert('Server error');
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'hi-IN'; // Change to 'en-IN' or others if needed
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setProductName(transcript);
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col justify-center items-center px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-orange-700 mb-6">📝 AI Caption Generator</h1>

      <div className="flex items-center gap-2 max-w-md w-full mb-4">
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter or speak your product name..."
          className="flex-1 px-4 py-3 border rounded-lg"
        />
        <button
          onClick={handleVoiceInput}
          className={`p-3 rounded-full ${isListening ? 'bg-red-600 text-white' : 'bg-orange-600 text-white'} hover:shadow-lg`}
          title="Speak"
        >
          <Mic />
        </button>
      </div>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="w-full max-w-md px-4 py-3 mb-4 border rounded-lg"
      >
        <option>Hindi</option>
        <option>English</option>
        <option>Marathi</option>
        <option>Gujarati</option>
        <option>Tamil</option>
        <option>Bangla</option>
      </select>

      <button
        onClick={handleGenerateCaption}
        disabled={loading || !productName}
        className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 font-semibold"
      >
        {loading ? 'Generating...' : 'Generate Caption'}
      </button>

      {caption && (
        <div className="mt-6 bg-white p-4 rounded-xl shadow-md max-w-xl">
          <h3 className="text-lg font-semibold mb-2">Generated Caption:</h3>
          <p className="text-gray-700">{caption}</p>
        </div>
      )}
    </div>
  );
}
