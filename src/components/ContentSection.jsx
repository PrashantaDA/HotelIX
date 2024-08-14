/* eslint-disable react/prop-types */
// ContentSection.js
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
			<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 place-items-center`}>
				{items.map((item, index) => (
					<CardComponent
						key={index}
						{...item}
					/>
				))}
			</div>
			{showAllButton && (
				<Link
					to={allButtonLink}
					className="flex items-center justify-center my-12"
				>
					<button className="uppercase bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline transition-all duration-300">
						View All
					</button>
				</Link>
			)}
		</section>
	);
};

export default ContentSection;
