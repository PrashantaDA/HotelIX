import Slider from "react-slick";
import { Link } from "react-router-dom";
import { carouselData } from "../../constants/constant";
import { motion } from "framer-motion";

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		arrows: false,
	};

	const btnBase =
		"inline-flex items-center justify-center text-center font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 rounded-xl shadow-card transition-all duration-300 min-w-[160px]";

	return (
		<div className="w-full">
			<Slider {...settings}>
				{carouselData.map((slide) => (
					<div
						key={slide.id}
						className="relative w-full"
					>
						<img
							src={slide.img}
							alt={"Carousel " + slide.id}
							className="w-full h-[80dvh] min-h-[420px] object-cover"
						/>
						<div className="absolute bg-gradient-to-t from-dark/90 via-dark/50 to-dark/30 inset-0 flex flex-col items-center justify-center text-normal text-center px-4">
							<div className="relative">
								<motion.h2
									initial={{ opacity: 0, y: -24 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className="uppercase tracking-[0.25em] text-sm md:text-base text-primary font-sans font-medium line"
								>
									{slide.subtitle}
								</motion.h2>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.65 }}
								className="text-3xl md:text-5xl font-display font-semibold md:my-6 my-4 max-w-4xl leading-tight"
							>
								<h1 className="md:my-2 drop-shadow-md">{slide.title1}</h1>
								<h1 className="text-cyan-300">{slide.title2}</h1>
							</motion.div>

							<div className="mt-6 md:mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
								<motion.div
									initial={{ opacity: 0, x: -24 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									<Link
										to="/rooms"
										className={`${btnBase} bg-primary text-primary-foreground hover:bg-primary-muted hover:shadow-glow`}
									>
										{slide.btn1}
									</Link>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, x: 24 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									<Link
										to="/booking"
										className={`${btnBase} bg-extra text-white hover:brightness-110 ring-1 ring-white/10`}
									>
										{slide.btn2}
									</Link>
								</motion.div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
