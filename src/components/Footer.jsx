import { Link } from "react-router-dom";
import { footerContact, footerColumns, siteName, siteTagline } from "../constants/constant";
import SocialIcons from "./SocialIcons";

const Footer = () => {
	return (
		<footer className="bg-dark text-normal/85 border-t border-white/10">
			<div className="w-[90%] md:w-[85%] xl:w-4/5 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-16 xs:px-10 xl:px-0">
				<div className="self-center md:col-span-2 xl:col-span-1">
					<p className="font-display uppercase text-3xl md:text-4xl font-semibold tracking-wide text-primary">{siteName}</p>
					<p className="mt-3 text-sm text-normal/60 max-w-xs xs:text-center md:text-left">{siteTagline}</p>
				</div>
				<div className="flex flex-col gap-4 items-start">
					<h2 className="font-sans font-semibold text-sm uppercase tracking-widest text-primary">Contact</h2>
					{footerContact.map((item, index) => (
						<div
							key={index}
							className="flex items-start gap-2 text-sm"
						>
							<span className="text-primary shrink-0 mt-0.5">{item.icon}</span>
							<p>{item.name}</p>
						</div>
					))}
					<div className="pt-4">
						<SocialIcons />
					</div>
				</div>

				{footerColumns.map((col) => (
					<div key={col.id}>
						<h2 className="font-sans font-semibold text-sm uppercase tracking-widest text-primary">{col.header}</h2>
						<ul className="flex flex-col mt-4 gap-2">
							{col.links.map((link) => (
								<li key={link.label}>
									<Link
										to={link.to}
										className="text-sm text-normal/80 hover:text-primary transition-colors"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="border-t border-white/10 py-6 text-center text-xs text-normal/50">
				<span>
					© {new Date().getFullYear()} {siteName}. All rights reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
