import React from 'react';
import Footer from '../reuse/Footer';
import { useState } from 'react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const featuresList = [
    {
      icon: '🚀',
      title: 'Fast and Efficient',
      description: 'Our services are highly optimized, delivering results at lightning speed.'
    },
    {
      icon: '🔒',
      title: 'Secure and Reliable',
      description: 'Your data is our top priority. We adhere to the highest security standards.'
    },
    {
      icon: '🌐',
      title: 'Global Access',
      description: 'Access your data and services from anywhere, anytime.'
    },
    {
      icon: '🤝',
      title: 'Excellent Support',
      description: 'Our dedicated team is ready to solve your every problem.'
    },
    {
      icon: '📊',
      title: 'Analytical Insights',
      description: 'Understand your business better with in-depth analysis and reporting.'
    },
    {
      icon: '🔄',
      title: 'Continuous Updates',
      description: 'We constantly add new features to keep you always at the forefront.'
    }
  ];

  return (
    <>
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Features</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              onClick={() => setActiveFeature(index)}
            >
              <div className="p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              {activeFeature === index && (
                <div className="p-4 bg-blue-100">
                  <p className="text-sm text-blue-800">Click to learn more about this feature!</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Why Choose Our Features?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Boost Productivity</h3>
              <p>Our features are designed to streamline your workflow and increase overall productivity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Save Time and Money</h3>
              <p>By automating complex tasks, our features help you save valuable time and resources.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Features;