import { useState } from "react";

const BookingDetails = () => {
	const [formData, setFormData] = useState({
		checkInDate: "",
		checkOutDate: "",
		adults: 1,
		children: 0,
		rooms: 1,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data Submitted:", formData);
	};

	return (
		<section className="w-full mx-auto bg-normal rounded-md shadow-lg p-4 px-20 ">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-wrap -mx-2 mb-4 items-end">
					<div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
						<label
							className="block text-dark text-sm font-bold mb-2"
							htmlFor="checkInDate"
						>
							Check-in Date
						</label>
						<input
							type="date"
							id="checkInDate"
							name="checkInDate"
							value={formData.checkInDate}
							onChange={handleChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>

					<div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
						<label
							className="block text-dark text-sm font-bold mb-2"
							htmlFor="checkOutDate"
						>
							Check-out Date
						</label>
						<input
							type="date"
							id="checkOutDate"
							name="checkOutDate"
							value={formData.checkOutDate}
							onChange={handleChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>

					<div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
						<label
							className="block text-dark text-sm font-bold mb-2"
							htmlFor="adults"
						>
							Adults
						</label>
						<input
							type="number"
							id="adults"
							name="adults"
							value={formData.adults}
							onChange={handleChange}
							min="1"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>

					<div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
						<label
							className="block text-dark text-sm font-bold mb-2"
							htmlFor="children"
						>
							Children
						</label>
						<input
							type="number"
							id="children"
							name="children"
							value={formData.children}
							onChange={handleChange}
							min="0"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>

					<div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
						<label
							className="block text-dark text-sm font-bold mb-2"
							htmlFor="rooms"
						>
							Rooms
						</label>
						<input
							type="number"
							id="rooms"
							name="rooms"
							value={formData.rooms}
							onChange={handleChange}
							min="1"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline"
							required
						/>
					</div>

					<div className="w-full md:w-1/6 px-2 mb-4 md:mb-0">
						<button
							type="submit"
							className="bg-extra hover:bg-dark text-normal hover:text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-6 md:mt-0 transition-all duration-300"
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default BookingDetails;
