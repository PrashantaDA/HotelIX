import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import About from "./Home/About";

const AboutUs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main>
			<PageHeader title="About" />
			<About />
		</main>
	);
};

export default AboutUs;
