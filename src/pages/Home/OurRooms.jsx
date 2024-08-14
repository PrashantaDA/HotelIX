import RoomCard from "../../components/RoomCard";
import ContentSection from "../../components/ContentSection";
import { roomItems } from "../../constants/constant";

const OurRooms = () => {
	return (
		<ContentSection
			title="Our Rooms"
			subtitle="Explore Our"
			section="Featured Rooms"
			color="primary"
			items={roomItems.slice(0, 3)}
			CardComponent={RoomCard}
			showAllButton={true}
			allButtonLink="/rooms"
		/>
	);
};

export default OurRooms;
