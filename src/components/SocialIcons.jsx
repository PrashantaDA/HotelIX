import { socialIcons } from "../constants/constant";

const SocialIcons = () => {
	return (
		<div>
			{/* Social icons */}
			<div className="flex items-center flex-col">
				<ul className="flex gap-4 text-primary text-lg">
					{socialIcons.map((icon) => (
						<li
							className="hover:text-normal transition-all cursor-pointer"
							key={icon.id}
						>
							{icon.icon}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SocialIcons;
