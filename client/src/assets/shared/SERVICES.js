import daycareBoarding from '../images/services/daycareboarding.jpg';
import grooming from '../images/services/grooming.jpg';
import doggyPool from '../images/services/doggypool.jpg';
import dogPlayground from '../images/services/dogplayground.jpg';
import {
  faBellConcierge,
  faSpa,
  faFish,
} from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

const SERVICES = [
  {
    id: 0,
    header: 'pick your room',
    info: "Our pet boarding hotel offers a range of different rooms to cater to the varying needs and preferences of pets. Our standard rooms are spacious and comfortable, with ample space for your pet to rest and relax. They come equipped with a cozy bed, fresh bedding, and toys to keep your pet entertained. Our luxury suites are perfect for those who want a little extra pampering. They feature comfortable bedding, elevated feeding stations, and large windows to let in natural light. Additionally, each suite is equipped with a flat-screen TV, providing soothing background music or television shows for your pet's viewing pleasure.",
  },
  {
    id: 1,
    header: 'daycare | boarding',
    info: 'At our pet boarding hotel, we offer both daycare and boarding services to meet the needs of busy pet owners. Our daycare services provide a safe and stimulating environment for your pet while you are at work or running errands. We provide plenty of playtime, socialization, and exercise to keep your pet engaged and happy throughout the day. Our boarding services provide a comfortable and secure environment for your pet to stay in while you are away. We ensure that your pet is well-fed, exercised, and given plenty of love and attention.',
    image: daycareBoarding,
    icon: faBellConcierge,
  },
  {
    id: 2,
    header: 'grooming',
    info: 'Our grooming services are designed to help your pet look and feel their best. Our team of professional groomers provides a range of services, including baths, haircuts, nail trimming, and more. We use high-quality products and techniques to ensure that your pet is comfortable and relaxed throughout the grooming process. Additionally, we can provide specialized grooming services to meet the unique needs of your pet, such as de-shedding treatments or flea baths.',
    image: grooming,
    icon: faSpa
  },
  {
    id: 3,
    header: 'doggy pool',
    info: 'Our doggy pool is one of the most popular features among our guests. It provides a fun and safe way for dogs to cool off and get some exercise during the hot summer months. Our pool is carefully maintained to ensure that it is clean and safe for your pet to enjoy. We also provide life jackets and other safety equipment to ensure that your pet is safe while in the pool.',
    image: doggyPool,
    icon: faFish
  },
  {
    id: 4,
    header: 'dog playground',
    info: 'Our dog playground is a great place for dogs to socialize and burn off some energy. It features a range of play equipment, such as agility courses, tunnels, and toys, to keep your pet engaged and entertained. Our staff carefully monitors all interactions to ensure that they are safe and positive. We also provide plenty of shade and water to keep your pet cool and hydrated while they play. Additionally, we offer training classes and other programs to help your pet learn new skills and socialize with other dogs.',
    image: dogPlayground,
    icon: faPagelines
  },
];

export default SERVICES;
