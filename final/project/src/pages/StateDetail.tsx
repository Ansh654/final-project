import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Star } from 'lucide-react';
import { statesData } from '../data/statesData';

const StateDetail = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const state = statesData.find(s => s.id === stateId);

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">State not found</h2>
          <Link to="/explore" className="text-orange-600 hover:text-orange-700">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={state.images[0]}
          alt={state.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <Link
            to="/explore"
            className="inline-flex items-center space-x-2 text-white hover:text-orange-300 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Explore</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{state.name}</h1>
          <p className="text-xl text-orange-200">Discover the heritage and culture</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Culture Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Culture</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{state.culture}</p>
            </div>

            {/* History Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">History</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{state.history}</p>
            </div>

            {/* Festivals Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">Major Festivals</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {state.festivals.map((festival, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-orange-600 mb-2">{festival.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      {festival.month}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">{festival.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Popular Places */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Popular Places</h3>
              </div>
              <ul className="space-y-3">
                {state.popularPlaces.map((place, index) => (
                  <li key={index} className="text-gray-700 hover:text-orange-600 transition-colors">
                    • {place}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {state.images.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${state.name} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quiz CTA */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Test Your Knowledge</h3>
              <p className="mb-4 text-orange-100">
                Take a quiz about {state.name} and see how much you know!
              </p>
              <Link
                to={`/quiz?state=${state.id}`}
                className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Take Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDetail;