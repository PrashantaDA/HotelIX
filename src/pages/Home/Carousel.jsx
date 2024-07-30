import Slider from "react-slick";
import { carouselData } from "../../constants/constant";
import { motion } from "framer-motion";

const Carousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
	};

	return (
		<div className="w-full">
			<Slider {...settings}>
				{carouselData.map((slide) => (
					<div
						key={slide.id}
						className="relative w-full carouselbg"
					>
						<img
							src={slide.img}
							alt={"Carousel" + slide.id}
							className="w-full h-[85dvh] object-cover"
						/>
						<div className="absolute bg-black bg-opacity-60 inset-0 flex flex-col items-center justify-center text-normal text-center px-2">
							{/* Subtitle */}
							<div className="relative">
								<motion.h2
									initial={{ opacity: 0, y: -54 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									className=" uppercase lg:text-2xl xs:text-lg line"
								>
									{slide.subtitle}
								</motion.h2>
							</div>

							{/* Title */}
							<motion.div
								initial={{ opacity: 0, y: -108 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7 }}
								className="xs:text-3xl lg:text-5xl font-semibold lg:my-6 my-2"
							>
								<h1 className="xs:my-2 lg:my-4">{slide.title1}</h1>
								<h1>{slide.title2}</h1>
							</motion.div>

							{/* Buttons */}
							<div className="mt-8 flex items-center justify-center gap-8 xs:flex-col sm:flex-row font-semibold">
								<motion.button
									initial={{ opacity: 0, x: -78 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									className="bg-primary text-normal xs:px-6 py-4 md:px-6 lg:px-8 rounded hover:bg-normal hover:text-dark btn"
								>
									{slide.btn1}
								</motion.button>
								<motion.button
									initial={{ opacity: 0, x: 78 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
									className="bg-extra text-normal  xs:px-6 py-4 md:px-6 lg:px-8 rounded hover:bg-normal hover:text-dark btn2"
								>
									{slide.btn2}
								</motion.button>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
