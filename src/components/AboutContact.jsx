import React from 'react';
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const AboutContact = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">About Me</span>
            <h2 className="text-5xl outfit mb-8">Architecting Digital <br /><span className="text-slate-500">Excellence.</span></h2>
            <div className="space-y-6 text-slate-400 leading-relaxed font-light">
              <p>
                I am a passionate Software Engineer based in Karachi, dedicated to building robust and scalable digital infrastructures. My approach combines technical precision with creative problem-solving.
              </p>
              <p>
                With expertise in JavaScript frameworks and backend PHP systems, I bridge the gap between complex logic and seamless user experiences. I thrive on solving architectural challenges that drive business growth.
              </p>
            </div>
            
            <div className="flex gap-4 mt-10">
              <a href="#" className="p-3 glass rounded-xl hover:bg-blue-600 transition-colors"><FaLinkedin size={20} /></a>
              <a href="#" className="p-3 glass rounded-xl hover:bg-slate-700 transition-colors"><FaGithub size={20} /></a>
              <a href="#" className="p-3 glass rounded-xl hover:bg-blue-400 transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>

          <div id="contact" className="glass rounded-[32px] p-10 relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-3xl outfit mb-8">Start a Project.</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <div>
                    <textarea placeholder="Message" rows="4" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all">
                    Send Message
                  </button>
                </form>

                <div className="mt-10 pt-10 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-slate-400">
                    <Mail size={18} className="text-blue-500" />
                    <span>hello@anumta.dev</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400">
                    <MapPin size={18} className="text-blue-500" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
             </div>
             
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
