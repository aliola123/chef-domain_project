import { useState } from 'react';
import '../App.css/Signup.css';
import { AppProvider, SignInPage } from '@toolpad/core';
import SignUpPage from './Signup';

const providers = [{ id: 'credentials', name: 'Email and Password' }];

const signIn = async (provider, formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      alert(
        `Signing in with "${provider.name}" and credentials: ${formData.get('email')}, ${formData.get('password')}`,
      );
      resolve();
    }, 300);
  });
};

export default function CredentialsSignInPage() {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignIn and SignUp

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      </div>
      {isSignUp ? (
        <SignUpPage />
      ) : (
        <AppProvider>
          <SignInPage signIn={signIn} providers={providers} />
        </AppProvider>
      )}
      <div className="auth-footer">
        {isSignUp ? (
          <a href="#" onClick={handleToggle}>
            Already have an account? Sign In
          </a>
        ) : (
          <a href="#" onClick={handleToggle}>
            Don&apos;t have an account? Sign Up
          </a>
        )}
      </div>
    </div>
  );
}
