import { footerContact, footerItem } from "../constants/constant";
import SocialIcons from "./SocialIcons";

const Footer = () => {
	return (
		<footer className="bg-dark text-normal">
			<div className="w-[90%] md:w-[85%] xl:w-4/5 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-24 xs:px-10 xl:px-0">
				<div className="self-center">
					<h1 className="uppercase text-4xl font-semibold tracking-wider text-primary xs:text-center md:text-left">HoteliX</h1>
				</div>
				<div className="flex flex-col gap-4 items-start">
					<h6 className="font-semibold text-xl uppercase text-center text-primary">Contact</h6>
					{footerContact.map((item, index) => (
						<div
							key={index}
							className="flex items-start"
						>
							<h6 className="font-semibold text-xl uppercase text-primary">{item.icon}</h6>
							<p className=" text-center">{item.name}</p>
						</div>
					))}
					<div className="pt-5">
						<SocialIcons />
					</div>
				</div>

				{footerItem.map((item, index) => (
					<div key={index}>
						<h6 className="font-semibold text-xl uppercase text-primary">{item.header}</h6>
						<ul className="flex flex-col mt-4">
							{item.UnitItem.map((link, index) => (
								<li
									key={index}
									className="my-1"
								>
									<a
										href={link.href}
										className=" hover:text-primary hover:underline cursor-pointer"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
