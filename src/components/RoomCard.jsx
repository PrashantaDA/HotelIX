/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RoomCard = ({ img, name, star, desc, btn1, btn2, priceDisplay, id, available, size, occupancy }) => {
  return (
    <article className="flex flex-col w-full max-w-md mx-auto luxury-card rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
      <div className="w-full relative">
        <img
          src={img}
          alt={name}
          className="w-full h-[240px] object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        <span className="absolute bottom-4 left-4 bg-dark/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-normal text-sm font-semibold ring-1 ring-primary/20">
          {priceDisplay}
        </span>
        {!available && (
          <div className="absolute inset-0 bg-dark/70 flex items-center justify-center">
            <span className="bg-red-500/90 text-white px-4 py-2 rounded-full font-semibold text-sm">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="px-5 pt-5 pb-2 flex items-start justify-between gap-3">
        <h2 className="font-display text-xl text-normal">{name}</h2>
        <p className="flex items-center shrink-0" aria-hidden>
          {star}{star}{star}{star}{star}
        </p>
      </div>

      <div className="px-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-secondary border-b border-primary/10 pb-4">
        <span className="flex items-center gap-1.5">
          <span className="text-primary text-xs">▷</span> {size}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-primary text-xs">▷</span> {occupancy}
        </span>
      </div>

      <div className="px-5 pt-3">
        <p className="text-secondary text-sm leading-relaxed">{desc}</p>
      </div>

      <div className="px-5 py-6 flex items-stretch justify-between gap-3 mt-auto">
        <Link
          to={`/room/${id}`}
          className="flex-1 text-sm uppercase tracking-wide text-center bg-primary/10 hover:bg-primary/20 text-primary font-semibold py-3 rounded-xl transition-colors"
        >
          {btn1}
        </Link>
        {available ? (
          <Link
            to={`/room/${id}`}
            className="flex-1 text-sm uppercase tracking-wide text-center bg-primary text-dark-foreground hover:bg-primary-shimmer font-semibold py-3 rounded-xl transition-colors shadow-glow hover:shadow-gold-glow"
          >
            {btn2}
          </Link>
        ) : (
          <button
            disabled
            className="flex-1 text-sm uppercase tracking-wide bg-secondary/30 text-secondary font-semibold py-3 rounded-xl cursor-not-allowed"
          >
            Unavailable
          </button>
        )}
      </div>
    </article>
  );
};

export default RoomCard;