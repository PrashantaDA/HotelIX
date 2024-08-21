import SectionHeader from "../../components/SectionHeader";
import { team } from "../../constants/constant";
import TeamCard from "../../components/TeamCard";

const OurTeam = () => {
	return (
		<section className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto my-20">
			<SectionHeader
				title="Our Team"
				subtitle="Our Leadership"
				section="Team"
				color="primary"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16 place-items-center">
				{team.slice(0, 4).map((item, index) => (
					<TeamCard
						key={index}
						{...item}
					/>
				))}
			</div>
		</section>
	);
};

export default OurTeam;
