import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<a href="/" className="navbar-brand">
					ASSIGNMENT
				</a>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={'/home'} className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to={'/contactUs'} className="nav-link">
							Contact Us
						</Link>
					</li>
				</div>
			</nav>
		</div>
	);
};

export default Header;
