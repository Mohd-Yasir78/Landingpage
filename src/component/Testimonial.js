import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
    {
        id: 1,
        name: 'Rahul Sharma',
        role: 'Freelance Designer',
        content: 'This app has made tracking my expenses so much easier. Now I can manage my finances better.',
        image: 'https://i.pinimg.com/564x/17/33/af/1733af63739d30f184327b10d1c80b13.jpg', // Add image path
      },
      {
        id: 2,
        name: 'Priya Patel',
        role: 'Startup Founder',
        content: 'As a business owner, this app has been a blessing. It has helped me separate my personal and business expenses.',
        image: 'https://i.pinimg.com/236x/4b/00/ac/4b00ac60ddcdcdcb730c7c01d4f93b8c.jpg', // Add image path
      },
      {
        id: 3,
        name: 'Amit Singh',
        role: 'Student',
        content: 'Managing college expenses has never been easier. This app helps me stay within my budget.',
        image: 'https://i.pinimg.com/236x/f3/90/23/f390230eb508ab8dbd0398208f7ceda7.jpg', // Add image path
      },
];

const Testimonial = () => {

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
  return (
    <div className="flex flex-wrap justify-center gap-8 " data-aos="fade-up">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="bg-white p-6 rounded-lg shadow-md max-w-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="text-gray-600 mb-4">{testimonial.content}</p>
          <div className="flex items-center">
            <div className="mr-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile picture`}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonial;