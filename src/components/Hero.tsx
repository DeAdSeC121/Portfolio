import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-gray-900"></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tighter text-black">
            <span className="block">I am Abhijeet Behera</span>
            <span className="block">Aspiring Software Engineer</span>
            <span className="block">CSE Student &</span>
            <span className="block">Full Stack Developer</span>
          </h1>

          <p className="mb-10 text-gray-600 text-lg md:text-xl leading-relaxed">
            A passionate 2nd-year CSE undergraduate specialized in UI/UX design,
            debugging, testing, and web development. Currently seeking internship and freelancing opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-black text-black rounded-md hover:bg-gray-100 transition-colors duration-300 font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-black" size={32} />
      </a>
    </section>
  );
};

export default Hero;
