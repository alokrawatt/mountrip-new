// import React from 'react';
import PackageCard from './PackageCard';
import { Helmet } from 'react-helmet';

const packages = [
  {
    id: 1,
    title: "Valley of Flowers Trek",
    description: "Embark on a mesmerizing journey through the UNESCO World Heritage site, Valley of Flowers. This moderate trek takes you through pristine alpine meadows, vibrant wildflowers, and stunning Himalayan vistas. Perfect for nature lovers and photography enthusiasts, this trek offers a unique blend of natural beauty and spiritual experience with a visit to Hemkund Sahib.",
    duration: "6 Days",
    groupSize: "8-12 People",
    difficulty: "Moderate",
    price: "₹16,999",
    images: [
      "https://images.unsplash.com/photo-1658939061463-105935bf38cc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    title: "Kedarkantha Summit",
    description: "Conquer the magnificent Kedarkantha peak at 12,500 ft. This winter trek offers breathtaking views of the Himalayan range, pristine snow-covered trails, and camping under star-lit skies. Experience the thrill of summit climbing while enjoying the serene beauty of pine forests and mountain meadows.",
    duration: "6 Days",
    groupSize: "10-15 People",
    difficulty: "Challenging",
    price: "₹12,999",
    images: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522232000905-0b5b5c067a4b?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    title: "Nanda Devi Base Camp",
    description: "Adventure to the base of India's highest mountain entirely within the country. This challenging trek offers unparalleled views of Nanda Devi and surrounding peaks. Trek through remote villages, dense forests, and high-altitude meadows while experiencing the rich culture of Kumaon.",
    duration: "9 Days",
    groupSize: "6-8 People",
    difficulty: "Challenging",
    price: "₹24,999",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606067000227-5a018fddf2b0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80"
    ]
  }
];

export default function Packages() {
  return (
    <>
      <Helmet>
        <title>MounTrek - Trek the Majestic Heights of Uttarakhand</title>
        <meta name="description" content="Explore our curated selection of trekking adventures, including the Valley of Flowers Trek, Kedarkantha Summit, and Nanda Devi Base Camp." />
        <meta name="keywords" content="trekking, adventures, Valley of Flowers, Kedarkantha, Nanda Devi" />
        <meta property="og:title" content="Our Featured Expeditions" />
        <meta property="og:description" content="Choose from our carefully curated selection of trekking adventures." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80" />
        <meta property="og:url" content="https://mountrek.in/" />
      </Helmet>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Expeditions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of trekking adventures
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}