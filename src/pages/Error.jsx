/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-dark via-secondary to-dark text-normal">
			<div className="p-10 rounded-lg text-center bg-black bg-opacity-40">
				<h1 className="text-6xl font-bold mb-4 animate-bounce">Oops!</h1>
				<p className="text-2xl mb-8">We can't seem to find the page you're looking for.</p>
				<Link
					to="/"
					className="uppercase bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-4 px-10 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
