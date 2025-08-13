import React, { useState, useMemo } from 'react';
import { Calendar, Filter, Search } from 'lucide-react';
import { statesData } from '../data/statesData';

const FestivalsPage = () => {
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allFestivals = useMemo(() => {
    const festivals: Array<{
      name: string;
      month: string;
      description: string;
      stateName: string;
      stateId: string;
    }> = [];

    statesData.forEach(state => {
      state.festivals.forEach(festival => {
        festivals.push({
          ...festival,
          stateName: state.name,
          stateId: state.id
        });
      });
    });

    return festivals;
  }, []);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const filteredFestivals = useMemo(() => {
    return allFestivals.filter(festival => {
      const matchesState = selectedState === 'all' || festival.stateId === selectedState;
      const matchesMonth = selectedMonth === 'all' || 
        festival.month.toLowerCase().includes(selectedMonth.toLowerCase());
      const matchesSearch = festival.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        festival.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesState && matchesMonth && matchesSearch;
    });
  }, [allFestivals, selectedState, selectedMonth, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Indian Festivals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant celebrations and rich traditions of India through its colorful festivals
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="h-4 w-4 inline mr-1" />
                Search Festivals
              </label>
              <input
                type="text"
                placeholder="Search festivals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* State Filter */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="h-4 w-4 inline mr-1" />
                Filter by State
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All States</option>
                {statesData.map(state => (
                  <option key={state.id} value={state.id}>{state.name}</option>
                ))}
              </select>
            </div>

            {/* Month Filter */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="h-4 w-4 inline mr-1" />
                Filter by Month
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="all">All Months</option>
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <div className="md:col-span-1 flex items-end">
              <button
                onClick={() => {
                  setSelectedState('all');
                  setSelectedMonth('all');
                  setSearchTerm('');
                }}
                className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredFestivals.length} festival{filteredFestivals.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFestivals.map((festival, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4">
                <h3 className="text-xl font-bold text-white mb-1">{festival.name}</h3>
                <p className="text-orange-100 text-sm flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {festival.month}
                </p>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    {festival.stateName}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  {festival.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredFestivals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No festivals found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FestivalsPage;