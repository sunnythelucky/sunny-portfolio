import React from "react";
import "./footer.css";
import SocialIcons from "../socialicons/SocialIcons";

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				SUNNY PARK
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<SocialIcons position="footer__socialicons" />
			<div className="footer__copyright">
				<small>&copy; {new Date().getFullYear()} PARK. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
