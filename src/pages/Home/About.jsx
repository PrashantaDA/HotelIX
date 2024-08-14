import { About1, About2, About3, About4 } from "../../assets";
import { Link } from "react-router-dom";
import { about } from "../../constants/constant";
import Info from "../../components/Info";

import { motion } from "framer-motion";

const About = () => {
	return (
		<section className="my-16 xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto py-8 flex items-start justify-between xs:flex-col lg:flex-row gap-8 gap-x-16">
			{/* Left */}
			<div className="flex-1">
				<h3 className="relative text-2xl uppercase text-extra font-semibold">
					About Us{" "}
					<span className="absolute top-[50%] mx-4">
						<hr className="w-16 border-2 border-primary" />
					</span>{" "}
				</h3>
				<h1 className="text-4xl my-4">
					Welcome to <span className="text-extra font-bold">HotelIX</span>
				</h1>
				<p className="text-secondary my-8 text-justify">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni asperiores nesciunt quis obcaecati quae temporibus facere ut quam, voluptates saepe. Voluptatibus ex
					perspiciatis eos corporis excepturi alias.
				</p>
				<motion.div
					initial={{ opacity: 0, x: -54 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-wrap gap-6 justify-center"
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
				<div className="mt-8">
					<button className="uppercase bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
						<Link to="/about">Explore More</Link>
					</button>
				</div>
			</div>
			{/* RIght */}
			<div className="flex-1 xs:place-self-center lg:place-self-auto mt-20">
				<div className="grid grid-cols-2 gap-4">
					<img
						src={About1}
						alt="About1"
						className="w-[220px] lg:w-[240px] object-cover justify-self-end self-end hover:scale-110 transition-transform duration-300 rounded-md"
					/>
					<img
						src={About2}
						alt="About2"
						className="xs:w-[240px] lg:w-full hover:scale-110 transition-transform duration-300 object-cover rounded-md"
					/>
					<img
						src={About3}
						alt="About3"
						className="xs:w-[240px] lg:w-full object-cover rounded-md hover:scale-110 transition-transform duration-300"
					/>
					<img
						src={About4}
						alt="About4"
						className="xs:w-[220px] lg:w-[240px] object-cover rounded-md hover:scale-110 transition-transform duration-300"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
