import { useState, useEffect } from 'react';
import { Mountain, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        poster="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
      >
        <source 
          src="https://videos.pexels.com/video-files/29421334/12668937_640_360_50fps.mp4"
          type="video/mp4" 
        />
        {/* Fallback for unsupported formats */}
        Your browser does not support the video tag.
      </video>

      {/* Fallback Image (shown while video loads) */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')`
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <Mountain className="w-16 h-16 text-white mb-8 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center max-w-4xl mb-6">
          Discover the Majestic Heights of Uttarakhand
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl mb-8">
          Experience breathtaking treks and spiritual journeys through the Himalayas
        </p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition transform hover:scale-105 hover:shadow-xl">
          Explore Packages
        </button>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  );
}