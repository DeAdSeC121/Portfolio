import React, { useState } from 'react';
import { Github, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations, 
            internship opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              I'm currently looking for internship and freelancing opportunities in UI/UX, 
              debugging, testing, and web design. Feel free to reach out if you have an 
              opportunity that matches my skills.
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:your.email@gmail.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
              >
                <div className="p-3 bg-gray-100 rounded-full">
                  <Mail size={20} />
                </div>
                <span>your.email@gmail.com</span>
              </a>
              
              <a 

                href="https://github.com/DeAdSeC121" 

                

                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors"
              >
                <div className="p-3 bg-gray-100 rounded-full">
                  <Github size={20} />
                </div>
                <span>github.com/yourusername</span>
              </a>
            </div>
            
            <p className="text-gray-600">
              Response time: <span className="font-medium">within 24 hours</span>
            </p>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;