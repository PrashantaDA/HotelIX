/* eslint-disable react/prop-types */
const ServicesCard = ({ icon, name, desc }) => {
	return (
		<div className="flex flex-col items-center justify-center xs:w-full lg:w-[340px] h-[340px] bg-white hover:bg-secondary text-dark text-center px-4 gap-8 rounded-md shadow-sm hover:shadow-lg hover:scale-[1.02]  transition-all duration-300 cursor-pointer group ">
			<div className="border-8 border-double p-4">{icon}</div>
			<div className="text-2xl font-semibold group-hover:text-primary">{name}</div>
			<div className="text-sm text-secondary group-hover:text-normal px-4">{desc}</div>
		</div>
	);
};

export default ServicesCard;
