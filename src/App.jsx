import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <AboutContact />
      </main>
      
      <footer className="py-12 border-t border-white/5">
        <div className="container text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Anumta. Built with React & Vite. All rights reserved.</p>
        </div>
      </footer>

      {/* Background gradients */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}

export default App;
