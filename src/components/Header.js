import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="max-w-5xl mx-auto flex justify-between border-b pt-12 pb-6 font-poppins">
				<Link to="/" className="font-semibold text-lg">
					Blogo
				</Link>
				<nav>
					<ul className="flex gap-x-6">
						<li>
							<NavLink
								exact={true}
								to="/"
								className={(isActive) => (isActive ? "text-blue-500" : "")}
							>
								Strona główna
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/blog/"
								className={(isActive) => (isActive ? "text-blue-500" : "")}
							>
								Blog
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/kontakt/"
								className={(isActive) => (isActive ? "text-blue-500" : "")}
							>
								Kontakt
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
