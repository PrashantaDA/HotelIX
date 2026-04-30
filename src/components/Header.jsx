import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { navList, siteName } from "../constants/constant";
import SocialIcons from "./SocialIcons";
import { useTheme } from "../context/ThemeContext";

import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { pathname } = useLocation();
	const { theme, toggleTheme } = useTheme();
	const isDark = useMemo(() => theme === "dark", [theme]);

	const toggleMenu = () => setMenuOpen((o) => !o);

	const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

	const linkClass = "block py-2 px-3 rounded-lg transition-colors";
	const linkActive = isDark ? "text-primary bg-white/5" : "text-primary bg-gold/10";
	const linkIdle = isDark ? "text-normal/90 hover:text-primary" : "text-slate-700 hover:text-primary";

	return (
		<header className={`sticky top-0 z-50 backdrop-blur-md border-b shadow-soft ${isDark ? "bg-dark/95 border-white/10" : "bg-primary border-gold/15"}`}>
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

				<div className="hidden lg:flex items-center gap-4">
					<button
						onClick={toggleTheme}
						className={`p-2 rounded-lg transition-all duration-300 border hover:border-primary/30 group ${
							isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-gold/10 border-gold/20 hover:bg-gold/20"
						}`}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
					>
						{theme === "dark" ? (
							<FaSun className="text-primary text-lg group-hover:text-primary-muted transition-colors" />
						) : (
							<FaMoon className="text-primary text-lg group-hover:text-primary-muted transition-colors" />
						)}
					</button>
					<SocialIcons isDark={isDark} />
				</div>

				<div className="flex lg:hidden items-center gap-3">
					<button
						onClick={toggleTheme}
						className={`p-2 rounded-lg transition-all duration-300 border hover:border-primary/30 ${
							isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-gold/10 border-gold/20 hover:bg-gold/20"
						}`}
						aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
					>
						{theme === "dark" ? <FaSun className="text-primary text-lg" /> : <FaMoon className="text-primary text-lg" />}
					</button>
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
				<div className={`lg:hidden w-full border-t shadow-card ${isDark ? "bg-dark-elevated border-white/10" : "bg-white border-gold/15"}`}>
					<ul className="uppercase font-medium flex flex-col gap-1 py-4 px-4 max-w-md mx-auto">
						{navList.map((item) => (
							<li key={item.id}>
								<Link
									to={item.path}
									className={`${linkClass} text-center ${isActive(item.path) ? linkActive : isDark ? "text-normal/90 hover:text-primary" : "text-slate-700 hover:text-primary"}`}
									onClick={toggleMenu}
								>
									{item.name}
								</Link>
							</li>
						))}
						<li className={`pt-4 mt-2 border-t flex justify-center ${isDark ? "border-white/10" : "border-gold/15"}`}>
							<SocialIcons isDark={isDark} />
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
