/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-dark via-dark-elevated to-dark text-normal px-4">
			<div className="p-10 md:p-14 rounded-2xl text-center bg-white/5 backdrop-blur-sm border border-white/10 max-w-lg shadow-card">
				<h1 className="font-display text-6xl md:text-7xl font-semibold mb-4 text-primary">404</h1>
				<p className="text-xl md:text-2xl mb-2 font-display">Page not found</p>
				<p className="text-normal/70 mb-10 text-sm md:text-base">We can&apos;t seem to find the page you&apos;re looking for.</p>
				<Link
					to="/"
					className="inline-flex uppercase tracking-wide bg-extra hover:brightness-110 text-white font-semibold py-3.5 px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-extra/50 focus:ring-offset-2 focus:ring-offset-dark transition-all shadow-soft"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
