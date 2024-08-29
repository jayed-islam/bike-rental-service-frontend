export const testimonials = [
  {
    id: 1,
    name: "Md. Rahim Uddin",
    designation: "Software Engineer",
    company: "Tech Innovators Ltd.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "Renting a bike from this service was a game-changer for my daily commute. The process was smooth, and the bike was in perfect condition. I was a bit hesitant at first, but the customer support team was incredibly helpful and guided me through every step. I rented a Yamaha MT-07, and it performed exceptionally well throughout my two-week rental period. The pricing is fair, and I appreciate the flexibility in rental duration. I’ll definitely recommend this service to my colleagues!",
  },
  {
    id: 2,
    name: "Yakub ali",
    designation: "Freelance Graphic Designer",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    testimonial:
      "I had an amazing experience renting a bike for a weekend trip. The customer service was excellent from the get-go. I rented a Honda CBR500R, which was in pristine condition. The ride was smooth, and the bike's performance exceeded my expectations. The staff went above and beyond to ensure that the bike was ready for my trip, including a thorough check-up and a full tank of gas. I particularly appreciated the transparent pricing and no hidden charges. This service made my trip memorable, and I’ll definitely rent from them again!",
  },
  {
    id: 3,
    name: "Kamal Hossain",
    designation: "Marketing Executive",
    company: "Creative Solutions Ltd.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    testimonial:
      "The variety of bikes available is impressive, and the booking process was quick and easy. I opted for the Ducati Panigale V2 for a special event, and it did not disappoint. The bike was in top-notch condition, and I received many compliments on it during the event. The team ensured that everything was ready on time, and they provided all the necessary safety gear. I also liked that they offered insurance options, giving me peace of mind during the rental period. This is by far the best bike rental service I’ve used, and I highly recommend them to anyone looking for quality and reliability.",
  },
  {
    id: 4,
    name: "Sayem Khan",
    designation: "Content Writer",
    company: "Bright Ideas Co.",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    testimonial:
      "I rented a Kawasaki Ninja 400 for a week-long road trip, and it was one of the best decisions I made for the trip. The bike was clean, well-maintained, and performed flawlessly throughout the journey. I was particularly impressed with the level of customer service I received. The team was professional, friendly, and eager to answer any questions I had. They even provided tips on how to get the best performance out of the bike. The rental process was straightforward, and I appreciated the flexibility in picking up and dropping off the bike. I will definitely be using this service again in the future!",
  },
  {
    id: 5,
    name: "Zahid Hasan",
    designation: "Entrepreneur",
    company: "ZTech Solutions",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    testimonial:
      "As someone who values efficiency and quality, I was thoroughly impressed with this bike rental service. I rented a Suzuki GSX-R600 for a business trip, and the entire experience was seamless. The bike was delivered to my location on time, and it was in impeccable condition. The rental team was very professional and made sure I had all the necessary documents and safety equipment. The performance of the bike was outstanding, and it made my trip both productive and enjoyable. I appreciate the hassle-free experience and will certainly return for future rentals.",
  },
];

export const benefits = [
  {
    id: 1,
    title: "Best Prices",
    description:
      "We offer the most competitive prices in the market, ensuring you get the best value for your money.",
    icon: "💰",
  },
  {
    id: 2,
    title: "Wide Selection",
    description:
      "Choose from a wide variety of bikes to suit your needs, whether it's for daily commuting or weekend getaways.",
    icon: "🚴‍♂️",
  },
  {
    id: 3,
    title: "Excellent Customer Service",
    description:
      "Our dedicated support team is here to help you 24/7 with any queries or issues you might have.",
    icon: "👍",
  },
  {
    id: 4,
    title: "Easy Booking",
    description:
      "Our seamless booking process ensures you can reserve your preferred bike in just a few clicks.",
    icon: "📅",
  },
  {
    id: 5,
    title: "Safe and Reliable",
    description:
      "We maintain all our bikes to the highest safety standards, giving you peace of mind on the road.",
    icon: "🛡️",
  },
];

export const promotions = [
  {
    id: 1,
    title: "Summer Sale",
    description: "Get 20% off on all bikes! Use code SUMMER20 at checkout.",
    code: "SUMMER20",
    expiryDate: "2024-09-30",
    discount: "20%",
    terms: "Valid on all bikes until September 30, 2024.",
  },
  {
    id: 2,
    title: "New Customer Discount",
    description:
      "Welcome to our store! Enjoy 15% off your first order with code WELCOME15.",
    code: "WELCOME15",
    expiryDate: "2024-12-31",
    discount: "15%",
    terms: "Applicable on first purchase only. Valid until December 31, 2024.",
  },
  {
    id: 3,
    title: "Weekend Special",
    description:
      "Flat $10 off on bookings made over the weekend. Use code WEEKEND10.",
    code: "WEEKEND10",
    expiryDate: "2024-08-31",
    discount: "$10",
    terms: "Valid on orders over $50. Expires August 31, 2024.",
  },
];

const bikeBrands = [
  { value: "suzuki", label: "Suzuki" },
  { value: "kawasaki", label: "Kawasaki" },
  { value: "ducati", label: "Ducati" },
  { value: "honda", label: "Honda" },
  { value: "yamaha", label: "Yamaha" },
];

const ccOptions = [
  { value: 50, label: "50 CC" },
  { value: 100, label: "100 CC" },
  { value: 150, label: "150 CC" },
  { value: 200, label: "200 CC" },
  { value: 250, label: "250 CC" },
  { value: 500, label: "500 CC" },
  { value: 750, label: "750 CC" },
  { value: 1000, label: "1000 CC" },
  { value: 1200, label: "1200 CC" },
  { value: 1500, label: "1500 CC" },
  { value: 2000, label: "2000 CC" },
];

export type BikeModel = {
  value: string;
  label: string;
};

export type BikeModels = {
  [key: string]: BikeModel[];
};

const bikeModels: BikeModels = {
  suzuki: [
    { value: "hayabusa", label: "Hayabusa" },
    { value: "gsx-r1000", label: "GSX-R1000" },
    { value: "v-strom-650", label: "V-Strom 650" },
  ],
  kawasaki: [
    { value: "ninja-h2", label: "Ninja H2" },
    { value: "z900", label: "Z900" },
    { value: "versys-650", label: "Versys 650" },
  ],
  ducati: [
    { value: "panigale-v4", label: "Panigale V4" },
    { value: "monster-821", label: "Monster 821" },
    { value: "multistrada-950", label: "Multistrada 950" },
  ],
  honda: [
    { value: "cb650r", label: "CB650R" },
    { value: "africa-twin", label: "Africa Twin" },
    { value: "cbr1000rr", label: "CBR1000RR" },
  ],
  yamaha: [
    { value: "yzf-r1", label: "YZF-R1" },
    { value: "mt-09", label: "MT-09" },
    { value: "tracer-900", label: "Tracer 900" },
  ],
};

export { bikeBrands, bikeModels, ccOptions };
