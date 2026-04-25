import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import saasImg from '../assets/saas_dashboard_1_1777092947947.png';
import ecommerceImg from '../assets/ecommerce_app_2_1777092975800.png';
import crmImg from '../assets/crm_system_3_1777093087078.png';

const ProjectCard = ({ title, description, image, tags }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass rounded-3xl overflow-hidden group"
  >
    <div className="relative h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
          <ExternalLink size={20} />
        </button>
        <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
          <FaGithub size={20} />
        </button>
      </div>
    </div>
    <div className="p-8">
      <div className="flex gap-2 mb-4 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-2xl mb-3 outfit">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Osquare SaaS Platform",
      description: "A comprehensive SaaS solution featuring a dynamic form builder along with dashboards, user management, and scalable backend systems.",
      image: saasImg,
      tags: [".NET CORE", "C#", "SQL SERVER"]
    },
    {
      title: "LeadKonnekt CRM",
      description: "A specialized CRM for sales teams to track transitions, manage pipelines, and automate follow-ups.",
      image: crmImg,
      tags: ["PHP", "MYSQL", "REST APIS"]
    },
    {
      title: "iSchool Portal",
      description: "An all-in-one portal for students, teachers, and administrators to manage the entire educational lifecycle.",
      image: ecommerceImg,
      tags: ["JAVASCRIPT", "REACT", "SQL SERVER"]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-6xl outfit">Selected Projects.</h2>
          </div>
          <p className="text-slate-400 max-w-md">
            Highlighting high-performance systems and scalable software developed for enterprise clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
