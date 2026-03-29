import { TbHome2, TbChevronRight } from "react-icons/tb";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
	return (
		<section className="w-full border-b border-white/10 bg-gradient-to-br from-dark via-dark-elevated to-dark">
			<div className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto px-2 py-6 md:py-8">
				<nav
					className="flex flex-wrap items-center gap-2 md:gap-3"
					aria-label="Breadcrumb"
				>
					<ol className="flex flex-wrap items-center gap-2 md:gap-3 text-sm md:text-base">
						<li className="flex items-center min-h-[2.25rem]">
							<Link
								to="/"
								className="inline-flex items-center gap-2 rounded-lg px-2 py-1.5 -mx-2 text-normal/90 hover:text-primary hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
							>
								<TbHome2
									className="shrink-0 opacity-90"
									size={20}
									aria-hidden
								/>
								<span className="font-medium font-sans tracking-wide">Home</span>
							</Link>
						</li>
						<li
							className="flex items-center text-primary/50"
							aria-hidden
						>
							<TbChevronRight size={18} />
						</li>
						<li className="flex items-center min-h-[2.25rem]">
							<span
								className="font-display font-semibold text-lg md:text-xl text-primary px-1"
								aria-current="page"
							>
								{title}
							</span>
						</li>
					</ol>
				</nav>
			</div>
		</section>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string.isRequired,
};

export default PageHeader;
