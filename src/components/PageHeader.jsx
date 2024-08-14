import { Breadcrumb } from "antd";
import { TbHome2 } from "react-icons/tb";
import PropTypes from "prop-types";

const PageHeader = ({ title }) => {
	return (
		<section className="w-full flex items-center justify-center h-[120px] bg-dark shadow-lg border-t-2">
			<Breadcrumb
				className="text-2xl p-2 "
				separator=">"
				items={[
					{
						href: "/",
						title: (
							<div className="flex items-center gap-2 text-normal hover:underline hover:bg-dark">
								<TbHome2 size={24} />
								<span>Home</span>
							</div>
						),
					},
					{
						title: <span className="text-primary font-semibold">{title}</span>,
					},
				]}
			/>
		</section>
	);
};

PageHeader.propTypes = {
	title: PropTypes.string,
};

export default PageHeader;
