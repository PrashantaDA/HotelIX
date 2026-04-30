/* eslint-disable react/prop-types */
const Info = ({ icon, text, count }) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-[140px] px-8 py-8 rounded-2xl luxury-card border border-primary/10 hover:border-primary/30 transition-all duration-300">
      <div className="mb-2">{icon}</div>
      <h3 className="font-display text-3xl font-semibold text-primary">{count}</h3>
      <h5 className="text-sm uppercase tracking-widest text-secondary mt-1 font-sans font-medium">{text}</h5>
    </div>
  );
};

export default Info;