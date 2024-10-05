import React, { useEffect, useState } from 'react'
import { GoChevronDown, GoArrowRight } from "react-icons/go";
import Image1 from './photo/image.svg'
import bg from './overview/bg.svg'
import Product from './overview/product.svg'
import Facebook from './overview/facebook.svg'
import Google from './overview/google.svg'
import Coca from './overview/coca-cola.svg'
import Linkdin from './overview/linkedin.svg'
import Samsung from './overview/samsung.svg'
import feature1 from './feature/feature1-img.svg'
import feature2 from './feature/feature2-img.svg'
import feature3 from './feature/feature3-img.svg'
import BoxContainer from './Card';
import BoxContainer2 from './Card2';
import CardSlider from './CardSlider';
import Footer from './reuse/Footer'
import {motion} from 'framer-motion'
import Testimonial from './Testimonial';
import FAQ from './Faq';
import LoadingPage from './LoagingPage';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1200 });
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='w-screen h-auto flex item-center justify-center mt-40 flex-wrap gap-2'
      >
        <div className='w-96 h-96' data-aos="fade-right">
          <h1 className='text-6xl mb-5 mt-5 font-sans font-bold '>Track your Expenses to Save Money</h1>
          <div className='text-slate-400 mb-5 font-sans'>Help you to organize your income and Expenses</div>
          <div className='flex gap-4 font-sans'>
            <div className='w-40 h-15  rounded leading-10 pl-6  bg-orange-400 text-white hover:bg-orange-500 font-sans'>Try free demo <GoChevronDown className='inline' /></div>
            <div className=' w-41 h-10 leading-10 text-slate-400 font-sans'>- Web, iOS and Android</div>
          </div>
        </div>

        <div className='w-96 h-96' data-aos="fade-left">
          <img src={Image1} alt="Hero" />
        </div>
      </motion.div>

      <div style={{ backgroundImage: "url(" + bg + ")" }} className='w-screen h-[500px] mt-32 flex justify-center items-ends '>
        <div className='w-[750px] h-[400px] py-[78px] ' data-aos="fade-up" >
          <img src={Product} alt='' />
        </div>
      </div>
      <div className='w-full px-4 py-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10'>
      {[Facebook, Google, Coca, Linkdin, Samsung].map((logo, index) => (
        <img 
          key={index}
          src={logo} 
          className='w-20 sm:w-[110px] h-auto' 
          data-aos="fade-up"
          data-aos-delay={index * 100}
          alt={`Partner logo ${index + 1}`}
        />
      ))}
    </div>



      <div className='w-screen h-auto flex item-center justify-center mt-32 flex-wrap gap-2'>
        <div className='w-96 h-96' data-aos="fade-right">
          <div className='text-slate-400 mb-5 font-sans'>ALWALYS ONLINE</div>
          <h1 className='text-6xl mb-5 mt-5 font-sans font-bold '>Real-time support<br /> with cloud</h1>
          <div className='text-slate-400 mb-5 font-sans'>Tellus fauc morbi sagittis lacus in. A met nisl at manur enim accumsan nisi, tincdiunt vel, Enim ipsum, amet quis ullamcarper eget ut.</div>
          <div className='w-40 h-15  rounded leading-10 pl-6  text-orange-400 font-sans'>Learn more   <GoArrowRight className='inline' /></div>
        </div>

        <div className='w-96 h-96' data-aos="fade-left">
          <img src={feature1} alt='feature1'/>
        </div>
      </div>



      <div className='w-screen h-auto flex item-center justify-center mt-32 flex-wrap gap-10'>
        <div className='w-96 h-96' data-aos="fade-left">
          <img src={feature2} alt='feature2'/>
        </div>

        <div className='w-96 h-96' data-aos="fade-right">
          <div className='text-slate-400 mb-5 font-sans'>FREE SOME COST</div>
          <h1 className='text-6xl mb-5 mt-5 font-sans font-bold '>Save cost <br /> for you and family</h1>
          <div className='text-slate-400 mb-5 font-sans'>Tellus fauc morbi sagittis lacus in. A met nisl at manur enim accumsan nisi, tincdiunt vel, Enim ipsum, amet quis ullamcarper eget ut.</div>
          <div className='w-40 h-15  rounded leading-10 pl-6  text-orange-400 font-sans'>Learn more   <GoArrowRight className='inline' /></div>
        </div>
      </div>



      <div className='w-screen h-auto flex item-center justify-center mt-32 flex-wrap gap-10'>
        <div className='w-96 h-96' data-aos="fade-right">
          <div className='text-slate-400 mb-5 font-sans text-center'>USE ANYTIME</div>
          <h1 className='text-6xl mb-5 mt-5 font-sans font-bold text-center'>Use anytime when you need</h1>
          <div className='text-slate-400 mb-5 font-sans text-center'>Tellus fauc morbi sagittis lacus in. A met nisl at manur enim accumsan nisi, tincdiunt vel, Enim ipsum, amet quis ullamcarper eget ut.</div>
          <div className='w-40 h-15  rounded leading-10 pl-6  text-orange-400 font-sans'>Learn more   <GoArrowRight className='inline' /></div>
        </div>

        <div className='w-96 h-96 ' data-aos="fade-left">
          <img src={feature3} alt='feature3' />
        </div>
      </div>


      <div className='w-screen h-auto  mt-[100px] flex items-center justify-center flex-wrap'>
        <div className='w-[500px] h-[150px] ' data-aos='fade-right'>
          <h1 className='text-6xl font-bold text-center'>The Product we work with</h1>
        </div>
        <div className='w-[300px] h-[150px] ' data-aos='fade-left'>
          <h2 className='text-slate-400 mb-5 font-sans text-center'>Tellus faucs morbi lacus in,<br /> Amet nisl at mauris enim aumsan <br />nisi, tincdiunt vel. Enim ipsum, at <br /> quis ullamcarper eget ut.</h2>
        </div>
      </div>
      <div className='w-screen h-auto  mt-12'><BoxContainer /> </div>


      <div className='w-screen h-[50px]  mt-[60px] flex justify-center items-center text-5xl font-bold'>Choose your flexible plan</div>
      <div className=' w-screen h-auto mt-[50px]'> <BoxContainer2 /></div>


      <div className='w-screen h-auto mt-32'>
        <h2 className='text-4xl font-bold text-center mb-8'>What Our Customers Say</h2>
        <Testimonial />
      </div>

      <div className='w-screen h-auto bg-orange-100 py-16 mt-32'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-4'>Ready to Start Saving?</h2>
          <p className='text-xl mb-8'>Join thousands of users who are already managing their expenses efficiently.</p>
          <button className='bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300'>
            Get Started Now
          </button>
        </div>
      </div>

      <div className='w-screen h-auto mt-32'>
        <h2 className='text-4xl font-bold text-center mb-8'>Frequently Asked Questions</h2>
        <FAQ />
      </div>

      <div className='w-screen h-[150px]  mt-[60px] mb-[20px] flex justify-center items-center text-5xl font-bold text-center'>We have millions of best wishers</div>
      <CardSlider />
      <Footer />
    </>
  )
}

export default Home;