import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import ServicesCard from "../../components/ServicesCard";
import { services } from "../../constants/constant";

const OurServices = () => {
	return (
		<section className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto my-20">
			<SectionHeader
				title="Our Services"
				subtitle="Explore Our"
				section="Services"
				color="extra"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 place-items-center">
				{services.slice(0, 3).map((item, index) => (
					<ServicesCard
						key={index}
						icon={item.icon}
						name={item.name}
						desc={item.desc}
					/>
				))}
			</div>
			<Link
				to={"/services"}
				className="flex items-center justify-center my-12"
			>
				<button className="uppercase bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
					View All
				</button>
			</Link>
		</section>
	);
};

export default OurServices;
