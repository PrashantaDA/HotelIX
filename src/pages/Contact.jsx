import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { contactPageInfo } from "../constants/constant";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaChevronRight } from "react-icons/fa";

const cardStyles = [
	{ icon: FaEnvelope, color: "from-amber-500 to-orange-500" },
	{ icon: FaPhone, color: "from-emerald-500 to-teal-500" },
	{ icon: FaMapMarkerAlt, color: "from-rose-500 to-pink-500" },
	{ icon: FaClock, color: "from-violet-500 to-purple-500" },
];

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-dark dark:bg-dark light:bg-light">
			<PageHeader title="Contact Us" />

			{/* Contact Info Cards - New Design */}
			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{contactPageInfo.map((info, index) => {
						const style = cardStyles[index];
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group relative overflow-hidden rounded-2xl"
							>
								{/* Gradient background */}
								<div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

								{/* Card content */}
								<div className="relative p-6 bg-dark-surface/80 dark:bg-dark-surface/80 light:bg-white/80 backdrop-blur-sm border border-primary/10 dark:border-primary/10 light:border-gold/20 rounded-2xl h-full group-hover:border-primary/30 transition-all duration-300">
									{/* Icon with gradient background */}
									<div
										className={`w-14 h-14 rounded-xl bg-gradient-to-br ${style.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
									>
										<style.icon className="text-white text-xl" />
									</div>

									{/* Title */}
									<h3 className="text-lg font-display font-semibold text-normal dark:text-normal light:text-dark-elevated mb-4">{info.title}</h3>

									{/* Details */}
									<div className="space-y-2">
										{info.details.map((detail, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 group/detail"
											>
												<FaChevronRight className="text-primary text-xs opacity-0 group-hover/detail:opacity-100 transition-opacity" />
												<span className="text-secondary text-sm dark:text-secondary light:text-slate-600 group-hover/detail:text-normal transition-colors">
													{detail.label && <span className="font-semibold">{detail.label}: </span>}
													{detail.value}
												</span>
											</div>
										))}
									</div>

									{/* Hover glow effect */}
									<div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary/20 dark:bg-primary/20 light:bg-gold/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* Contact Form Section */}
			<div className="relative py-16 md:py-24 overflow-hidden">
				{/* Background decoration */}
				<div className="absolute inset-0 bg-luxury-pattern dark:bg-luxury-pattern light:bg-luxury-pattern-light" />
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/5 light:bg-gold/10 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 dark:bg-primary/5 light:bg-gold/10 rounded-full blur-3xl" />

				<div className="relative z-10 container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-12"
					>
						<span className="text-primary uppercase tracking-[0.2em] text-sm font-medium">Get in Touch</span>
						<h2 className="font-display text-3xl md:text-4xl font-semibold text-normal dark:text-normal light:text-dark-elevated mt-3">We'd Love to Hear From You</h2>
						<p className="text-secondary dark:text-secondary light:text-slate-600 mt-4 max-w-lg mx-auto">
							Send us a message and <span className="text-primary">we'll respond as soon as possible.</span>
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="max-w-3xl mx-auto"
					>
						<ContactForm />
					</motion.div>
				</div>
			</div>

			{/* Map Section */}
			<div className="container mx-auto px-4 py-12 md:py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="luxury-card dark:luxury-card light:luxury-card p-2 md:p-3 rounded-2xl"
				>
					<div className="rounded-xl overflow-hidden">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4643173158867!2d85.31727761509467!3d27.709543982784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b05d4f6f%3A0x3b9d3c6b3c6b3c6b!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Hotel location map"
							className="grayscale-[50%] dark:grayscale-[50%] light:grayscale-[20%] hover:grayscale-0 transition-all duration-500"
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
