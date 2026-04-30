/* eslint-disable react/prop-types */
const ServicesCard = ({ icon, name, desc }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto min-h-[320px] md:min-h-[340px] luxury-card text-normal text-center px-6 py-10 gap-6 rounded-2xl border border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <div className="rounded-2xl bg-dark-surface p-5 ring-1 ring-primary/20 group-hover:ring-primary/40 group-hover:bg-primary/5 transition-all">
        <span className="text-primary group-hover:scale-105 inline-block transition-transform [&>svg]:w-9 [&>svg]:h-9 md:[&>svg]:w-10 md:[&>svg]:h-10">
          {icon}
        </span>
      </div>
      <div className="font-display text-xl md:text-2xl font-semibold text-normal group-hover:text-primary transition-colors">{name}</div>
      <p className="text-sm text-secondary leading-relaxed max-w-sm">{desc}</p>
    </div>
  );
};

export default ServicesCard;