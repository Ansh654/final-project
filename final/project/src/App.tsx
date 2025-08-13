import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import StateDetail from './pages/StateDetail';
import FestivalsPage from './pages/FestivalsPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Incredible India...</h2>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/state/:stateId" element={<StateDetail />} />
              <Route path="/festivals" element={<FestivalsPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;