import { useState } from "react";
import { FaPaperPlane, FaCheck, FaUser, FaEnvelope, FaPen, FaComment } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const inputFocus = "focus:ring-2 focus:ring-primary/40 focus:border-primary/50";

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
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 1500));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { name: "name", label: "Your Name", icon: FaUser, placeholder: "John Doe", type: "text" },
    { name: "email", label: "Email Address", icon: FaEnvelope, placeholder: "john@example.com", type: "email" },
    { name: "subject", label: "Subject", icon: FaPen, placeholder: "How can we help?", type: "text" },
  ];

  return (
    <div className="luxury-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/30 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

      <AnimatePresence mode="wait">
        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <FaCheck className="text-4xl text-primary" />
            </motion.div>
            <h3 className="font-display text-2xl font-semibold text-normal mb-2">Message Sent!</h3>
            <p className="text-secondary">We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit} className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inputFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-normal mb-2 flex items-center gap-2">
                    <field.icon className="text-primary text-xs" />
                    {field.label}
                  </label>
                  <div className="relative">
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`w-full pl-4 pr-4 py-3 rounded-xl border bg-dark-surface ${errors[field.name] ? "border-red-400" : "border-primary/20"} ${inputFocus} transition-all duration-200 text-normal placeholder:text-secondary/30`}
                    />
                    {errors[field.name] && (
                      <p className="mt-1 text-xs text-red-400">{errors[field.name]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-normal mb-2 flex items-center gap-2">
                <FaComment className="text-primary text-xs" />
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                className={`w-full px-4 py-3 rounded-xl border bg-dark-surface resize-none ${errors.message ? "border-red-400" : "border-primary/20"} ${inputFocus} transition-all duration-200 text-normal placeholder:text-secondary/30`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-primary to-primary-shimmer text-dark font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-glow hover:shadow-gold-glow hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;