'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!uploadedImage || !prompt) {
      alert('Please provide both image and prompt');
      return;
    }

    setLoading(true);
    setGeneratedImage(null);

    try {
      const formData = new FormData();
      formData.append('image', uploadedImage);
      formData.append('prompt', prompt);

      const response = await fetch('http://localhost:8000/enhance-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.image_url) {
        setGeneratedImage(data.image_url);
      } else {
        alert('Image enhancement failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-700 mb-6">🖼️ AI Image Enhancer</h1>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setUploadedImage(file);
          }}
          className="w-full mb-4 bg-white px-4 py-3 rounded-lg border border-gray-300"
        />

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe how to style the image (e.g., Diwali, warm tone)..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <button
          onClick={handleGenerate}
          disabled={loading || !prompt || !uploadedImage}
          className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition duration-300"
        >
          {loading ? 'Enhancing...' : 'Enhance Image'}
        </button>

        {generatedImage && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Enhanced Image:</h2>
            <Image
              src={generatedImage}
              alt="AI Enhanced"
              width={512}
              height={512}
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
}
