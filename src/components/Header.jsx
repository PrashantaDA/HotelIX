import { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../constants/constant";
import SocialIcons from "./SocialIcons";

import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const [activeDropdown, setActiveDropdown] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMouseEnter = (itemId) => {
		setActiveDropdown(itemId);
	};

	const handleMouseLeave = () => {
		setActiveDropdown(null);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className=" bg-dark">
			<div className="xs:w-[90%] md:w-[85%] xl:w-4/5 mx-auto gap-x-8 flex justify-between px-2 py-4 items-center relative">
				<div>
					<h1 className="uppercase text-4xl font-semibold tracking-wider text-primary  ">
						<Link
							to="/"
							className="hover:text-normal transition-all"
						>
							HoteliX
						</Link>
					</h1>
				</div>

				{/* Nav list */}

				<ul className="uppercase text-normal gap-8 items-center text-md relative xs:hidden lg:flex ">
					{navList.map((item) => (
						<li
							className="hover:text-primary transition-all cursor-pointer relative header-dropdown"
							key={item.id}
							onMouseEnter={() => handleMouseEnter(item.id)}
							onMouseLeave={handleMouseLeave}
						>
							{item.subItems ? (
								<>
									<Link
										to="#"
										className="flex items-center gap-1 "
									>
										{item.name} <FaCaretDown />
									</Link>
									<div
										className={`header-dropdown-content ${activeDropdown === item.id ? "block" : "hidden"}`}
										onMouseEnter={() => handleMouseEnter(item.id)}
										onMouseLeave={handleMouseLeave}
									>
										{item.subItems.map((subItem) => (
											<Link
												className="block w-full text-dark hover:bg-gray-800 hover:text-primary p-2 rounded"
												to={subItem.path}
												key={subItem.id}
											>
												{subItem.name}
											</Link>
										))}
									</div>
								</>
							) : (
								<Link
									className="flex items-center gap-1"
									to={item.path}
								>
									{item.name}
								</Link>
							)}
						</li>
					))}
				</ul>
				<div className="hidden lg:flex">
					<SocialIcons />
				</div>

				{/* Mobile menu  */}
				<div className="xs:flex lg:hidden ">
					{menuOpen ? (
						<>
							<FaTimes
								className="text-primary text-3xl cursor-pointer hover:rotate-180 transition-all"
								onClick={toggleMenu}
							/>
						</>
					) : (
						<FaBars
							className="text-primary text-3xl cursor-pointer hover:rotate-180 transition-all"
							onClick={toggleMenu}
						/>
					)}
				</div>
			</div>
			{menuOpen && (
				<div className="xs:flex lg:hidden w-full bg-secondary absolute top-14 left-0 z-10 ">
					<ul className="uppercase font-[500] text-primary flex flex-col gap-8 py-6 items-center text-lg relative justify-center mx-auto">
						{navList.map((item) => (
							<li
								className="hover:text-normal transition-all cursor-pointer relative header-dropdown"
								key={item.id}
								onMouseEnter={() => handleMouseEnter(item.id)}
								onMouseLeave={handleMouseLeave}
								onClick={toggleMenu}
							>
								{item.subItems ? (
									<>
										<Link
											to="#"
											className="flex items-center gap-1"
										>
											{item.name} <FaCaretDown />
										</Link>
										<div
											className={`header-dropdown-content ${activeDropdown === item.id ? "show" : ""}`}
											onMouseEnter={() => handleMouseEnter(item.id)}
											onMouseLeave={handleMouseLeave}
										>
											{item.subItems.map((subItem) => (
												<Link
													className="block text-dark hover:bg-gray-800 hover:text-primary p-2 rounded"
													to={subItem.path}
													key={subItem.id}
												>
													{subItem.name}
												</Link>
											))}
										</div>
									</>
								) : (
									<Link
										className="flex items-center gap-1"
										to={item.path}
									>
										{item.name}
									</Link>
								)}
							</li>
						))}
						<SocialIcons />
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
