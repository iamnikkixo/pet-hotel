import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeHero from '../assets/images/home/headerjumbotron.jpg';
import AboutHero from '../assets/images/about/girlwithdog.jpeg';
import ServiceHero from '../assets/images/services/heroservices.jpg';
import NewClientHero from '../assets/images/newclients/heronewclients.jpeg';

const HeroSection = () => {
  const location = useLocation();
  const [heroImage, setHeroImage] = useState([]);

  useEffect(() => {
    if (location.pathname === '/') {
      setHeroImage(HomeHero);
    } else if (location.pathname === '/about') {
      setHeroImage(AboutHero);
    } else if (location.pathname === '/services') {
      setHeroImage(ServiceHero);
    } else if (location.pathname === '/newclients') {
      setHeroImage(NewClientHero);
    }
  }, [location]);

  return (
    <div className="position-relative mb-5">
      <img className="img-fluid" src={heroImage} />
      <div className="custom-shape-divider-bottom-1708692138">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
