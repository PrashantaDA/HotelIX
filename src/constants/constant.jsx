import { FaHotel, FaUsers, FaUsersCog, FaUtensils, FaSpa, FaSwimmer, FaGlassCheers, FaDumbbell, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaStar, FaBed, FaBath, FaWifi, FaPhone, FaClock } from "react-icons/fa";
import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Carousel1, Carousel2, Room1, Room2, Room3, Team1, Team2, Team3, Team4, Testimonial1, Testimonial2, Testimonial3, Testimonial4 } from "../assets/index.js";

/** Brand */
export const siteName = "HoteliX";
export const siteTagline = "Boutique comfort in the heart of Kathmandu.";
export const aboutIntro = "HoteliX is an independent boutique hotel built around calm spaces, attentive hosts, and honest hospitality. Whether you are here for the old city, the mountains, or a quiet place to work, we keep things simple: rest well, eat well, and feel at home.";

/** Navigation */
export const navList = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/rooms", name: "Rooms" },
  { id: 5, path: "/booking", name: "Booking" },
  { id: 6, path: "/team", name: "Team" },
  { id: 7, path: "/contact", name: "Contact" },
];

/** Social Icons */
export const socialIcons = [
  { id: 1, href: "https://facebook.com/", icon: <FaFacebook /> },
  { id: 2, href: "https://twitter.com/", icon: <FaXTwitter /> },
  { id: 3, href: "https://instagram.com/", icon: <FaInstagram /> },
];

/** Carousel */
export const carouselData = [
  { id: 1, img: Carousel1, title1: "Your Quiet Corner in the City", title2: "Warmth, Light, and Himalayan Ease", subtitle: "HoteliX Kathmandu", btn1: "Our Rooms", btn2: "Book a Stay" },
  { id: 2, img: Carousel2, title1: "Rooms Made for Deep Sleep", title2: "Courtyard Views & City Rooftops", subtitle: "Stay with us", btn1: "Our Rooms", btn2: "Book a Stay" },
];

/** About Stats */
export const about = [
  { icon: <FaHotel size={36} className="text-primary mb-2" />, text: "Guest rooms", count: "48" },
  { icon: <FaUsers size={36} className="text-primary mb-2" />, text: "Team members", count: "32" },
  { icon: <FaUsersCog size={36} className="text-primary mb-2" />, text: "Returning guests ('26)", count: "1.2k" },
];

/** Services */
export const services = [
  { icon: <FaHotel size={32} className="text-primary mb-2" />, name: "Rooms & apartments", desc: "Sound-soft floors, rainfall showers, and blackout drapes as standard in every category." },
  { icon: <FaUtensils size={32} className="text-primary mb-2" />, name: "Restaurant & bar", desc: "Morning coffee, Nepali thali, and a small wine list—served on the terrace when weather allows." },
  { icon: <FaSpa size={32} className="text-primary mb-2" />, name: "Spa & wellness", desc: "Massage by appointment, steam, and a calm room for stretching after long flights." },
  { icon: <FaSwimmer size={32} className="text-primary mb-2" />, name: "Pool & terrace", desc: "A lap-friendly pool and loungers with shade—open early for swimmers and late for stargazing." },
  { icon: <FaGlassCheers size={32} className="text-primary mb-2" />, name: "Events & gatherings", desc: "Intimate receptions and small meetings with AV support and catering from our kitchen." },
  { icon: <FaDumbbell size={32} className="text-primary mb-2" />, name: "Gym & yoga", desc: "Cardio, free weights, and weekly yoga slots—towels and water provided." },
];

/** Team */
export const team = [
  { image: Team1, name: "Anita Shrestha", designation: "General Manager" },
  { image: Team2, name: "Ravi Thapa", designation: "Front Office Manager" },
  { image: Team3, name: "Sita Gurung", designation: "Head Chef" },
  { image: Team4, name: "Nirajan KC", designation: "Guest Experience" },
  { image: Team1, name: "Maya Pradhan", designation: "Housekeeping Lead" },
  { image: Team2, name: "Binod Maharjan", designation: "Engineering" },
];

/** Footer */
export const footerColumns = [
  { id: 1, header: "Explore", links: [{ label: "About", to: "/about" }, { label: "Rooms", to: "/rooms" }, { label: "Services", to: "/services" }, { label: "Booking", to: "/booking" }] },
  { id: 2, header: "Visit", links: [{ label: "Our team", to: "/team" }, { label: "Contact", to: "/contact" }, { label: "Privacy", to: "/privacy" }, { label: "Terms", to: "/terms" }] },
];

export const footerContact = [
  { icon: <FaMapMarkerAlt className="me-3 shrink-0" />, name: "Thamel Marg, Kathmandu 44600, Nepal" },
  { icon: <FaPhoneAlt className="me-3 shrink-0" />, name: "+977 1234567890" },
  { icon: <FaEnvelope className="me-3 shrink-0" />, name: "stay@hotelix.com" },
];

/** Contact Page */
export const contactPageInfo = [
  { icon: <FaEnvelope className="text-2xl text-primary" />, title: "Email us", details: [{ label: "Reservations", value: "stay@hotelix.com" }, { label: "Events", value: "events@hotelix.com" }, { label: "General", value: "hello@hotelix.com" }] },
  { icon: <FaPhone className="text-2xl text-primary" />, title: "Call us", details: [{ label: "Front desk", value: "+977 1234567890" }, { label: "Restaurant", value: "+977 1234567891" }] },
  { icon: <FaMapMarkerAlt className="text-2xl text-primary" />, title: "Location", details: [{ label: "Address", value: "Thamel Marg, Kathmandu 44600" }, { label: "Airport", value: "~20 min from Tribhuvan International" }] },
  { icon: <FaClock className="text-2xl text-primary" />, title: "Hours", details: [{ label: "Reception", value: "24 hours" }, { label: "Restaurant", value: "6:30 AM – 10:30 PM" }, { label: "Pool", value: "7:00 AM – 9:00 PM" }] },
];

/** Rooms with Full Details */
export const roomItems = [
  { id: 1, img: Room1, price: 95, priceDisplay: "From $95/night", name: "Courtyard Queen", star: <FaStar className="text-primary" />, desc: "Queen bed, courtyard outlook, workspace nook, and a walk-in shower—ideal for short city stays.", btn1: "Details", btn2: "Book", amenities: ["Queen Bed", "Courtyard View", "Work Desk", "Rain Shower", "Free Wi-Fi"], size: "32 m²", occupancy: "2 Adults", available: true },
  { id: 2, img: Room2, price: 125, priceDisplay: "From $125/night", name: "Terrace Deluxe", star: <FaStar className="text-primary" />, desc: "Extra space, a private terrace, and a sitting area—popular with couples and longer visits.", btn1: "Details", btn2: "Book", amenities: ["King Bed", "Private Terrace", "Sitting Area", "Soaking Tub", "Mini Bar"], size: "45 m²", occupancy: "2 Adults", available: true },
  { id: 3, img: Room3, price: 155, priceDisplay: "From $155/night", name: "Skyline Suite", star: <FaStar className="text-primary" />, desc: "Separate living room, skyline views, and a soaking tub—our go-to for celebrations.", btn1: "Details", btn2: "Book", amenities: ["King Bed", "Living Room", "Skyline View", "Soaking Tub", "Room Service"], size: "65 m²", occupancy: "3 Adults", available: true },
  { id: 4, img: Room2, price: 135, priceDisplay: "From $135/night", name: "Executive Twin", star: <FaStar className="text-primary" />, desc: "Two full beds, ergonomic chairs, and fast Wi‑Fi—built for colleagues traveling together.", btn1: "Details", btn2: "Book", amenities: ["2 Twin Beds", "Work Desk", "Ergonomic Chair", "Coffee Maker", "Fast Wi-Fi"], size: "40 m²", occupancy: "2 Adults", available: true },
  { id: 5, img: Room1, price: 115, priceDisplay: "From $115/night", name: "Garden Junior Suite", star: <FaStar className="text-primary" />, desc: "Garden-level quiet, a small pantry, and easy access to the courtyard for morning coffee.", btn1: "Details", btn2: "Book", amenities: ["Queen Bed", "Garden Access", "Small Pantry", "Courtyard View", "Kitchenette"], size: "38 m²", occupancy: "2 Adults", available: false },
  { id: 6, img: Room3, price: 210, priceDisplay: "From $210/night", name: "Presidential Suite", star: <FaStar className="text-primary" />, desc: "Top floor, panoramic views, dining for six, and dedicated concierge coordination.", btn1: "Details", btn2: "Book", amenities: ["2 King Beds", "Panoramic View", "Dining Room", "Private Butler", "Jacuzzi"], size: "120 m²", occupancy: "4 Adults", available: true },
];

/** Testimonials */
export const testimonials = [
  { id: 1, name: "Sarah Mitchell", country: "United Kingdom", rating: 5, text: "An absolutely stunning hotel in the heart of Thamel. The staff went above and beyond to make our honeymoon special. The room was immaculate with breathtaking views of the mountains.", image: Testimonial1, date: "March 2026" },
  { id: 2, name: "James Chen", country: "Singapore", rating: 5, text: "Perfect location, exceptional service. The terrace breakfast is a must-do experience. I've stayed at many hotels in Kathmandu, and HotelX stands out for its attention to detail.", image: Testimonial2, date: "February 2026" },
  { id: 3, name: "Emma Rodriguez", country: "Spain", rating: 5, text: "From the moment we arrived, we felt like royalty. The spa is world-class, and the team arranged a beautiful surprise dinner on the terrace for our anniversary.", image: Testimonial3, date: "January 2026" },
  { id: 4, name: "Michael Thompson", country: "Australia", rating: 4, text: "Excellent value for luxury accommodation. The room was spacious, clean, and beautifully designed. Would definitely recommend to anyone visiting Kathmandu.", image: Testimonial4, date: "December 2025" },
];

/** Facility Icons */
export const facility = [
  { icon: <FaBed className="text-primary me-2" />, quantity: 2, facility: "beds" },
  { icon: <FaBath className="text-primary me-2" />, quantity: 1, facility: "bath" },
  { icon: <FaWifi className="text-primary me-2" />, facility: "Wi‑Fi" },
];