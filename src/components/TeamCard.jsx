/* eslint-disable react/prop-types */

const TeamCard = ({ name, designation, image }) => {
	return (
		<article className="flex flex-col items-center w-full max-w-sm mx-auto bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100/80 hover:shadow-lg transition-all duration-300 group">
			<div className="relative w-full aspect-[4/5] overflow-hidden">
				<img
					src={image}
					alt={name}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<div className="flex flex-col items-center py-6 px-4 w-full">
				<h3 className="font-display text-xl font-semibold text-dark">{name}</h3>
				<p className="text-sm font-medium text-extra mt-1">{designation}</p>
			</div>
		</article>
	);
};

export default TeamCard;
