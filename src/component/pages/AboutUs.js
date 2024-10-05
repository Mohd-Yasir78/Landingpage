import React from 'react';
import Footer from '../reuse/Footer';

const About = () => {
  const renderSection = (title, content, image) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition duration-300 ease-in-out hover:shadow-xl group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-full object-cover transition duration-300 ease-in-out group-hover:scale-105" 
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center bg-gradient-to-br from-white to-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition duration-300 ease-in-out">
            {title}
          </h2>
          <div className="text-gray-600 group-hover:text-gray-800 transition duration-300 ease-in-out">
            {content}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="relative h-96">
          <img src="https://img.freepik.com/free-vector/geometric-wave-background-colorful_779267-2119.jpg?ga=GA1.2.218993737.1700399307&semt=ais_hybrid" alt="About Us Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">About Us</h1>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-xl mb-12 text-center">
            We are an innovative technology company dedicated to providing excellent digital solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {renderSection('Our Mission', 
              <p className="text-lg">Our mission is to empower businesses and individuals by leveraging cutting-edge technology to solve complex problems and drive digital transformation.</p>,
              "https://img.freepik.com/free-photo/mission-goals-target-aspirations-motivation-strategy-concept_53876-133864.jpg?ga=GA1.2.218993737.1700399307&semt=ais_hybrid"
            )}
            
            {renderSection('Our Team', 
              <div>
                <p className="mb-4">Our diverse team of experts is passionate about technology and committed to delivering exceptional results:</p>
                <ul className="list-disc pl-6">
                  <li>Rajesh Kumar - Founder and CEO</li>
                  <li>Priya Sharma - Chief Technology Officer</li>
                  <li>Amit Patel - Product Manager</li>
                  <li>Neha Gupta - Lead Designer</li>
                </ul>
              </div>,
              "https://img.freepik.com/free-photo/business-people-posing-together-office_23-2148746329.jpg?ga=GA1.2.218993737.1700399307&semt=ais_hybrid"
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {renderSection('Our Values', 
              <div>
                <p className="mb-4">At our core, we are driven by the following values:</p>
                <ul className="list-disc pl-6">
                  <li>Innovation: Constantly pushing the boundaries of what's possible</li>
                  <li>Integrity: Maintaining the highest ethical standards in all our dealings</li>
                  <li>Collaboration: Fostering a culture of teamwork and open communication</li>
                  <li>Excellence: Striving for the highest quality in everything we do</li>
                </ul>
              </div>,
              "https://img.freepik.com/free-photo/business-people-teamwork_53876-89051.jpg?ga=GA1.2.218993737.1700399307&semt=ais_hybrid"
            )}
            
            {renderSection('Contact Us', 
              <div>
                <p className="mb-2">We'd love to hear from you! Get in touch with us:</p>
                <p><strong>Email:</strong> info@ourcompany.com</p>
                <p><strong>Phone:</strong> +91 1234567890</p>
                <p><strong>Address:</strong> 123 Tech Park, New Delhi, India</p>
              </div>,
              "https://img.freepik.com/premium-photo/customer-support-illustration-call-center-vector_906385-42419.jpg?ga=GA1.2.218993737.1700399307&semt=ais_hybrid"
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;