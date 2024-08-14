import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
	const location = useLocation();

	// List of routes where Header and Footer should be displayed
	const headerFooterRoutes = ["/", "/about", "/contact", "/rooms", "/services"];

	// Check if the current route is one of the headerFooterRoutes
	const showHeaderFooter = headerFooterRoutes.includes(location.pathname);

	return (
		<>
			{showHeaderFooter && <Header />}

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<AboutUs />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/rooms"
					element={<Rooms />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>

			{showHeaderFooter && <Footer />}
		</>
	);
};

export default App;
