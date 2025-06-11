import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const contactInfo = [
		{
			icon: <FaEnvelope className="text-2xl text-secondary" />,
			title: "Email Us",
			details: [
				{ label: "Booking", value: "book@hotelix.com" },
				{ label: "Technical", value: "tech@hotelix.com" },
				{ label: "General", value: "info@hotelix.com" },
			],
		},
		{
			icon: <FaPhone className="text-2xl text-secondary" />,
			title: "Call Us",
			details: [
				{ label: "Reception", value: "+977 1234567890" },
				{ label: "Pool", value: "+977 0987654321" },
				{ label: "Kitchen", value: "+977 5432123450" },
			],
		},
		{
			icon: <FaMapMarkerAlt className="text-2xl text-secondary" />,
			title: "Location",
			details: [
				{ label: "Address", value: "123 Hotel Street, Kathmandu" },
				{ label: "City", value: "Kathmandu, Nepal" },
			],
		},
		{
			icon: <FaClock className="text-2xl text-secondary" />,
			title: "Working Hours",
			details: [
				{ label: "Reception", value: "24/7" },
				{ label: "Restaurant", value: "7:00 AM - 10:00 PM" },
				{ label: "Pool", value: "6:00 AM - 8:00 PM" },
			],
		},
	];

	return (
		<div className="min-h-screen bg-background">
			<PageHeader title="Contact Us" />

			{/* Contact Information Cards */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{contactInfo.map((info, index) => (
						<div
							key={index}
							className="card p-6 hover:shadow-lg transition-all duration-300"
						>
							<div className="flex items-center gap-4 mb-4">
								{info.icon}
								<h3 className="text-xl font-semibold text-primary">{info.title}</h3>
							</div>
							<div className="space-y-2">
								{info.details.map((detail, idx) => (
									<div
										key={idx}
										className="flex flex-col"
									>
										<span className="text-sm text-gray-600">{detail.label}</span>
										<span className="font-medium text-primary">{detail.value}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="contact-bg py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
							<p className="text-gray-200">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="container mx-auto px-4 py-12">
				<div className="card p-6">
					<h3 className="text-2xl font-semibold text-primary mb-6">Find Us</h3>
					<div className="aspect-w-16 aspect-h-9">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4643173158867!2d85.31727761509467!3d27.709543982784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b05d4f6f%3A0x3b9d3c6b3c6b3c6b!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-lg"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
