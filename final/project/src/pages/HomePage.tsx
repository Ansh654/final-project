import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Users, Award } from 'lucide-react';

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg',
    'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg',
    'https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Rich Heritage",
      description: "Explore 5000+ years of incredible Indian culture and traditions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Interactive Learning",
      description: "Engage with quizzes and interactive maps for immersive experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Authentic Content",
      description: "Curated information about states, festivals, and cultural practices"
    }
  ];

  const scrollToContent = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <img
            src={heroImages[currentImageIndex]}
            alt="Indian Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">
              Incredible India
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 animate-fade-in-up animation-delay-200">
            Heritage & Culture
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Journey through the magnificent tapestry of Indian culture, explore ancient traditions, 
            vibrant festivals, and the rich heritage that makes India truly incredible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link
              to="/explore"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Exploring
            </Link>
            <Link
              to="/quiz"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transform hover:scale-105 transition-all duration-300"
            >
              Take Quiz
            </Link>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Discover India Like Never Before
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immerse yourself in the diverse cultures, traditions, and stories that make India a land of wonders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-orange-600 mb-4 group-hover:text-orange-700 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
            Choose your path to explore the incredible diversity and rich heritage of India
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link
              to="/explore"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">Explore States</h3>
              <p className="text-orange-100">Discover 10 amazing states</p>
            </Link>
            
            <Link
              to="/festivals"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">Festivals</h3>
              <p className="text-orange-100">Vibrant celebrations</p>
            </Link>
            
            <Link
              to="/quiz"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">Take Quiz</h3>
              <p className="text-orange-100">Test your knowledge</p>
            </Link>
            
            <Link
              to="/login"
              className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2">Join Us</h3>
              <p className="text-orange-100">Track your progress</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;