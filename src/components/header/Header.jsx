import React from "react";
import Typical from "react-typical";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import SocialIcons from "../socialicons/SocialIcons";

export default function Header() {
	return (
		<header>
			<div className="container header__container">
				<h5 className="text-light">Hello, my name is </h5>
				<h1 className="text-light">Sunny Park</h1>
				<h3 className="mono text-light">
					<Typical
						loop={Infinity}
						steps={[
							"Traveller 🌐",
							1000,
							"Full Stack Dev. 💻",
							1000,
							"I care about desgin 🎨",
							1000,
							"Gamer 🎯",
							1000,
							"Love sports 🚴‍♂️",
							1000,
						]}
					/>
				</h3>
				<CTA />
				<SocialIcons position="header__socialicons" />
				<div className="me">
					<img src={ME} alt="Sunny Park" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll
				</a>
			</div>
		</header>
	);
}
