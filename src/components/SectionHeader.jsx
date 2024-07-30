import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle, section, color }) => {
	return (
		<div>
			<h6 className={`font-semibold text-xl uppercase text-center text-${color} relative`}>
				{title}
				<span className="absolute top-[95%] left-[47.5%] mt-1">
					<hr className="w-16 border-2 border-dark" />
				</span>
			</h6>
			<h2 className="text-4xl my-8 font-semibold text-center">
				{subtitle} <span className={`text-${color} uppercase`}>{section}</span>{" "}
			</h2>
		</div>
	);
};

SectionHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	section: PropTypes.string,
	color: PropTypes.string,
};

export default SectionHeader;
