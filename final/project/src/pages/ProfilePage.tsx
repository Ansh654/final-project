import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Trophy, MapPin, Calendar, Star, Target, Award } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { statesData } from '../data/statesData';

const ProfilePage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Please Log In</h1>
            <p className="text-gray-600 mb-8">You need to log in to view your profile and track your progress.</p>
            <Link
              to="/login"
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalQuizzesTaken = Object.keys(user.quizScores || {}).length;
  const totalScore = Object.values(user.quizScores || {}).reduce((sum, score) => sum + score, 0);
  const averageScore = totalQuizzesTaken > 0 ? Math.round(totalScore / totalQuizzesTaken) : 0;
  const visitedStates = user.visitedStates || [];

  const getScoreCategory = (score: number) => {
    if (score >= 9) return { label: 'Expert', color: 'text-green-600', bgColor: 'bg-green-100' };
    if (score >= 7) return { label: 'Advanced', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    if (score >= 5) return { label: 'Intermediate', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
    return { label: 'Beginner', color: 'text-red-600', bgColor: 'bg-red-100' };
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <User className="h-5 w-5" /> },
    { id: 'quiz-scores', label: 'Quiz Scores', icon: <Trophy className="h-5 w-5" /> },
    { id: 'visited-states', label: 'Visited States', icon: <MapPin className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-white" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {user.name}!</h1>
                <p className="text-gray-600 mb-4">Exploring India's incredible heritage and culture</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-600">{totalQuizzesTaken} Quizzes</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{averageScore}/10 Avg Score</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">{visitedStates.length} States Explored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg mb-8">
            <div className="border-b border-gray-200">
              <div className="flex flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'border-b-2 border-orange-500 text-orange-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Total Quizzes</p>
                          <p className="text-2xl font-bold text-orange-600">{totalQuizzesTaken}</p>
                        </div>
                        <Trophy className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Average Score</p>
                          <p className="text-2xl font-bold text-blue-600">{averageScore}/10</p>
                        </div>
                        <Target className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">States Explored</p>
                          <p className="text-2xl font-bold text-green-600">{visitedStates.length}/10</p>
                        </div>
                        <MapPin className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                    {totalQuizzesTaken > 0 ? (
                      <div className="space-y-3">
                        {Object.entries(user.quizScores || {}).slice(-3).map(([stateId, score]) => {
                          const state = statesData.find(s => s.id === stateId);
                          const category = getScoreCategory(score);
                          return (
                            <div key={stateId} className="flex items-center justify-between py-2">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <img
                                    src={state?.images[0] || ''}
                                    alt={state?.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">{state?.name} Quiz</p>
                                  <p className="text-sm text-gray-500">Scored {score}/10</p>
                                </div>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${category.bgColor} ${category.color}`}>
                                {category.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Trophy className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No quiz attempts yet</p>
                        <Link
                          to="/quiz"
                          className="inline-block mt-3 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                        >
                          Take Your First Quiz
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'quiz-scores' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">Quiz Performance</h3>
                    <Link
                      to="/quiz"
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                    >
                      Take New Quiz
                    </Link>
                  </div>

                  {Object.keys(user.quizScores || {}).length > 0 ? (
                    <div className="grid gap-4">
                      {Object.entries(user.quizScores || {}).map(([stateId, score]) => {
                        const state = statesData.find(s => s.id === stateId);
                        const category = getScoreCategory(score);
                        const percentage = (score / 10) * 100;
                        
                        return (
                          <div key={stateId} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 rounded-lg overflow-hidden">
                                <img
                                  src={state?.images[0] || ''}
                                  alt={state?.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-lg font-semibold text-gray-800">{state?.name}</h4>
                                  <div className="flex items-center space-x-3">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.bgColor} ${category.color}`}>
                                      {category.label}
                                    </span>
                                    <span className="text-2xl font-bold text-orange-600">{score}/10</span>
                                  </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                                  <div
                                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                                <p className="text-sm text-gray-600">{percentage}% correct answers</p>
                              </div>
                              <Link
                                to={`/quiz?state=${stateId}`}
                                className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors text-sm font-medium"
                              >
                                Retake
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-600 mb-2">No Quiz Scores Yet</h4>
                      <p className="text-gray-500 mb-6">Start taking quizzes to track your knowledge about Indian states</p>
                      <Link
                        to="/quiz"
                        className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                      >
                        Take Your First Quiz
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'visited-states' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">States You've Explored</h3>
                    <Link
                      to="/explore"
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
                    >
                      Explore More States
                    </Link>
                  </div>

                  {visitedStates.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {visitedStates.map((stateId) => {
                        const state = statesData.find(s => s.id === stateId);
                        const hasQuizScore = user.quizScores && user.quizScores[stateId];
                        
                        return (
                          <div key={stateId} className="border rounded-lg p-6 hover:shadow-md transition-all duration-200">
                            <div className="flex items-start space-x-4">
                              <div className="w-20 h-20 rounded-lg overflow-hidden">
                                <img
                                  src={state?.images[0] || ''}
                                  alt={state?.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{state?.name}</h4>
                                <div className="space-y-2">
                                  {hasQuizScore && (
                                    <div className="flex items-center space-x-2">
                                      <Trophy className="h-4 w-4 text-orange-500" />
                                      <span className="text-sm text-gray-600">
                                        Quiz Score: {user.quizScores[stateId]}/10
                                      </span>
                                    </div>
                                  )}
                                  <div className="flex items-center space-x-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm text-gray-600">Explored</span>
                                  </div>
                                </div>
                                <div className="mt-3 flex space-x-2">
                                  <Link
                                    to={`/state/${stateId}`}
                                    className="px-3 py-1 bg-orange-100 text-orange-600 rounded text-sm hover:bg-orange-200 transition-colors"
                                  >
                                    View Details
                                  </Link>
                                  {!hasQuizScore && (
                                    <Link
                                      to={`/quiz?state=${stateId}`}
                                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm hover:bg-blue-200 transition-colors"
                                    >
                                      Take Quiz
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-600 mb-2">No States Explored Yet</h4>
                      <p className="text-gray-500 mb-6">Start exploring Indian states to track your journey</p>
                      <Link
                        to="/explore"
                        className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                      >
                        Start Exploring
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;