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
	FaEnvelopeOpen,
	FaQuoteRight,
	FaStar,
	FaBed,
	FaBath,
	FaWifi,
} from "react-icons/fa";

import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";

import {
	Carousel1,
	Carousel2,
	Room1,
	Room2,
	Room3,
	Team1,
	Team2,
	Team3,
	Team4,
	Testimonial1,
	Testimonial2,
	Testimonial3,
	// Testimonial4,
} from "../assets/index.js";

export const navList = [
	{
		id: 1,
		path: "/",
		name: "Home",
	},
	{
		id: 2,
		path: "/about",
		name: "About",
	},
	{
		id: 3,
		path: "/services",
		name: "Services",
	},
	{
		id: 4,
		path: "/rooms",
		name: "Rooms",
	},
	{
		id: 5,
		path: "/page",
		name: "Page",
		subItems: [
			{
				id: 51,
				path: "/booking",
				name: "Booking",
			},
			{
				id: 52,
				path: "/team",
				name: "Our Team",
			},
			{
				id: 53,
				path: "/testimonial",
				name: "Testimonial",
			},
		],
	},
	{
		id: 6,
		path: "/contact",
		name: "Contact",
	},
];

export const socialIcons = [
	{
		id: 1,
		icon: <FaFacebook />,
	},
	{
		id: 2,
		icon: <FaXTwitter />,
	},
	{
		id: 3,
		icon: <FaInstagram />,
	},
];

export const carouselData = [
	{
		id: 1,
		img: Carousel1,
		title1: `Discover Your Perfect Retreat`,
		title2: `Immerse Yourself in Luxury`,
		subtitle: "luxury living",
		btn1: "Our Room",
		btn2: "Book Room",
	},
	{
		id: 2,
		img: Carousel2,
		title1: `Discover Exquisite Accommodations`,
		title2: `Experience Unparalleled Luxury`,
		subtitle: "luxury living",
		btn1: "Our Room",
		btn2: "Book Room",
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
		text: "Rooms",
		count: "8520",
	},
	{
		icon: (
			<FaUsers
				size={36}
				className="text-primary mb-2"
			/>
		),
		text: "Staffs",
		count: "2386",
	},
	{
		icon: (
			<FaUsersCog
				size={36}
				className="text-primary mb-2"
			/>
		),
		text: "Clients",
		count: "4666",
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
		name: "Rooms & Appartment",
		desc: "Contrary to popular belief, ipsum is not simply random.",
	},
	{
		icon: (
			<FaUtensils
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Food & Restaurant",
		desc: "Contrary to popular belief, ipsum is not simply random.",
	},
	{
		icon: (
			<FaSpa
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Spa & Fitness",
		desc: "Contrary to popular belief, ipsum is not simply random.",
	},

	{
		icon: (
			<FaSwimmer
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Sports & Gaming",
		discription: "Contrary to popular belief, ipsum is not simply random.",
	},
	{
		icon: (
			<FaGlassCheers
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "Event & Party",
		discription: "Contrary to popular belief, ipsum is not simply random.",
	},

	{
		icon: (
			<FaDumbbell
				size={32}
				className="text-primary mb-2"
			/>
		),
		name: "GYM & Yoga",
		discription: "Contrary to popular belief, ipsum is not simply random.",
	},
];

export const team = [
	{
		image: Team1,
		name: "John Doe",
		designation: "Manager",
	},
	{
		image: Team2,
		name: "John Doe2",
		designation: "A. Manager",
	},
	{
		image: Team3,
		name: "Jane Doe",
		designation: "Manager",
	},
	{
		image: Team4,
		name: "Jane Doe2",
		designation: "A. Manager",
	},
];

export const footerItem = [
	{
		id: 1,
		header: "Company",
		UnitItem: [
			{
				name: "About Us",
			},
			{
				name: "Contact Us",
			},
			{
				name: "Privacy Policy",
			},
			{
				name: "Terms & Condition",
			},
			{
				name: "Support",
			},
		],
	},
	{
		id: 2,
		header: "Services",
		UnitItem: [
			{
				name: "Food & Restaurant",
			},
			{
				name: "Spa & Fitness",
			},
			{
				name: "Sports & Gaming",
			},
			{
				name: "Event & Party",
			},
			{
				name: "GYM & Yoga",
			},
		],
	},
];

export const footerContact = [
	{
		icon: <FaMapMarkerAlt className="me-3" />,
		name: "123 Street, New York, USA",
	},
	{
		icon: <FaPhoneAlt className="me-3" />,
		name: "+012 345 67890",
	},
	{
		icon: <FaEnvelope className="me-3" />,
		name: "info@example.com",
	},
];

export const contact = [
	{
		icon: <FaEnvelopeOpen className="text-primary me-2" />,
		title: "Booking",
		email: "book@example.com",
	},
	{
		icon: <FaEnvelopeOpen className="text-primary me-2" />,
		title: "Technical",
		email: "tech@example.com",
	},
	{
		icon: <FaEnvelopeOpen className="text-primary me-2" />,
		title: "General",
		email: "info@example.com",
	},
];
export const testimonial = [
	{
		desc: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
		name: "Client Name",
		profession: "Profession",
		icon: (
			<FaQuoteRight
				className="text-primary position-absolute end-0 bottom-0 me-4 mb-n1"
				size={24}
			/>
		),
		img: Testimonial1,
	},
	{
		desc: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
		name: "Client Name",
		profession: "Profession",
		icon: (
			<FaQuoteRight
				className="text-primary position-absolute end-0 bottom-0 me-4 mb-n1"
				size={24}
			/>
		),
		img: Testimonial2,
	},
	{
		desc: "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
		name: "Client Name",
		profession: "Profession",
		icon: (
			<FaQuoteRight
				className="text-primary position-absolute end-0 bottom-0 me-4 mb-n1"
				size={24}
			/>
		),
		img: Testimonial3,
	},
];

export const roomItems = [
	{
		img: Room1,
		price: "$110/night",
		name: "Junior Suite",
		star: <FaStar className="text-primary" />,
		desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
		btn1: "View Detail",
		btn2: "book now",
	},

	{
		img: Room2,
		price: "$110/night",
		name: "Executive Suite",
		star: <FaStar className="text-primary" />,
		desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
		btn1: "View Detail",
		btn2: "book now",
	},
	{
		img: Room3,
		price: "$110/night",
		name: "Deluxe Suite",
		star: <FaStar className="text-primary" />,
		desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
		btn1: "View Detail",
		btn2: "book now",
	},
	{
		img: Room2,
		price: "$110/night",
		name: "Premium Suite",
		star: <FaStar className="text-primary" />,
		desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
		btn1: "View Detail",
		btn2: "book now",
	},
	{
		img: Room1,
		price: "$110/night",
		name: "Premium Junior Suite",
		star: <FaStar className="text-primary" />,
		desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
		btn1: "View Detail",
		btn2: "book now",
	},
	{
		img: Room3,
		price: "$110/night",
		name: "Presidential Suite",
		star: <FaStar className="text-primary" />,
		desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
		btn1: "View Detail",
		btn2: "book now",
	},
];

export const facility = [
	{
		icon: <FaBed className="text-extra me-2" />,
		quantity: 3,
		facility: "bed",
	},
	{
		icon: <FaBath className="text-extra me-2" />,
		quantity: 2,
		facility: "bath",
	},
	{
		icon: <FaWifi className="text-extra me-2" />,
		facility: "Wifi",
	},
];
