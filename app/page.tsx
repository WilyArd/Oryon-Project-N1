"use client"; 

import { useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className={`min-h-screen transition-colors duration-500 ${isDarkMode 
      ? 'bg-gradient-to-br from-slate-900 via-purple-950 to-slate-800' 
      : 'bg-gradient-to-br from-sky-200 via-indigo-200 to-violet-300'}`
    }>
      
      <header className="p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center space-x-4">
              <img
                src="/logo.png" 
                alt="Oryon Project Logo"
                className="w-12 h-12" 
              />
              
              <h1 className={`text-2xl font-semibold transition-colors duration-500 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                Oryon Project N1
              </h1>
            </div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-500 ${isDarkMode ? 'bg-slate-700 text-yellow-300' : 'bg-sky-100 text-slate-700'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Kosongan */}

    </main>
  );
}

