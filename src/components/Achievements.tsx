import React from 'react';
import { achievements } from '../data/achievements';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Achievements & Experience</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey, accomplishments, and significant milestones.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            {/* Timeline items */}
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`relative z-10 flex flex-col md:flex-row items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-black border-4 border-white"></div>
                
                {/* Content */}
                <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-gray-200 text-gray-700 rounded">
                      {achievement.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-black">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;