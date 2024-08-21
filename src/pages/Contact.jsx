import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<PageHeader title="Contact Us" />
			<div className="contact-bg">
				<div className=" bg-dark my-2">
					<div className="flex items-center justify-between w-4/5 mx-auto py-4 text-primary flex-wrap gap-4">
						<p>Booking: book@hotelix.com</p>
						<p>Technical: tech@hotelix.com</p>
						<p>General Information: info@hotelix.com</p>
					</div>
				</div>
				<div className="py-4  text-primary shadow-lg ">
					<div>
						<ContactForm />
					</div>
				</div>
				<div className="bg-dark my-2">
					<div className="flex items-center justify-between w-4/5 mx-auto py-4 text-extra flex-wrap gap-4">
						<p>Reception: +977 1234567890 </p>
						<p>Pool: +977 0987654321 </p>
						<p>Kitchen: +977 5432123450 </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
