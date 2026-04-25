import React from 'react';
import { Briefcase, User, Code, Mail, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass fixed top-0 w-full z-50 py-4">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight outfit">
          Anumta<span className="text-blue-500">.</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center font-medium text-sm">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#portfolio" className="hover:text-blue-400">Portfolio</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-semibold text-green-400 border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            AVAILABLE FOR HIRE
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
