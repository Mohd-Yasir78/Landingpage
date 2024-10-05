import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useEffect } from 'react';
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
    {
        question: 'What are the benefits of using this app?',
        answer: 'Our app helps you track your expenses, create budgets, and achieve your financial goals. It enables you to better manage your money and save.',
      },
      {
        question: 'Is this app available on mobile devices?',
        answer: 'Yes, our app is available on both iOS and Android platforms. You can download it on your smartphone or tablet.',
      },
      {
        question: 'Is my data secure?',
        answer: 'Yes, we take the security of your data very seriously. We use industry-standard encryption and security protocols to ensure your personal and financial information remains safe.',
      },
      {
        question: 'Can I link my bank accounts to this app?',
        answer: 'Yes, you can securely link your bank accounts to our app. This helps automatically track your transactions and provide an accurate overview of your expenses.',
      },
];

const FAQ = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto " data-aos="fade-up">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 rounded-lg"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold">{faq.question}</span>
            <span>{activeIndex === index ? '−' : '+'}</span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-white"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;