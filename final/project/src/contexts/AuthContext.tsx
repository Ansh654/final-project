import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  quizScores: { [stateId: string]: number };
  visitedStates: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  updateUserScore: (stateId: string, score: number) => void;
  markStateVisited: (stateId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('incredibleIndiaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const saveUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem('incredibleIndiaUser', JSON.stringify(userData));
  };

  const login = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('incredibleIndiaUsers') || '{}');
    const userKey = `${email}:${password}`;
    
    if (users[userKey]) {
      saveUser(users[userKey]);
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('incredibleIndiaUsers') || '{}');
    const userKey = `${email}:${password}`;
    
    if (users[userKey]) {
      return false; // User already exists
    }
    
    const newUser: User = {
      name,
      email,
      quizScores: {},
      visitedStates: []
    };
    
    users[userKey] = newUser;
    localStorage.setItem('incredibleIndiaUsers', JSON.stringify(users));
    saveUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('incredibleIndiaUser');
  };

  const updateUserScore = (stateId: string, score: number) => {
    if (!user) return;
    
    const updatedUser = {
      ...user,
      quizScores: { ...user.quizScores, [stateId]: score },
      visitedStates: user.visitedStates.includes(stateId) 
        ? user.visitedStates 
        : [...user.visitedStates, stateId]
    };
    
    saveUser(updatedUser);
    
    // Also update in the users database
    const users = JSON.parse(localStorage.getItem('incredibleIndiaUsers') || '{}');
    const userKey = Object.keys(users).find(key => users[key].email === user.email);
    if (userKey) {
      users[userKey] = updatedUser;
      localStorage.setItem('incredibleIndiaUsers', JSON.stringify(users));
    }
  };

  const markStateVisited = (stateId: string) => {
    if (!user) return;
    
    if (!user.visitedStates.includes(stateId)) {
      const updatedUser = {
        ...user,
        visitedStates: [...user.visitedStates, stateId]
      };
      saveUser(updatedUser);
      
      // Also update in the users database
      const users = JSON.parse(localStorage.getItem('incredibleIndiaUsers') || '{}');
      const userKey = Object.keys(users).find(key => users[key].email === user.email);
      if (userKey) {
        users[userKey] = updatedUser;
        localStorage.setItem('incredibleIndiaUsers', JSON.stringify(users));
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateUserScore,
      markStateVisited
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};