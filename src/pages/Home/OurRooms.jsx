import SectionHeader from "../../components/SectionHeader";
import RoomCard from "../../components/RoomCard";
import { roomItems } from "../../constants/constant";
import { Link } from "react-router-dom";

const OurRooms = () => {
	return (
		<section className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto my-20">
			<SectionHeader
				title="Our Rooms"
				subtitle="Explore Our"
				section="Featured Rooms"
				color="primary"
			/>

			<div className="flex flex-wrap xs:justify-center lg:justify-evenly items-center gap-10 my-16">
				{roomItems.map((item, index) => (
					<RoomCard
						key={index}
						img={item.img}
						name={item.name}
						star={item.star}
						details={item.details}
						desc={item.desc}
						btn1={item.btn1}
						btn2={item.btn2}
						price={item.price}
					/>
				))}
			</div>
			<Link
				to={"/rooms"}
				className="flex items-center justify-center my-12"
			>
				<button className="uppercase bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
					View All
				</button>
			</Link>
		</section>
	);
};

export default OurRooms;
