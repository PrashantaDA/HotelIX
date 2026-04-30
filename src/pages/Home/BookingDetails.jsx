import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { roomItems } from "../../constants/constant";

const inputClass = "w-full rounded-xl border border-primary/20 bg-dark-surface py-2.5 px-3 text-normal shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all";

const BookingDetails = ({ overlapCarousel = true }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
    rooms: 1,
    roomType: "",
  });
  const [errors, setErrors] = useState({});

  const nights = useMemo(() => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0;
    const start = new Date(formData.checkInDate);
    const end = new Date(formData.checkOutDate);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [formData.checkInDate, formData.checkOutDate]);

  const selectedRoom = roomItems.find(r => r.id === parseInt(formData.roomType));
  const totalPrice = selectedRoom && nights ? selectedRoom.price * nights * formData.rooms : null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];

    if (!formData.checkInDate) newErrors.checkInDate = "Required";
    else if (formData.checkInDate < today) newErrors.checkInDate = "Cannot be in past";

    if (!formData.checkOutDate) newErrors.checkOutDate = "Required";
    else if (formData.checkOutDate <= formData.checkInDate) newErrors.checkOutDate = "Must be after check-in";

    if (!formData.roomType) newErrors.roomType = "Select a room";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const params = new URLSearchParams({
      checkIn: formData.checkInDate,
      checkOut: formData.checkOutDate,
      adults: formData.adults,
      children: formData.children,
      rooms: formData.rooms,
      roomId: formData.roomType,
    });
    navigate(`/checkout?${params.toString()}`);
  };

  return (
    <section className={`w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 ${overlapCarousel ? "-mt-8 md:-mt-12" : ""}`}>
      <div className="luxury-card rounded-2xl p-5 md:p-8 border border-primary/10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            {/* Check-in */}
            <div className="lg:col-span-1">
              <label className="block text-normal text-xs font-semibold uppercase tracking-wide mb-2" htmlFor="checkInDate">
                Check-in
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleChange}
                className={`${inputClass} ${errors.checkInDate ? "border-red-500" : ""}`}
              />
              {errors.checkInDate && <p className="text-red-400 text-xs mt-1">{errors.checkInDate}</p>}
            </div>

            {/* Check-out */}
            <div className="lg:col-span-1">
              <label className="block text-normal text-xs font-semibold uppercase tracking-wide mb-2" htmlFor="checkOutDate">
                Check-out
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleChange}
                className={`${inputClass} ${errors.checkOutDate ? "border-red-500" : ""}`}
              />
              {errors.checkOutDate && <p className="text-red-400 text-xs mt-1">{errors.checkOutDate}</p>}
            </div>

            {/* Room Type */}
            <div className="lg:col-span-1">
              <label className="block text-normal text-xs font-semibold uppercase tracking-wide mb-2" htmlFor="roomType">
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={`${inputClass} ${errors.roomType ? "border-red-500" : ""}`}
              >
                <option value="">Select room</option>
                {roomItems.filter(r => r.available).map(room => (
                  <option key={room.id} value={room.id}>{room.name} (${room.price}/night)</option>
                ))}
              </select>
              {errors.roomType && <p className="text-red-400 text-xs mt-1">{errors.roomType}</p>}
            </div>

            {/* Adults */}
            <div className="lg:col-span-1">
              <label className="block text-normal text-xs font-semibold uppercase tracking-wide mb-2" htmlFor="adults">
                Adults
              </label>
              <input
                type="number"
                id="adults"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                min="1"
                max="10"
                className={inputClass}
              />
            </div>

            {/* Rooms */}
            <div className="lg:col-span-1">
              <label className="block text-normal text-xs font-semibold uppercase tracking-wide mb-2" htmlFor="rooms">
                Rooms
              </label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                value={formData.rooms}
                onChange={handleChange}
                min="1"
                max="5"
                className={inputClass}
              />
            </div>

            {/* Submit */}
            <div className="lg:col-span-1">
              <button
                type="submit"
                className="w-full btn-gold font-semibold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-glow hover:shadow-gold-glow"
              >
                {totalPrice ? `$${totalPrice} · Book` : "Check Availability"}
              </button>
              {totalPrice && (
                <p className="text-center text-xs text-secondary mt-2">
                  {nights} night{nights !== 1 ? "s" : ""} × {formData.rooms} room{formData.rooms !== 1 ? "s" : ""}
                </p>
              )}
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