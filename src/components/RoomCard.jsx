/* eslint-disable react/prop-types */
import { facility } from "../constants/constant";

const RoomCard = ({ img, name, star, desc, btn1, btn2, price }) => {
	return (
		<div className="flex flex-col xs:w-full md:w-[450px] xl:w-[360px] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-md">
			<div className="w-full relative">
				<img
					src={img}
					alt="Room"
					className="w-full h-[240px] object-cover rounded-t-lg"
				/>
				<span className="absolute top-[93.5%] left-[20px] bg-dark px-2 py-1 rounded-md text-normal text-sm">{price}</span>
			</div>
			<div className="xs:px-4 md:px-2">
				<div className="p-4 mt-4 flex items-center justify-between">
					<h2 className="text-xl">{name}</h2>
					<p className="flex items-center">
						{star}
						{star}
						{star}
						{star}
						{star}
					</p>
				</div>
				<div className="px-4 py-2 flex items-center gap-4">
					{facility.map((item, index) => (
						<div
							key={index}
							className="flex items-center text-secondary mb-2"
						>
							{item.icon}
							<span className="px-2 border-r-2 ">
								{item.quantity} {item.facility}
							</span>
						</div>
					))}
				</div>
				<div className="px-4">
					<p className="text-secondary text-justify text-sm">{desc}</p>
				</div>
				<div className="px-4 py-8 flex items-center justify-between gap-8">
					<button className=" uppercase w-full text-sm bg-extra hover:bg-dark text-normal hover:text-primary font-semibold p-2 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
						{btn1}
					</button>
					<button className="uppercase w-full hover:bg-primary bg-dark hover:text-normal text-normal text-sm font-semibold p-2 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
						{btn2}
					</button>
				</div>
			</div>
		</div>
	);
};

export default RoomCard;
