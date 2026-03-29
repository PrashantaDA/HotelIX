import { About1, About2, About3, About4 } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { about, aboutIntro, siteName } from "../../constants/constant";
import Info from "../../components/Info";

import { motion } from "framer-motion";

const About = () => {
	const location = useLocation();
	const isAboutPage = location.pathname === "/about";

	return (
		<section className="my-16 xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto py-10 flex items-start justify-between xs:flex-col lg:flex-row gap-12 lg:gap-x-16">
			<div className="flex-1">
				<p className="relative text-sm uppercase tracking-[0.2em] text-extra font-semibold font-sans inline-block">
					About Us
					<span className="absolute left-full top-1/2 ml-4 w-12 h-0.5 bg-primary -translate-y-1/2 rounded-full" />
				</p>
				<h1 className="font-display text-4xl md:text-5xl mt-4 text-dark">
					Welcome to <span className="text-extra font-semibold">{siteName}</span>
				</h1>
				<p className="text-secondary my-8 text-justify leading-relaxed">{aboutIntro}</p>
				<motion.div
					initial={{ opacity: 0, x: -24 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="flex flex-wrap gap-6 justify-center sm:justify-start"
				>
					{about.map((item, ind) => (
						<Info
							key={ind}
							icon={item.icon}
							text={item.text}
							count={item.count}
						/>
					))}
				</motion.div>
				{!isAboutPage && (
					<div className="mt-10">
						<Link
							to="/about"
							className="inline-flex uppercase tracking-wide bg-extra hover:brightness-110 text-white font-semibold py-3.5 px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-extra/50 focus:ring-offset-2 transition-all shadow-soft"
						>
							Explore More
						</Link>
					</div>
				)}
			</div>
			<div className="flex-1 xs:place-self-center lg:place-self-auto w-full max-w-xl lg:max-w-none">
				<div className="grid grid-cols-2 gap-3 md:gap-4">
					<img
						src={About1}
						alt="Hotel interior"
						className="w-full max-w-[220px] lg:max-w-[240px] object-cover justify-self-end self-end hover:scale-[1.02] transition-transform duration-500 rounded-2xl shadow-soft"
					/>
					<img
						src={About2}
						alt="Hotel lounge"
						className="w-full object-cover rounded-2xl shadow-soft hover:scale-[1.02] transition-transform duration-500"
					/>
					<img
						src={About3}
						alt="Hotel detail"
						className="w-full object-cover rounded-2xl shadow-soft hover:scale-[1.02] transition-transform duration-500"
					/>
					<img
						src={About4}
						alt="Hotel suite"
						className="w-full max-w-[220px] lg:max-w-[240px] object-cover rounded-2xl shadow-soft hover:scale-[1.02] transition-transform duration-500"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
