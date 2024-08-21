import PageHeader from "../components/PageHeader";
import BookingDetails from "./Home/BookingDetails";

const Booking = () => {
	return (
		<>
			<PageHeader title="Booking" />
			<div className="flex items-center justify-center my-10">
				<BookingDetails />
			</div>
		</>
	);
};

export default Booking;
