import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer.jsx";
import Booking from "./pages/Booking.jsx";
import Team from "./pages/Team.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

const headerFooterRoutes = ["/", "/about", "/contact", "/rooms", "/services", "/booking", "/team", "/privacy", "/terms"];

const App = () => {
	const location = useLocation();
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
					path="/team"
					element={<Team />}
				/>
				<Route
					path="/booking"
					element={<Booking />}
				/>
				<Route
					path="/privacy"
					element={<Privacy />}
				/>
				<Route
					path="/terms"
					element={<Terms />}
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
