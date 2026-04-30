/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-dark text-normal px-4">
      <div className="p-10 md:p-14 rounded-2xl text-center luxury-card border border-primary/10 max-w-lg">
        <h1 className="font-display text-6xl md:text-7xl font-semibold mb-4 text-primary">404</h1>
        <p className="text-xl md:text-2xl mb-2 font-display">Page not found</p>
        <p className="text-secondary mb-10 text-sm md:text-base">We can't seem to find the page you're looking for.</p>
        <Link
          to="/"
          className="inline-flex uppercase tracking-wide btn-gold font-semibold py-3.5 px-10 rounded-xl shadow-glow hover:shadow-gold-glow transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;