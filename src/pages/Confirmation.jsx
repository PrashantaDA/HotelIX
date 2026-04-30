import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaCalendar, FaUser, FaHotel, FaEnvelope, FaPrint } from "react-icons/fa";

const Confirmation = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("bookingConfirmation");
    if (!data) {
      navigate("/booking");
      return;
    }
    setBooking(JSON.parse(data));
  }, [navigate]);

  if (!booking) return null;

  return (
    <div className="min-h-screen bg-dark py-8 md:py-12">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <FaCheckCircle className="text-5xl text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display text-normal">Booking Confirmed!</h1>
          <p className="text-secondary mt-2">Thank you for choosing HoteliX</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="luxury-card rounded-2xl p-6 md:p-8"
        >
          <div className="flex justify-between items-start mb-6 pb-6 border-b border-primary/10">
            <div>
              <p className="text-secondary text-sm">Booking ID</p>
              <p className="text-2xl font-display text-primary">{booking.bookingId}</p>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors"
            >
              <FaPrint /> Print
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <FaHotel className="text-primary mt-1" />
              <div>
                <p className="text-secondary text-sm">Room</p>
                <p className="text-normal font-semibold">{booking.room}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaCalendar className="text-primary mt-1" />
              <div>
                <p className="text-secondary text-sm">Dates</p>
                <p className="text-normal font-semibold">{booking.checkIn} → {booking.checkOut}</p>
                <p className="text-secondary text-sm">{booking.nights} night{booking.nights !== 1 ? "s" : ""} · {booking.rooms} room{booking.rooms > 1 ? "s" : ""}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaUser className="text-primary mt-1" />
              <div>
                <p className="text-secondary text-sm">Guest</p>
                <p className="text-normal font-semibold">{booking.guest}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-primary mt-1" />
              <div>
                <p className="text-secondary text-sm">Confirmation sent to</p>
                <p className="text-normal font-semibold">{booking.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-dark-surface rounded-xl p-4 flex justify-between items-center">
            <span className="text-secondary">Total Paid</span>
            <span className="text-2xl font-display text-primary">${booking.total}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-secondary mb-4">A confirmation email has been sent to {booking.email}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-dark px-8 py-3 rounded-xl font-semibold"
            >
              Back to Home
            </Link>
            <Link
              to="/rooms"
              className="btn-gold px-8 py-3 rounded-xl font-semibold"
            >
              Explore More Rooms
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Confirmation;