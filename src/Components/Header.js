import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
				<header>
					<Link to="/">JCDEVS</Link>
					<Link to="/About">About</Link>
					<Link to="/Project">Project</Link>
					<Link to="/Contact">Contact</Link>
				</header>
		</div>
	)
}

export default Header;