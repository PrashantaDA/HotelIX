import PageHeader from "../components/PageHeader";
import ContentSection from "../components/ContentSection";
import TeamCard from "../components/TeamCard";
import { team } from "../constants/constant";
const Team = () => {
	return (
		<main>
			<PageHeader title="Our Team" />
			<ContentSection
				title="Our Team"
				subtitle="Know our"
				section="Team"
				color="extra"
				items={team}
				CardComponent={TeamCard}
				showAllButton={false}
				allButtonLink="/services"
			/>
		</main>
	);
};

export default Team;
