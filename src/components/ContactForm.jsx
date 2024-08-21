// ContactForm.js
import { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validate = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.email) newErrors.email = "Email is required";
		else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
		if (!formData.message) newErrors.message = "Message is required";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate()) {
			// Handle form submission (e.g., send data to an API)
			console.log("Form data submitted:", formData);
			// Clear form
			setFormData({ name: "", email: "", message: "" });
			setErrors({});
		}
	};

	return (
		<div className="max-w-xl mx-auto p-4 bg-dark text-extra border border-gray-200 rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-normal"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Your Name"
						autoComplete="off"
						className={`mt-1 block w-full p-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
					/>
					{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-normal"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Your Email"
						autoComplete="off"
						className={`mt-1 block w-full p-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
					/>
					{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-sm font-medium text-normal"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						value={formData.message}
						onChange={handleChange}
						className={`mt-1 block w-full p-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"}`}
					/>
					{errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
