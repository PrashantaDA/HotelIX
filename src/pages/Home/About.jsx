import { About1, About2, About3, About4 } from "../../assets";
import { about } from "../../constants/constant";
import Info from "../../components/Info";

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
				<div className="flex flex-wrap gap-6 justify-center">
					{about.map((item) => (
						<Info
							key={item.id}
							icon={item.icon}
							text={item.text}
							count={item.count}
						/>
					))}
				</div>
				<div className="mt-8">
					<button className="uppercase bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
						Explore More
					</button>
				</div>
			</div>
			{/* RIght */}
			<div className="flex-1 xs:place-self-center lg:place-self-auto mt-20">
				<div className="grid grid-cols-2 gap-4">
					<img
						src={About1}
						alt="About1"
						className="w-[220px] lg:w-[240px] object-cover justify-self-end self-end"
					/>
					<img
						src={About2}
						alt="About2"
						className="xs:w-[240px] lg:w-full object-cover"
					/>
					<img
						src={About3}
						alt="About3"
						className="xs:w-[240px] lg:w-full object-cover "
					/>
					<img
						src={About4}
						alt="About4"
						className="xs:w-[220px] lg:w-[240px] object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
