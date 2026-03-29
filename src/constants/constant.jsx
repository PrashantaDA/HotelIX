import {
	FaHotel,
	FaUsers,
	FaUsersCog,
	FaUtensils,
	FaSpa,
	FaSwimmer,
	FaGlassCheers,
	FaDumbbell,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaStar,
	FaBed,
	FaBath,
	FaWifi,
	FaPhone,
	FaClock,
} from "react-icons/fa";

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

import { Carousel1, Carousel2, Room1, Room2, Room3, Team1, Team2, Team3, Team4 } from "../assets/index.js";

/** Brand — used across header, footer, and copy */
export const siteName = "HoteliX";
export const siteTagline = "Boutique comfort in the heart of Kathmandu.";

export const aboutIntro =
	"HoteliX is an independent boutique hotel built around calm spaces, attentive hosts, and honest hospitality. Whether you are here for the old city, the mountains, or a quiet place to work, we keep things simple: rest well, eat well, and feel at home.";

/** Top navigation — flat list for static hosting and predictable routing */
export const navList = [
	{ id: 1, path: "/", name: "Home" },
	{ id: 2, path: "/about", name: "About" },
	{ id: 3, path: "/services", name: "Services" },
	{ id: 4, path: "/rooms", name: "Rooms" },
	{ id: 5, path: "/booking", name: "Booking" },
	{ id: 6, path: "/team", name: "Team" },
	{ id: 7, path: "/contact", name: "Contact" },
];

export const socialIcons = [
	{ id: 1, href: "https://facebook.com/", icon: <FaFacebook /> },
	{ id: 2, href: "https://twitter.com/", icon: <FaXTwitter /> },
	{ id: 3, href: "https://instagram.com/", icon: <FaInstagram /> },
];

export const carouselData = [
	{
		id: 1,
		img: Carousel1,
		title1: "Your Quiet Corner in the City",
		title2: "Warmth, Light, and Himalayan Ease",
		subtitle: "HoteliX Kathmandu",
		btn1: "Our Rooms",
		btn2: "Book a Stay",
	},
	{
		id: 2,
		img: Carousel2,
		title1: "Rooms Made for Deep Sleep",
		title2: "Courtyard Views & City Rooftops",
		subtitle: "Stay with us",
		btn1: "Our Rooms",
		btn2: "Book a Stay",
	},
];

export const about = [
	{
		icon: (
			<FaHotel
				size={36}
				className="text-primary mb-2"
			/>
		),
		text: "Guest rooms",
		count: "48",
	},
	{
		icon: (
			<FaUsers
				size={36}
				className="text-primary mb-2"
			/>
		),
		text: "Team members",
		count: "32",
	},
	{
		icon: (
			<FaUsersCog
				size={36}
				className="text-primary mb-2"
			/>
		),
		text: "Returning guests (’26)",
		count: "1.2k",
	},
];

export const services = [
	{
		icon: (
			<FaHotel
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Rooms & apartments",
		desc: "Sound-soft floors, rainfall showers, and blackout drapes as standard in every category.",
	},
	{
		icon: (
			<FaUtensils
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Restaurant & bar",
		desc: "Morning coffee, Nepali thali, and a small wine list—served on the terrace when weather allows.",
	},
	{
		icon: (
			<FaSpa
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Spa & wellness",
		desc: "Massage by appointment, steam, and a calm room for stretching after long flights.",
	},
	{
		icon: (
			<FaSwimmer
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Pool & terrace",
		desc: "A lap-friendly pool and loungers with shade—open early for swimmers and late for stargazing.",
	},
	{
		icon: (
			<FaGlassCheers
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Events & gatherings",
		desc: "Intimate receptions and small meetings with AV support and catering from our kitchen.",
	},
	{
		icon: (
			<FaDumbbell
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Gym & yoga",
		desc: "Cardio, free weights, and weekly yoga slots—towels and water provided.",
	},
];

export const team = [
	{ image: Team1, name: "Anita Shrestha", designation: "General Manager" },
	{ image: Team2, name: "Ravi Thapa", designation: "Front Office Manager" },
	{ image: Team3, name: "Sita Gurung", designation: "Head Chef" },
	{ image: Team4, name: "Nirajan KC", designation: "Guest Experience" },
	{ image: Team1, name: "Maya Pradhan", designation: "Housekeeping Lead" },
	{ image: Team2, name: "Binod Maharjan", designation: "Engineering" },
];

export const footerColumns = [
	{
		id: 1,
		header: "Explore",
		links: [
			{ label: "About", to: "/about" },
			{ label: "Rooms", to: "/rooms" },
			{ label: "Services", to: "/services" },
			{ label: "Booking", to: "/booking" },
		],
	},
	{
		id: 2,
		header: "Visit",
		links: [
			{ label: "Our team", to: "/team" },
			{ label: "Contact", to: "/contact" },
			{ label: "Privacy", to: "/privacy" },
			{ label: "Terms", to: "/terms" },
		],
	},
];

export const footerContact = [
	{
		icon: <FaMapMarkerAlt className="me-3 shrink-0" />,
		name: "Thamel Marg, Kathmandu 44600, Nepal",
	},
	{
		icon: <FaPhoneAlt className="me-3 shrink-0" />,
		name: "+977 1234567890",
	},
	{
		icon: <FaEnvelope className="me-3 shrink-0" />,
		name: "stay@hotelix.com",
	},
];

/** Contact page cards */
export const contactPageInfo = [
	{
		icon: <FaEnvelope className="text-2xl text-extra" />,
		title: "Email us",
		details: [
			{ label: "Reservations", value: "stay@hotelix.com" },
			{ label: "Events", value: "events@hotelix.com" },
			{ label: "General", value: "hello@hotelix.com" },
		],
	},
	{
		icon: <FaPhone className="text-2xl text-extra" />,
		title: "Call us",
		details: [
			{ label: "Front desk", value: "+977 1234567890" },
			{ label: "Restaurant", value: "+977 1234567891" },
		],
	},
	{
		icon: <FaMapMarkerAlt className="text-2xl text-extra" />,
		title: "Location",
		details: [
			{ label: "Address", value: "Thamel Marg, Kathmandu 44600" },
			{ label: "Airport", value: "~20 min from Tribhuvan International" },
		],
	},
	{
		icon: <FaClock className="text-2xl text-extra" />,
		title: "Hours",
		details: [
			{ label: "Reception", value: "24 hours" },
			{ label: "Restaurant", value: "6:30 AM – 10:30 PM" },
			{ label: "Pool", value: "7:00 AM – 9:00 PM" },
		],
	},
];

export const roomItems = [
	{
		img: Room1,
		price: "From $95/night",
		name: "Courtyard Queen",
		star: <FaStar className="text-primary" />,
		desc: "Queen bed, courtyard outlook, workspace nook, and a walk-in shower—ideal for short city stays.",
		btn1: "Details",
		btn2: "Book",
	},
	{
		img: Room2,
		price: "From $125/night",
		name: "Terrace Deluxe",
		star: <FaStar className="text-primary" />,
		desc: "Extra space, a private terrace, and a sitting area—popular with couples and longer visits.",
		btn1: "Details",
		btn2: "Book",
	},
	{
		img: Room3,
		price: "From $155/night",
		name: "Skyline Suite",
		star: <FaStar className="text-primary" />,
		desc: "Separate living room, skyline views, and a soaking tub—our go-to for celebrations.",
		btn1: "Details",
		btn2: "Book",
	},
	{
		img: Room2,
		price: "From $135/night",
		name: "Executive Twin",
		star: <FaStar className="text-primary" />,
		desc: "Two full beds, ergonomic chairs, and fast Wi‑Fi—built for colleagues traveling together.",
		btn1: "Details",
		btn2: "Book",
	},
	{
		img: Room1,
		price: "From $115/night",
		name: "Garden Junior Suite",
		star: <FaStar className="text-primary" />,
		desc: "Garden-level quiet, a small pantry, and easy access to the courtyard for morning coffee.",
		btn1: "Details",
		btn2: "Book",
	},
	{
		img: Room3,
		price: "From $210/night",
		name: "Presidential Suite",
		star: <FaStar className="text-primary" />,
		desc: "Top floor, panoramic views, dining for six, and dedicated concierge coordination.",
		btn1: "Details",
		btn2: "Book",
	},
];

export const facility = [
	{
		icon: <FaBed className="text-extra me-2" />,
		quantity: 2,
		facility: "beds",
	},
	{
		icon: <FaBath className="text-extra me-2" />,
		quantity: 1,
		facility: "bath",
	},
	{
		icon: <FaWifi className="text-extra me-2" />,
		facility: "Wi‑Fi",
	},
];
