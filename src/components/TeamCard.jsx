/* eslint-disable react/prop-types */

const TeamCard = ({ name, designation, image }) => {
	return (
		<div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg">
			<div className="relative">
				<img
					src={image}
					alt="team"
					className="w-full object-cover"
				/>
			</div>
			<div className="flex flex-col items-center justify-center mt-8 ">
				<h3 className="text-2xl font-semibold">{name}</h3>
				<p className="text-lg text-secondary">{designation}</p>
			</div>
		</div>
	);
};

export default TeamCard;
