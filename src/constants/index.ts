import banner1 from "../assets/banner--1.jpg";
import banner2 from "../assets/banner--2.jpg";
import banner3 from "../assets/banner--3.jpg";
import fitness from "../assets/category/fitness.webp";
import equipment from "../assets/category/Equipment.webp";
import nutrition from "../assets/category/Nutrition & Supplements.jpg";
import footwarel from "../assets/category/footwarel.jpg";
import Apparel from "../assets/category/Apparel.avif";
import { ICategory } from "../types/category";

const banners = [
  {
    imgPath: banner1,
    title: "Basketball Gear Sale",
    discountMessage: "Up to 50% off on all basketball gear!",
    description:
      "Find the best deals on top-quality basketball equipment, including shoes, jerseys, and accessories. Limited time offer, don't miss out!",
  },
  {
    imgPath: banner2,
    title: "Soccer Cleats & Accessories",
    discountMessage: "Save 30% on soccer cleats and accessories!",
    description:
      "Upgrade your soccer game with our exclusive discounts on cleats, balls, and other essential accessories. Shop now and save big!",
  },
  {
    imgPath: banner3,
    title: "Baseball Equipment Discount",
    discountMessage: "Exclusive 20% off on baseball equipment!",
    description:
      "Get ready for the season with top-notch baseball gear at unbeatable prices. Bats, gloves, and more are now available at a special discount.",
  },
];

const categories: ICategory[] = [
  { id: 1, name: "Footwear", image: footwarel },
  { id: 2, name: "Apparel", image: Apparel },
  { id: 3, name: "Equipment", image: equipment },
  {
    id: 4,
    name: "Supplements",
    image: nutrition,
  },
  {
    id: 5,
    name: "Fitness Accessories",
    image: fitness,
  },
];

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

export { banners, categories };
