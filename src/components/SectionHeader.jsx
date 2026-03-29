import PropTypes from "prop-types";

const accentMap = {
	primary: {
		kicker: "text-primary",
		underline: "bg-primary",
		span: "text-primary",
	},
	extra: {
		kicker: "text-extra",
		underline: "bg-extra",
		span: "text-extra",
	},
};

const SectionHeader = ({ title, subtitle, section, color }) => {
	const a = accentMap[color] ?? accentMap.primary;

	return (
		<div className="max-w-3xl mx-auto">
			<h6 className={`font-sans font-semibold text-sm uppercase tracking-[0.2em] text-center ${a.kicker} relative`}>
				{title}
				<span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 block">
					<span className={`block w-12 h-0.5 rounded-full ${a.underline}`} />
				</span>
			</h6>
			<h2 className="font-display text-3xl md:text-4xl mt-10 mb-2 font-semibold text-center text-dark">
				{subtitle}{" "}
				<span className={`${a.span} uppercase`}>{section}</span>
			</h2>
		</div>
	);
};

SectionHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	section: PropTypes.string,
	color: PropTypes.oneOf(["primary", "extra"]),
};

export default SectionHeader;
