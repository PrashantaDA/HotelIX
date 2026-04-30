import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer.jsx";
import Booking from "./pages/Booking.jsx";
import Team from "./pages/Team.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";
import Checkout from "./pages/Checkout.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import RoomDetail from "./pages/RoomDetail.jsx";

const headerFooterRoutes = ["/", "/about", "/contact", "/rooms", "/services", "/booking", "/team", "/privacy", "/terms"];

const App = () => {
  const location = useLocation();
  const showHeaderFooter = headerFooterRoutes.includes(location.pathname);

  return (
    <>
      {showHeaderFooter && <Header />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<RoomDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default App;