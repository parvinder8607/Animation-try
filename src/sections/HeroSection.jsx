import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import img from '../assets/Images/2.jpg';

const HeroSection = () => {
  const trigRef = useRef();
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We build websites that are fast, responsive, and user-friendly. Our web development services include front-end and back-end development, ensuring seamless functionality and an engaging user experience. Whether you need a simple website or a complex web application, we have the expertise to bring your ideas to life.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'We develop mobile apps for iOS and Android platforms, tailored to meet your business needs. Our apps are designed to be intuitive, high-performance, and feature-rich. We follow best practices in mobile app development to ensure your app is scalable, secure, and optimized for all devices.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'We create beautiful and intuitive user interfaces for your digital products. Our team of designers focuses on user-centered design principles, ensuring that your product is not only aesthetically pleasing but also easy to use. We aim to provide seamless experiences that enhance customer satisfaction and drive engagement.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'We help you reach your target audience through effective digital marketing strategies. From search engine optimization (SEO) to social media management and paid advertising, our digital marketing solutions are tailored to increase your online visibility, attract more leads, and convert them into loyal customers. We ensure that your brand stands out in the crowded digital space.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    },
    {
      id: 5,
      title: 'E-commerce Solutions',
      description: "We design and develop e-commerce websites and applications that help you grow your online business. Our solutions include secure payment gateways, easy product management systems, and responsive designs to enhance the shopping experience. Whether you're starting a new e-commerce business or looking to optimize an existing store, we provide tailored solutions to meet your goals.",
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    },
    {
      id: 6,
      title: 'Content Writing',
      description: 'We create high-quality content for your website or blog, designed to engage and inform your audience. Our content is SEO-optimized, ensuring that your business ranks well on search engines and attracts more visitors. Whether you need blog posts, product descriptions, or informative articles, we deliver well-researched and compelling content that aligns with your brand voice.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    }
  ];
  

  useEffect(() => {
    const handleScroll = () => {
      const trigTop = trigRef.current.getBoundingClientRect().top;

      // Loop through all the service list items and check if they are in view
      const listItems = document.querySelectorAll('.service-item');
      listItems.forEach((listItem, index) => {
        const listTop = listItem.getBoundingClientRect().top;
        const listHeight = listItem.getBoundingClientRect().height;
        
        // Check if the trigger element is in view of the list item
        if (trigTop > listTop && trigTop > listTop - listHeight) {
          setActiveIndex(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-black w-full  py-[20rem] px-16">
      <h1 className='text-white  py-16 w-full text-8xl font-bold'>Our Services</h1>
      <div className="container mx-auto relative w-full h-full top-0 left-0 grid grid-cols-2">
        <div className="text-white">
          <div className="sticky top-1/2 left-0">
            <div ref={trigRef} className="text-xl ">
              {data.map((item) => {
                const isActive = item.id === activeIndex;
                return (
                  <motion.span
                    key={item.id}
                    
                    animate={{opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0}}
                    className={`absolute text-gray-400 max-w-[600px] ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <span className="text-white">
                      {item.description}
                    </span>
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex text-white">
          <div className="">
            <ul>
              {data.map((item) => {
                const isActive = item.id === activeIndex;
                return (
                  <li
                    key={item.id}
                    className={`service-item ${isActive ? 'text-yellow-300' : ''}`}
                  >
                    <h2 className="text-7xl font-bold ">{item.title}</h2>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
