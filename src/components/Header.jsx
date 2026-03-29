import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList, siteName } from "../constants/constant";
import SocialIcons from "./SocialIcons";

import { FaBars, FaTimes } from "react-icons/fa";

const linkClass = "block py-2 px-3 rounded-lg transition-colors";
const linkActive = "text-primary bg-white/5";
const linkIdle = "text-normal/90 hover:text-primary";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { pathname } = useLocation();

	const toggleMenu = () => setMenuOpen((o) => !o);

	const isActive = (path) => path === "/" ? pathname === "/" : pathname.startsWith(path);

	return (
		<header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/10 shadow-soft">
			<div className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto gap-x-6 flex justify-between px-2 py-4 items-center">
				<div>
					<h1 className="font-display uppercase text-3xl md:text-4xl font-semibold tracking-wide text-primary">
						<Link
							to="/"
							className="hover:text-primary-muted transition-colors"
						>
							{siteName}
						</Link>
					</h1>
				</div>

				<ul className="uppercase gap-4 xl:gap-6 items-center text-xs xl:text-sm font-medium tracking-wide xs:hidden lg:flex flex-wrap justify-end">
					{navList.map((item) => (
						<li key={item.id}>
							<Link
								to={item.path}
								className={`${linkClass} ${isActive(item.path) ? linkActive : linkIdle}`}
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				<div className="hidden lg:flex">
					<SocialIcons />
				</div>

				<div className="flex lg:hidden">
					{menuOpen ? (
						<FaTimes
							className="text-primary text-3xl cursor-pointer hover:opacity-80 transition-opacity"
							onClick={toggleMenu}
							aria-label="Close menu"
						/>
					) : (
						<FaBars
							className="text-primary text-3xl cursor-pointer hover:opacity-80 transition-opacity"
							onClick={toggleMenu}
							aria-label="Open menu"
						/>
					)}
				</div>
			</div>
			{menuOpen && (
				<div className="lg:hidden w-full bg-dark-elevated border-t border-white/10 shadow-card">
					<ul className="uppercase font-medium flex flex-col gap-1 py-4 px-4 max-w-md mx-auto">
						{navList.map((item) => (
							<li key={item.id}>
								<Link
									to={item.path}
									className={`${linkClass} text-center ${isActive(item.path) ? linkActive : "text-normal/90 hover:text-primary"}`}
									onClick={toggleMenu}
								>
									{item.name}
								</Link>
							</li>
						))}
						<li className="pt-4 mt-2 border-t border-white/10 flex justify-center">
							<SocialIcons />
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
