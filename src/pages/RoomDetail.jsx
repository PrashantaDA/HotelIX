import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaCheck, FaRuler, FaUser, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { roomItems } from "../constants/constant";

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomItems.find(r => r.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-normal mb-4">Room not found</h1>
          <Link to="/rooms" className="btn-gold px-6 py-3 rounded-xl">View All Rooms</Link>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 3);

    const params = new URLSearchParams({
      checkIn: tomorrow.toISOString().split("T")[0],
      checkOut: nextWeek.toISOString().split("T")[0],
      adults: "2",
      rooms: "1",
      roomId: room.id,
    });
    navigate(`/checkout?${params.toString()}`);
  };

  const images = [room.img, room.img, room.img]; // Using same image for demo

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={images[selectedImage]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

        <Link
          to="/rooms"
          className="absolute top-6 left-6 flex items-center gap-2 text-normal/80 hover:text-primary transition-colors bg-dark/50 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <FaArrowLeft /> Back to Rooms
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-32 relative z-10 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="luxury-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-display text-normal">{room.name}</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex text-primary">{room.star}{room.star}{room.star}{room.star}{room.star}</div>
                    <span className="text-secondary text-sm">5.0 rating</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-display text-primary">{room.priceDisplay}</p>
                  <p className="text-secondary text-sm">per night</p>
                </div>
              </div>

              {/* Room Info */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-primary/10">
                <div className="flex items-center gap-2 text-secondary">
                  <FaRuler className="text-primary" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <FaUser className="text-primary" />
                  <span>Up to {room.occupancy}</span>
                </div>
                <div className={`flex items-center gap-2 ${room.available ? "text-green-400" : "text-red-400"}`}>
                  <FaCheck className={room.available ? "" : "text-red-400"} />
                  <span>{room.available ? "Available" : "Sold Out"}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-display text-normal mb-4">About this room</h2>
                <p className="text-secondary leading-relaxed">{room.desc}</p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-xl font-display text-normal mb-4">Room Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-secondary">
                      <FaCheck className="text-primary text-xs" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div>
                <h2 className="text-xl font-display text-normal mb-4">Gallery</h2>
                <div className="grid grid-cols-4 gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-16 object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="luxury-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-display text-normal mb-4">Reserve Your Stay</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Price per night</span>
                  <span className="text-normal">${room.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary">Taxes & fees</span>
                  <span className="text-normal">${Math.round(room.price * 0.1)}</span>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                disabled={!room.available}
                className={`w-full py-4 rounded-xl font-semibold text-lg shadow-glow transition-all ${
                  room.available
                    ? "btn-gold hover:shadow-gold-glow"
                    : "bg-secondary/30 text-secondary cursor-not-allowed"
                }`}
              >
                {room.available ? "Book Now" : "Not Available"}
              </button>

              {!room.available && (
                <p className="text-center text-red-400 text-sm mt-3">
                  This room is currently unavailable for the selected dates.
                </p>
              )}

              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-xs text-secondary text-center">
                  Free cancellation up to 24 hours before check-in
                </p>
              </div>
            </div>

            {/* Related Rooms */}
            <div className="mt-6 luxury-card rounded-2xl p-6">
              <h3 className="text-lg font-display text-normal mb-4">Other Rooms</h3>
              <div className="space-y-4">
                {roomItems.filter(r => r.id !== room.id && r.available).slice(0, 3).map(r => (
                  <Link
                    key={r.id}
                    to={`/room/${r.id}`}
                    className="flex gap-3 group"
                  >
                    <img src={r.img} alt={r.name} className="w-16 h-14 rounded-lg object-cover" />
                    <div>
                      <h4 className="text-normal text-sm font-semibold group-hover:text-primary transition-colors">{r.name}</h4>
                      <p className="text-primary text-sm">{r.priceDisplay}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;