/* eslint-disable react/prop-types */
import { facility } from "../constants/constant";

const RoomCard = ({ img, name, star, desc, btn1, btn2, price }) => {
	return (
		<article className="flex flex-col w-full max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
			<div className="w-full relative">
				<img
					src={img}
					alt={name}
					className="w-full h-[240px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
				/>
				<span className="absolute bottom-4 left-4 bg-dark/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-normal text-sm font-semibold ring-1 ring-white/10">
					{price}
				</span>
			</div>
			<div className="px-5 pt-5 pb-2 flex items-start justify-between gap-3">
				<h2 className="font-display text-xl text-dark">{name}</h2>
				<p className="flex items-center shrink-0" aria-hidden>
					{star}
					{star}
					{star}
					{star}
					{star}
				</p>
			</div>
			<div className="px-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-secondary border-b border-slate-100 pb-4">
				{facility.map((item, index) => (
					<div
						key={index}
						className="flex items-center gap-1.5"
					>
						{item.icon}
						<span className="border-r border-slate-200 pr-4 last:border-0 last:pr-0">
							{item.quantity != null ? `${item.quantity} ${item.facility}` : item.facility}
						</span>
					</div>
				))}
			</div>
			<div className="px-5 pt-3">
				<p className="text-secondary text-sm leading-relaxed text-justify">{desc}</p>
			</div>
			<div className="px-5 py-6 flex items-stretch justify-between gap-3 mt-auto">
				<button
					type="button"
					className="flex-1 text-sm uppercase tracking-wide bg-extra/10 hover:bg-extra/20 text-extra font-semibold py-3 rounded-xl transition-colors"
				>
					{btn1}
				</button>
				<button
					type="button"
					className="flex-1 text-sm uppercase tracking-wide bg-dark text-normal hover:bg-dark-elevated font-semibold py-3 rounded-xl transition-colors"
				>
					{btn2}
				</button>
			</div>
		</article>
	);
};

export default RoomCard;
