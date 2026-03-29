/* eslint-disable react/prop-types */
const ServicesCard = ({ icon, name, desc }) => {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-md mx-auto min-h-[320px] md:min-h-[340px] bg-white text-dark text-center px-6 py-10 gap-6 rounded-2xl border border-slate-100 shadow-card hover:shadow-lg hover:border-extra/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
			<div className="rounded-2xl bg-surface p-5 ring-1 ring-slate-200/80 group-hover:ring-extra/30 group-hover:bg-extra/5 transition-all">
				<span className="text-primary group-hover:scale-105 inline-block transition-transform [&>svg]:w-9 [&>svg]:h-9 md:[&>svg]:w-10 md:[&>svg]:h-10">
					{icon}
				</span>
			</div>
			<div className="font-display text-xl md:text-2xl font-semibold text-dark group-hover:text-extra transition-colors">{name}</div>
			<p className="text-sm text-secondary leading-relaxed max-w-sm">{desc}</p>
		</div>
	);
};

export default ServicesCard;
