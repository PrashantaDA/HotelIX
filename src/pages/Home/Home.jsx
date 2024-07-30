import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "./Carousel";
import BookingDetails from "./BookingDetails";
import About from "./About";
import OurRooms from "./OurRooms";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";

const Home = () => {
	return (
		<>
			<Carousel />
			<BookingDetails />
			<About />
			<OurRooms />
			<OurServices />
			<OurTeam />
		</>
	);
};

export default Home;
