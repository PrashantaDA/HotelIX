import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "../constants/constant";

const Testimonials = () => {
	const [current, setCurrent] = useState(0);

	const next = () => setCurrent((c) => (c + 1) % testimonials.length);
	const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

	return (
		<section className="py-16 md:py-24 bg-dark/50 relative overflow-hidden">
			{/* Background pattern */}
			<div className="absolute inset-0 bg-luxury-pattern pointer-events-none" />

			<div className="relative z-10 max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<span className="text-primary uppercase tracking-[0.2em] text-sm font-medium">Testimonials</span>
					<h2 className="text-3xl md:text-4xl font-display mt-3 text-normal">What Our Guests Say</h2>
					<div className="w-20 h-1 bg-primary/60 mx-auto mt-4 rounded-full" />
				</motion.div>

				<div className="relative max-w-4xl mx-auto">
					<AnimatePresence mode="wait">
						<motion.div
							key={current}
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
							className="luxury-card rounded-2xl p-8 md:p-12 relative"
						>
							<FaQuoteLeft className="absolute top-6 left-6 text-4xl text-extra/50" />

							<div className="flex flex-col md:flex-row gap-8 items-center">
								<div className="shrink-0">
									<img
										src={testimonials[current].image}
										alt={testimonials[current].name}
										className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/30 shadow-glow"
									/>
								</div>

								<div className="flex-1 text-center md:text-left">
									<div className="flex justify-center md:justify-start gap-1 mb-3">
										{[...Array(5)].map((_, i) => (
											<FaStar
												key={i}
												className={`text-sm ${i < testimonials[current].rating ? "text-primary" : "text-secondary/30"}`}
											/>
										))}
									</div>

									<p className="text-secondary text-lg leading-relaxed mb-6 italic">&quot;{testimonials[current].text}&quot;</p>

									<div>
										<h4 className="text-normal font-semibold text-lg">{testimonials[current].name}</h4>
										<p className="text-secondary text-sm">
											{testimonials[current].country} · {testimonials[current].date}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Navigation arrows */}
					<button
						onClick={prev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-dark surface border border-primary/20 text-primary flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
					>
						<FaChevronLeft />
					</button>
					<button
						onClick={next}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-dark surface border border-primary/20 text-primary flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all"
					>
						<FaChevronRight />
					</button>

					{/* Dots */}
					<div className="flex justify-center gap-2 mt-8">
						{testimonials.map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrent(i)}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "bg-secondary/30 hover:bg-secondary/50"}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
