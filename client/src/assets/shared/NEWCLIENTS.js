import restrictionsCancellation from '../images/newclients/restrictionscancellation.jpeg';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const NEWCLIENTS = [
  {
    id: 0,
    header: 'enrollment process',
    steps: [
      {
        stepNumber: 1,
        subheader: 'Application',
        info: "Submit an application with you personal information, contact details, and your pup's information. We will review the application and contacts you to confirm availability and schedule a meet and greet.",
      },
      {
        stepNumber: 2,
        subheader: 'Meet & Greet',
        info: "You and you pup meet with a staff member to discuss the your pup's needs and behaviour. The staff member also evaluates the pet's temperament to ensure they will be a good fit for the boarding environment.",
      },
      {
        stepNumber: 3,
        subheader: 'Reservation',
        info: "Book a reservation for your pup's stay after the meet and greet! We will provide details on availability, pricing, and any required deposit or payment. Check your email for confirmation and more information.",
      },
    ],
    icon: 'faFileLines',
  },
  {
    id: 1,
    header: 'Important Information',
    info: 'As a new client at a pet boarding hotel, there are several important pieces of information that you should be aware of:',
    icon: faCircleCheck,
    subheaders: [
      {
        id: 1,
        subheader: 'Vaccination Requirements',
        subinfo:
          "Before you can board your pet at our hotel, we require that all pets be up-to-date on their vaccinations. This includes rabies, distemper, and bordetella (kennel cough). Please bring your pet's vaccination records with you when you check in.",
      },
      {
        id: 2,
        subheader: 'Reservation Policy',
        subinfo:
          'To ensure that we have availability for your pet, we recommend that you make a reservation in advance. We cannot guarantee that we will have space available if you arrive without a reservation. Additionally, we have a cancellation policy that you should be aware of when making a reservation.',
      },
      {
        id: 3,
        subheader: 'Check-In & Check-Out Times',
        subinfo:
          'Our check-in and check-out times are designed to allow us to properly care for all of our guests. Check-in time is 1 pm, and check-out time is 11 am. If you need to make alternate arrangements, please let us know in advance.',
      },
      {
        id: 4,
        subheader: 'Feeding and Medication Instructions',
        subinfo:
          "We ask that you provide us with detailed instructions regarding your pet's feeding and medication schedule. This will ensure that your pet receives the proper care and attention while they are staying with us.",
      },
      {
        id: 5,
        subheader: 'Emergency Contact Information',
        subinfo:
          'We ask that you provide us with emergency contact information in case we need to reach you while you are away. This includes a phone number where you can be reached, as well as the contact information for a trusted friend or family member who can make decisions on your behalf if you are unavailable.',
      },
      {
        id: 6,
        subheader: 'Pet Personality and Behaviour',
        subinfo:
          "It is important that we have a good understanding of your pet's personality and behavior before they arrive at our hotel. This will help us to provide the best possible care for your pet and ensure their safety while they are staying with us. Please let us know if your pet has any special needs, such as separation anxiety or a fear of other animals.",
      },
      {
        id: 7,
        subheader: 'Pricing',
        subinfo:
          'Our pricing varies depending on the type of room and services requested. We offer different types of rooms, including standard rooms, deluxe rooms, and suites, each with different amenities and pricing. We also offer additional services such as daycare, grooming, and access to the doggy pool and playground, which may incur additional fees. Please contact us for detailed pricing information, and we also offer discounts for extended stays and multiple pets.',
      },
      {
        id: 8,
        subheader: 'Payment',
        subinfo:
          'We accept payment by cash, credit card, or debit card at the time of check-in. We do not accept personal checks.',
      },
    ],
  },
  {
    id: 2,
    header: 'restrictions & cancellation',
    subheader1: 'Restrictions',
    subheader2: 'Cancellation Policy',
    rinfo1:
      'At our pet boarding hotel, we require all pets to be up-to-date on their vaccinations, including rabies, distemper, and bordetella.',
    rinfo2:
      'We also require all pets to be free from fleas and ticks and have no contagious illnesses.',
    rinfo3:
      'For the safety of all pets and staff, we cannot accept pets with a history of aggressive behavior towards other animals or humans.',
    cinfo1:
      "We require a minimum of 48 hours advance notice for any cancellations or changes to your pet's reservation.",
    cinfo2:
      ' If you cancel your reservation with less than 48 hours notice or your pet does not show up for their reservation, there may be a cancellation fee.',
    cinfo3:
      'We offer refunds for cancellations made with more than 48 hours notice, minus any applicable cancellation fees. Refunds are not given for early pick-up or late drop-off of your pet.',
    image: restrictionsCancellation,
    icon: faBan,
  },
];

export default NEWCLIENTS;
