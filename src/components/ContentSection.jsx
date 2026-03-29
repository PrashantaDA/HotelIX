/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const ContentSection = ({ title, subtitle, section, color, items, CardComponent, showAllButton, allButtonLink }) => {
	return (
		<section className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto my-20">
			<SectionHeader
				title={title}
				subtitle={subtitle}
				section={section}
				color={color}
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 place-items-stretch">
				{items.map((item, index) => (
					<CardComponent
						key={index}
						{...item}
					/>
				))}
			</div>
			{showAllButton && (
				<div className="flex items-center justify-center my-12">
					<Link
						to={allButtonLink}
						className="inline-flex uppercase tracking-wide bg-extra hover:brightness-110 text-white font-semibold py-3.5 px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-extra/50 focus:ring-offset-2 transition-all shadow-soft"
					>
						View All
					</Link>
				</div>
			)}
		</section>
	);
};

export default ContentSection;
