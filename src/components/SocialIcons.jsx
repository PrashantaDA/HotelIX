import { socialIcons } from "../constants/constant";

const SocialIcons = () => {
	return (
		<div className="flex items-center justify-center">
			<ul className="flex gap-5 text-primary text-xl">
				{socialIcons.map((item) => (
					<li
						className="hover:text-normal hover:scale-110 transition-all"
						key={item.id}
					>
						<a
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex"
							aria-label="Social profile"
						>
							{item.icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialIcons;
