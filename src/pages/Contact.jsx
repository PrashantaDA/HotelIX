import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { contactPageInfo } from "../constants/constant";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-background">
			<PageHeader title="Contact Us" />

			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{contactPageInfo.map((info, index) => (
						<div
							key={index}
							className="card p-6 hover:border-extra/20 transition-colors"
						>
							<div className="flex items-center gap-4 mb-4">
								{info.icon}
								<h2 className="font-display text-xl font-semibold text-dark">{info.title}</h2>
							</div>
							<div className="space-y-3">
								{info.details.map((detail, idx) => (
									<div
										key={idx}
										className="flex flex-col gap-0.5"
									>
										<span className="text-xs uppercase tracking-wide text-secondary">{detail.label}</span>
										<span className="font-medium text-dark">{detail.value}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="contact-bg py-16 md:py-20">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-3">Get in Touch</h2>
							<p className="text-normal/75 max-w-lg mx-auto">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-12 md:py-16">
				<div className="card p-6 md:p-8">
					<h2 className="font-display text-2xl font-semibold text-dark mb-6">Find Us</h2>
					<div className="rounded-xl overflow-hidden ring-1 ring-slate-200/80 shadow-inner">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4643173158867!2d85.31727761509467!3d27.709543982784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b05d4f6f%3A0x3b9d3c6b3c6b3c6b!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Hotel location map"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
