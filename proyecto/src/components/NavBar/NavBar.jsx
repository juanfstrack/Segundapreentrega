import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navBarContainer">
			<h3 className="navTitle">Shop</h3>
			<div className="navButtons">
				<button className=" navItems">Remeras</button>
				<button className=" navItems">Pantalones</button>
				<button className=" navItems">Camperas</button>
			</div>
		</nav>
	);
};
export default NavBar;
