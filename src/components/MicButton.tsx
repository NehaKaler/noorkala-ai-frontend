// components/MicButton.tsx
"use client";

import { useRef, useState } from "react";
import { Mic, MicOff } from "lucide-react"; // Optional: for icons

type MicButtonProps = {
  src: string; // e.g., /audio/guide.mp3
};

export default function MicButton({ src }: MicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // reset to beginning
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Stop playing if audio ends naturally
  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={toggleAudio}
        className={`p-2 rounded-full ${isPlaying ? "bg-red-500" : "bg-green-500"} text-white`}
        aria-label="Toggle Voice"
      >
        {isPlaying ? <MicOff size={20} /> : <Mic size={20} />}
      </button>
      <audio ref={audioRef} src={src} onEnded={handleEnded} />
    </div>
  );
}
