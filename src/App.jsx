import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const App = () => {
	return (
		<>
			<Header />

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
			</Routes>
		</>
	);
};

export default App;
