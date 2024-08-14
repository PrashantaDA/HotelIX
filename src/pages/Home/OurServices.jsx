import ContentSection from "../../components/ContentSection";
import ServicesCard from "../../components/ServicesCard";
import { services } from "../../constants/constant";

const OurServices = () => {
	return (
		<ContentSection
			title="Our Services"
			subtitle="Explore Our"
			section="Services"
			color="extra"
			items={services.slice(0, 3)} // Only the first 3 services
			CardComponent={ServicesCard}
			showAllButton={true}
			allButtonLink="/services"
		/>
	);
};

export default OurServices;
