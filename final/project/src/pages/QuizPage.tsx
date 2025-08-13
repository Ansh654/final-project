import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Timer, RotateCcw, Trophy, Target } from 'lucide-react';
import { statesData } from '../data/statesData';
import { quizData } from '../data/quizData';
import { useAuth } from '../contexts/AuthContext';

const QuizPage = () => {
  const [searchParams] = useSearchParams();
  const { user, updateUserScore } = useAuth();
  const [selectedState, setSelectedState] = useState<string>(searchParams.get('state') || '');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const questions = selectedState ? quizData[selectedState] || [] : [];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizStarted && timeLeft > 0 && !showResult && !showAnswer) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showAnswer) {
      handleTimeUp();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, quizStarted, showResult, showAnswer]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };

  const handleTimeUp = () => {
    setShowAnswer(true);
    setIsFlipped(true);
    setTimeout(() => {
      nextQuestion();
    }, 3000);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || showAnswer) return;
    
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    setIsFlipped(true);
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      nextQuestion();
    }, 3000);
  };

  const nextQuestion = () => {
    setIsFlipped(false);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setShowResult(true);
    if (user && selectedState) {
      updateUserScore(selectedState, score + (selectedAnswer === questions[currentQuestion]?.correct ? 1 : 0));
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setTimeLeft(30);
    setQuizStarted(false);
    setShowAnswer(false);
    setIsFlipped(false);
  };

  if (!selectedState) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Quiz Challenge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test your knowledge about India's rich heritage and culture
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Choose a State to Begin
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {statesData.map((state) => (
                  <button
                    key={state.id}
                    onClick={() => setSelectedState(state.id)}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-200 group"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                      <img
                        src={state.images[0]}
                        alt={state.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                      {state.name}
                    </h3>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    const stateName = statesData.find(s => s.id === selectedState)?.name;
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 text-center">
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {stateName} Quiz
                </h1>
                <p className="text-gray-600">
                  Test your knowledge about {stateName}'s culture, history, and festivals
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Quiz Rules</h2>
                <ul className="text-left text-gray-700 space-y-2">
                  <li>• 10 multiple choice questions</li>
                  <li>• 30 seconds per question</li>
                  <li>• Questions about culture, history, and festivals</li>
                  <li>• Your score will be saved if you're logged in</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={startQuiz}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-bold text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
                >
                  Start Quiz
                </button>
                <button
                  onClick={() => setSelectedState('')}
                  className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors"
                >
                  Choose Different State
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const stateName = statesData.find(s => s.id === selectedState)?.name;
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 text-center">
              <div className="mb-8">
                <div className={`h-24 w-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  percentage >= 70 ? 'bg-green-100' : percentage >= 50 ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  <Trophy className={`h-12 w-12 ${
                    percentage >= 70 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'
                  }`} />
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
                <h2 className="text-xl text-gray-600">{stateName} Quiz</h2>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-8 mb-8">
                <div className="text-4xl font-bold text-orange-600 mb-2">{score}/{questions.length}</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{percentage}%</div>
                <p className="text-gray-700">
                  {percentage >= 90 ? 'Outstanding! You\'re an expert!' :
                   percentage >= 70 ? 'Great job! Well done!' :
                   percentage >= 50 ? 'Good effort! Keep learning!' :
                   'Keep exploring and try again!'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={() => setSelectedState('')}
                  className="px-6 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  Different State
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No quiz available for this state</h2>
            <button
              onClick={() => setSelectedState('')}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Choose Different State
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl font-bold text-gray-800">
                  {statesData.find(s => s.id === selectedState)?.name} Quiz
                </h1>
                <p className="text-gray-600">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold text-gray-800">Score: {score}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Timer className="h-5 w-5 text-red-600" />
                  <span className={`font-bold text-lg ${
                    timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'
                  }`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-600 to-red-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="perspective-1000">
            <div className={`quiz-card ${isFlipped ? 'flipped' : ''}`}>
              {/* Front of card */}
              <div className="quiz-card-front bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
                  {question.question}
                </h2>
                
                <div className="grid gap-4">
                  {question.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null || showAnswer}
                      className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                        selectedAnswer === index
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                      } ${selectedAnswer !== null || showAnswer ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}`}
                    >
                      <span className="flex items-center">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3 font-semibold">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="font-medium text-gray-800">{option}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Back of card */}
              <div className="quiz-card-back bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-xl p-8 text-white">
                <div className="text-center">
                  <div className="mb-6">
                    {selectedAnswer === question.correct ? (
                      <div className="text-6xl mb-4">🎉</div>
                    ) : (
                      <div className="text-6xl mb-4">😔</div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedAnswer === question.correct ? 'Correct!' : 'Incorrect!'}
                    </h3>
                    {selectedAnswer !== question.correct && (
                      <p className="text-green-100 mb-4">
                        Correct answer: {question.options[question.correct]}
                      </p>
                    )}
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-green-100 leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;