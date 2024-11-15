import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Mountain, Map, ThermometerSun, Users, Clock } from 'lucide-react';
import { getPackageById, TrekDate } from '../data/packages';

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<TrekDate | null>(null);
  
  const pkg = getPackageById(Number(id));
  
  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Package not found</p>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-gray-50">
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={pkg.images[0]}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center text-white hover:text-emerald-400 transition"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Packages
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pkg.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat icon={<Clock />} label="Duration" value={pkg.duration} />
            <Stat icon={<Mountain />} label="Elevation" value={pkg.elevation} />
            <Stat icon={<Map />} label="Distance" value={pkg.distance} />
            <Stat icon={<Users />} label="Group Size" value={pkg.groupSize} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">{pkg.detailedDescription}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Trek Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Mountain className="w-5 h-5 text-emerald-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border-l-4 border-emerald-600 pl-4">
                    <h3 className="font-bold text-lg">Day {day.day}: {day.title}</h3>
                    <p className="text-gray-600 mt-2">{day.description}</p>
                    {(day.elevation || day.distance) && (
                      <div className="flex gap-4 mt-2 text-sm text-gray-500">
                        {day.elevation && (
                          <span className="flex items-center gap-1">
                            <Mountain className="w-4 h-4" />
                            {day.elevation}
                          </span>
                        )}
                        {day.distance && (
                          <span className="flex items-center gap-1">
                            <Map className="w-4 h-4" />
                            {day.distance}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Best Time to Visit */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-emerald-600" />
                Best Time to Visit
              </h3>
              <div className="flex flex-wrap gap-2">
                {pkg.bestMonths.map((month) => (
                  <span
                    key={month}
                    className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>

            {/* Available Dates */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                Upcoming Dates
              </h3>
              <div className="space-y-3">
                {pkg.upcomingDates.map((date) => (
                  <div
                    key={date.startDate}
                    className={`p-4 border rounded-lg cursor-pointer transition ${
                      selectedDate === date
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-600'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">
                          {new Date(date.startDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })} - {new Date(date.endDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                        <p className="text-sm text-gray-600">
                          {date.availableSpots} spots left
                        </p>
                      </div>
                      <p className="font-semibold text-emerald-600">{date.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedDate}
              >
                Book Now
              </button>
            </div>

            {/* Included/Excluded Services */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {pkg.includedServices.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">What's Not Included</h3>
                <ul className="space-y-2">
                  {pkg.excludedServices.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-2 text-white">
      {icon}
      <div>
        <p className="text-sm opacity-80">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}