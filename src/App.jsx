import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import EventListPage from './pages/EventListPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Set loader timeout for visibility

    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    return () => clearTimeout(timer); // Clear timer on component unmount
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/events');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header onLogout={handleLogout} isAuthenticated={isAuthenticated} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/signup" />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              <Route
                path="/events"
                element={
                  isAuthenticated ? (
                    <EventListPage />
                  ) : (
                    <Navigate to="/signup" state={{ message: 'Please sign up to view events.' }} />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  isAuthenticated ? (
                    <ProfilePage />
                  ) : (
                    <Navigate to="/login" state={{ message: 'Please log in to view your profile.' }} />
                  )
                }
              />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

// Wrapping the App with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
