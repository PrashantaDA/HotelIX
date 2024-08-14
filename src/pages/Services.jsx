import PageHeader from "../components/PageHeader";
import ContentSection from "../components/ContentSection";
import ServicesCard from "../components/ServicesCard";
import { services } from "../constants/constant";
import { useEffect } from "react";

const Services = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main>
			<PageHeader title="Services" />
			<ContentSection
				title="Our Services"
				subtitle="Explore Our"
				section="Services"
				color="extra"
				items={services}
				CardComponent={ServicesCard}
				showAllButton={false}
				allButtonLink="/services"
			/>
		</main>
	);
};

export default Services;
