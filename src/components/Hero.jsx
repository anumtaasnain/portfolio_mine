import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 mb-6">
             AVAILABLE FOR STRATEGIC COLLABORATION
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight outfit">
            Full Stack <br />
            <span className="text-slate-500">Engineer.</span><br />
            <span className="gradient-text">Karachi, PK.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 font-light">
            I build high-performance web applications and scalable digital solutions for modern enterprises. Specializing in JavaScript, React, and PHP.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              View Portfolio
            </button>
            <button className="glass hover:bg-white/5 px-8 py-4 rounded-xl font-bold transition-all">
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-1 relative z-10 overflow-hidden">
            <div className="bg-slate-900 rounded-[22px] p-8 border border-white/5">
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-4 text-xs text-slate-500 font-mono">Anumta.Architecture.js</span>
              </div>
              <pre className="text-sm md:text-base font-mono text-blue-100">
                <code className="block">
                  <span className="text-pink-400">class</span> <span className="text-yellow-300">SoftwareEngineer</span> &#123; <br />
                  &nbsp;&nbsp;name = <span className="text-green-400">"Anumta"</span>; <br />
                  &nbsp;&nbsp;focus = <span className="text-green-400">"Full-Stack Development"</span>; <br />
                  <br />
                  &nbsp;&nbsp;<span className="text-pink-400">async</span> <span className="text-blue-400">buildSystem</span>() &#123; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">const</span> app = <span className="text-pink-400">new</span> <span className="text-yellow-300">ScalableApp</span>(); <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink-400">await</span> app.<span className="text-blue-400">deploy</span>(&#123; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reliability: <span className="text-green-400">"99.9%"</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;platform: <span className="text-green-400">"Cloud Native"</span> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;); <br />
                  &nbsp;&nbsp;&#125; <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/30 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/30 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
