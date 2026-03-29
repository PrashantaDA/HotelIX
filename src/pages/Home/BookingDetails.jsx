import { useState } from "react";
import PropTypes from "prop-types";

const inputClass =
	"w-full rounded-xl border border-slate-200/80 bg-white py-2.5 px-3 text-dark text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-extra/40 focus:border-extra transition-shadow";

const BookingDetails = ({ overlapCarousel = true }) => {
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
		<section
			className={`w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 ${overlapCarousel ? "-mt-8 md:-mt-12" : ""}`}
		>
			<div className="bg-white rounded-2xl shadow-card border border-slate-100/80 p-5 md:p-8">
				<form onSubmit={handleSubmit}>
					<div className="flex flex-wrap gap-y-4 gap-x-3 lg:gap-x-4 items-end">
						<div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[15%] lg:min-w-[120px] lg:flex-1">
							<label
								className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2"
								htmlFor="checkInDate"
							>
								Check-in
							</label>
							<input
								type="date"
								id="checkInDate"
								name="checkInDate"
								value={formData.checkInDate}
								onChange={handleChange}
								className={inputClass}
								required
							/>
						</div>

						<div className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[15%] lg:min-w-[120px] lg:flex-1">
							<label
								className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2"
								htmlFor="checkOutDate"
							>
								Check-out
							</label>
							<input
								type="date"
								id="checkOutDate"
								name="checkOutDate"
								value={formData.checkOutDate}
								onChange={handleChange}
								className={inputClass}
								required
							/>
						</div>

						<div className="w-full sm:w-[calc(33.333%-0.25rem)] lg:w-[12%] lg:min-w-[88px] lg:flex-1">
							<label
								className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2"
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
								className={inputClass}
								required
							/>
						</div>

						<div className="w-full sm:w-[calc(33.333%-0.25rem)] lg:w-[12%] lg:min-w-[88px] lg:flex-1">
							<label
								className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2"
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
								className={inputClass}
							/>
						</div>

						<div className="w-full sm:w-[calc(33.333%-0.25rem)] lg:w-[12%] lg:min-w-[88px] lg:flex-1">
							<label
								className="block text-dark text-xs font-semibold uppercase tracking-wide mb-2"
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
								className={inputClass}
								required
							/>
						</div>

						<div className="w-full sm:w-full lg:w-auto lg:min-w-[140px]">
							<button
								type="submit"
								className="w-full lg:w-auto bg-extra hover:brightness-110 text-white font-semibold py-3 px-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-extra/50 focus:ring-offset-2 transition-all shadow-soft"
							>
								Check availability
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

BookingDetails.propTypes = {
	overlapCarousel: PropTypes.bool,
};

export default BookingDetails;
