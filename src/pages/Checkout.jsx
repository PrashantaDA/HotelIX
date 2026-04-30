import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaCheck, FaUser, FaEnvelope, FaPhone, FaCalendar, FaHome, FaInfoCircle } from "react-icons/fa";
import { roomItems } from "../constants/constant";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const roomId = parseInt(searchParams.get("roomId"));
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const adults = parseInt(searchParams.get("adults")) || 1;
  const rooms = parseInt(searchParams.get("rooms")) || 1;

  const room = roomItems.find(r => r.id === roomId);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  }, [checkIn, checkOut]);

  const subtotal = room ? room.price * nights * rooms : 0;
  const taxes = Math.round(subtotal * 0.1);
  const total = subtotal + taxes;

  useEffect(() => {
    if (!room || nights <= 0) {
      navigate("/booking");
    }
  }, [room, nights, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Navigate to confirmation with booking data
    const bookingData = {
      bookingId: "HX" + Date.now().toString().slice(-8),
      room: room?.name,
      checkIn,
      checkOut,
      nights,
      rooms,
      adults,
      total,
      guest: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
    };
    sessionStorage.setItem("bookingConfirmation", JSON.stringify(bookingData));
    navigate("/confirmation");
  };

  if (!room) return null;

  return (
    <div className="min-h-screen bg-dark py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-display text-normal">Complete Your Booking</h1>
          <p className="text-secondary mt-2">You're one step away from your stay at HoteliX</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="luxury-card rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-display text-normal mb-6 flex items-center gap-2">
                <FaUser className="text-primary" /> Guest Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-normal text-sm mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/20 bg-dark-surface py-3 px-4 text-normal focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-normal text-sm mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/20 bg-dark-surface py-3 px-4 text-normal focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-normal text-sm mb-2 flex items-center gap-2">
                    <FaEnvelope className="text-primary text-xs" /> Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/20 bg-dark-surface py-3 px-4 text-normal focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-normal text-sm mb-2 flex items-center gap-2">
                    <FaPhone className="text-primary text-xs" /> Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/20 bg-dark-surface py-3 px-4 text-normal focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-normal text-sm mb-2 flex items-center gap-2">
                  <FaInfoCircle className="text-primary text-xs" /> Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any special requests? (early check-in, dietary requirements, etc.)"
                  className="w-full rounded-xl border border-primary/20 bg-dark-surface py-3 px-4 text-normal focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                />
              </div>

              <div className="border-t border-primary/10 pt-6 mt-6">
                <div className="flex items-start gap-3 mb-4">
                  <FaCheck className="text-primary mt-1" />
                  <p className="text-sm text-secondary">Free cancellation up to 24 hours before check-in. No prepayment required - pay at the property.</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold font-semibold py-4 rounded-xl text-lg shadow-glow hover:shadow-gold-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : `Confirm Booking - $${total}`}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="luxury-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-display text-normal mb-4">Booking Summary</h3>

              <div className="flex gap-4 mb-4">
                <img src={room.img} alt={room.name} className="w-24 h-20 rounded-lg object-cover" />
                <div>
                  <h4 className="text-normal font-semibold">{room.name}</h4>
                  <div className="flex text-primary text-sm">{room.star}{room.star}{room.star}{room.star}{room.star}</div>
                </div>
              </div>

              <div className="space-y-3 text-sm border-t border-primary/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-secondary flex items-center gap-2"><FaCalendar className="text-xs" /> Check-in</span>
                  <span className="text-normal">{checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary flex items-center gap-2"><FaCalendar className="text-xs" /> Check-out</span>
                  <span className="text-normal">{checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary flex items-center gap-2"><FaUser className="text-xs" /> Guests</span>
                  <span className="text-normal">{adults} Adults, {rooms} Room{rooms > 1 ? "s" : ""}</span>
                </div>
              </div>

              <div className="border-t border-primary/10 mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">${room.price} × {nights} night{nights !== 1 ? "s" : ""} × {rooms} room{rooms > 1 ? "s" : ""}</span>
                  <span className="text-normal">${subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Taxes & fees (10%)</span>
                  <span className="text-normal">${taxes}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-primary/10">
                  <span className="text-normal">Total</span>
                  <span className="text-primary">${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;