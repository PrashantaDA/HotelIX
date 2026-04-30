import PropTypes from "prop-types";

const SectionHeader = ({ title, subtitle, section, color }) => {
  // Unified gold theme for luxury look
  const kicker = "text-primary";
  const underline = "bg-primary";
  const span = "text-primary";
  const titleColor = "text-normal";

  return (
    <div className="max-w-3xl mx-auto">
      <h6 className={`font-sans font-semibold text-sm uppercase tracking-[0.2em] text-center ${kicker} relative`}>
        {title}
        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 block">
          <span className={`block w-12 h-0.5 rounded-full ${underline}`} />
        </span>
      </h6>
      <h2 className={`font-display text-3xl md:text-4xl mt-10 mb-2 font-semibold text-center ${titleColor}`}>
        {subtitle}{" "}
        <span className={`${span} uppercase`}>{section}</span>
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