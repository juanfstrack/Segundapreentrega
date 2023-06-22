import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from " react-router-dom";

const NavBar = () => {
	return (
		<nav className="navBarContainer">
			<Link to="/">
				<h3>Shop</h3>
			</Link>
			<div className="navButtons">
				<NavLink
					to={`/category/remera`}
					className={({ isActive }) =>
						isActive ? "ActiveOption" : "Option"
					}
				>
					{" "}
					remera
				</NavLink>
				<NavLink
					to={`/category/remerón`}
					className={({ isActive }) =>
						isActive ? "ActiveOption" : "Option"
					}
				>
					remerón
				</NavLink>
				<NavLink
					to={`/category/remeraCh`}
					className={({ isActive }) =>
						isActive ? "ActiveOption" : "Option"
					}
				>
					remeraCh
				</NavLink>
			</div>
			<CartWidget />
		</nav>
	);
};
export default NavBar;
