import PageHeader from "../components/PageHeader";
import BookingDetails from "./Home/BookingDetails";

const Booking = () => {
	return (
		<>
			<PageHeader title="Booking" />
			<div className="flex items-center justify-center my-10 md:my-14 px-4 w-full">
				<BookingDetails overlapCarousel={false} />
			</div>
		</>
	);
};

export default Booking;
