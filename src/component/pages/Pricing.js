import React from 'react'
import Footer from '../reuse/Footer';

const PricingPlan = ({ title, price, features }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-2">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-lg font-normal">/month</span></p>
    <ul className="mb-8">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
      Choose Plan
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 9.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      title: 'Pro',
      price: 19.99,
      features: ['All Basic features', 'Feature 4', 'Feature 5'],
    },
    {
      title: 'Enterprise',
      price: 29.99,
      features: ['All Pro features', 'Feature 6', 'Feature 7', 'Feature 8'],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen mt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Our Pricing Plans</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Choose the plan that fits your needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;