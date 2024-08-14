import PageHeader from "../components/PageHeader";
import ContentSection from "../components/ContentSection";
import ServicesCard from "../components/ServicesCard";
import { services } from "../constants/constant";

const Services = () => {
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
				showAllButton={true}
				allButtonLink="/services"
			/>
		</main>
	);
};

export default Services;
