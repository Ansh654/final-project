import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { statesData } from '../data/statesData';
import IndiaMap from '../components/IndiaMap';
import { Calendar, MapPin, Users } from 'lucide-react';

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState('culture');
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const tabs = [
    { id: 'culture', label: 'Culture', icon: <Users className="h-5 w-5" /> },
    { id: 'festivals', label: 'Festivals', icon: <Calendar className="h-5 w-5" /> },
    { id: 'history', label: 'History', icon: <MapPin className="h-5 w-5" /> }
  ];

  const getStateContent = (stateId: string) => {
    const state = statesData.find(s => s.id === stateId);
    if (!state) return null;

    switch (activeTab) {
      case 'culture':
        return state.culture;
      case 'festivals':
        return state.festivals.map(f => f.name).join(', ');
      case 'history':
        return state.history;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore India
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any state on the map to discover its rich heritage, vibrant culture, and fascinating history
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map and States Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Interactive Map */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Interactive India Map
            </h2>
            <IndiaMap 
              onStateClick={setSelectedState} 
              selectedState={selectedState} 
            />
            {selectedState && (
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h3 className="font-bold text-lg text-orange-800 mb-2">
                  {statesData.find(s => s.id === selectedState)?.name}
                </h3>
                <p className="text-gray-700 text-sm">
                  {getStateContent(selectedState)}
                </p>
                <Link
                  to={`/state/${selectedState}`}
                  className="inline-block mt-3 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            )}
          </div>

          {/* States Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Featured States
            </h2>
            <div className="grid gap-4 max-h-96 overflow-y-auto">
              {statesData.map((state) => (
                <div
                  key={state.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedState(state.id)}
                >
                  <div className="flex">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img
                        src={state.images[0]}
                        alt={state.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-orange-600 transition-colors">
                        {state.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {getStateContent(state.id)}
                      </p>
                      <Link
                        to={`/state/${state.id}`}
                        className="inline-block mt-2 text-orange-600 hover:text-orange-700 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;