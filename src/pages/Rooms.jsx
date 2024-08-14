import PageHeader from "../components/PageHeader";
import ContentSection from "../components/ContentSection";
import RoomCard from "../components/RoomCard";
import { roomItems } from "../constants/constant";
import { useEffect } from "react";

const Rooms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<main>
			<PageHeader title="Rooms" />
			<ContentSection
				title="Our Rooms"
				subtitle="Explore Our"
				section="Rooms"
				color="extra"
				items={roomItems}
				CardComponent={RoomCard}
				showAllButton={false}
				allButtonLink="/services"
			/>
		</main>
	);
};

export default Rooms;
