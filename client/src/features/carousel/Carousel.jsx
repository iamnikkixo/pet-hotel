import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Pagination, Navigation } from 'swiper';
import { HOMECAROUSEL } from '../../assets/shared/HOMECAROUSEL';
import { ROOMCAROUSEL } from '../../assets/shared/ROOMCAROUSEL';

const Carousel = () => {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (location.pathname === '/') {
      setItems(HOMECAROUSEL);
    } else if (location.pathname === '/services') {
      setItems(ROOMCAROUSEL);
    }
  }, [location]);

  return (
    <Swiper
      className="s-container mt-5 mt-md-0"
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      loop
    >
      {items.map((i, index) => (
        <SwiperSlide key={index} className="swiper-slide-img">
          <img className="img-fluid" alt={i.altText} src={i.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
