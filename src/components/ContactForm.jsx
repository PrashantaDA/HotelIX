import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const inputFocus = "focus:ring-2 focus:ring-extra/35 focus:border-extra";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		if (errors[name]) {
			setErrors({
				...errors,
				[name]: "",
			});
		}
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
		if (!formData.subject.trim()) newErrors.subject = "Subject is required";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validate()) {
			setIsSubmitting(true);
			try {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				console.log("Form data submitted:", formData);
				setSubmitSuccess(true);
				setFormData({ name: "", email: "", subject: "", message: "" });
				setErrors({});
				setTimeout(() => setSubmitSuccess(false), 5000);
			} catch (error) {
				console.error("Error submitting form:", error);
			} finally {
				setIsSubmitting(false);
			}
		}
	};

	return (
		<div className="card bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-card border border-white/20">
			{submitSuccess ? (
				<div className="text-center py-8">
					<div className="text-extra text-5xl mb-4" aria-hidden>
						✓
					</div>
					<h3 className="font-display text-2xl font-semibold text-dark mb-2">Message Sent!</h3>
					<p className="text-secondary">Thank you for contacting us. We&apos;ll get back to you soon.</p>
				</div>
			) : (
				<form
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-dark mb-1"
							>
								Your Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="John Doe"
								className={`w-full px-4 py-2.5 rounded-xl border bg-white ${
									errors.name ? "border-red-400" : "border-slate-200"
								} ${inputFocus} transition-all duration-200`}
							/>
							{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-dark mb-1"
							>
								Your Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@example.com"
								className={`w-full px-4 py-2.5 rounded-xl border bg-white ${
									errors.email ? "border-red-400" : "border-slate-200"
								} ${inputFocus} transition-all duration-200`}
							/>
							{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
						</div>
					</div>

					<div>
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-dark mb-1"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							placeholder="How can we help you?"
							className={`w-full px-4 py-2.5 rounded-xl border bg-white ${
								errors.subject ? "border-red-400" : "border-slate-200"
							} ${inputFocus} transition-all duration-200`}
						/>
						{errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-dark mb-1"
						>
							Your Message
						</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write your message here..."
							className={`w-full px-4 py-2.5 rounded-xl border bg-white resize-none ${
								errors.message ? "border-red-400" : "border-slate-200"
							} ${inputFocus} transition-all duration-200`}
						/>
						{errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full py-3.5 px-6 rounded-xl bg-extra text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200
							${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:brightness-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-extra/50 focus:ring-offset-2"}`}
					>
						{isSubmitting ? (
							<>
								<span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
								Sending...
							</>
						) : (
							<>
								<FaPaperPlane />
								Send Message
							</>
						)}
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
