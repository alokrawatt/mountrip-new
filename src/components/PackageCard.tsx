import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Calendar, Clock, Users, Mountain } from 'lucide-react';
import { Package } from '../data/packages';

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % pkg.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + pkg.images.length) % pkg.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 mb-6">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.images[currentImageIndex]}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Carousel Controls */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
          <button
            onClick={prevImage}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition"
          >
            <ChevronDown className="w-6 h-6 text-white transform rotate-90" />
          </button>
          <button
            onClick={nextImage}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition"
          >
            <ChevronDown className="w-6 h-6 text-white transform -rotate-90" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{pkg.title}</h3>
          <span className="text-xl font-bold text-emerald-600">{pkg.price}</span>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">{pkg.groupSize}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">{pkg.difficulty}</span>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-[500px]' : 'max-h-20'
          }`}
        >
          <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
          <button 
            onClick={() => navigate(`/package/${pkg.id}`)}
            className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition transform hover:scale-105"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}