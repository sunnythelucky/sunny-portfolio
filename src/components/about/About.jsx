import React from "react";
import "./about.css";
import Sunny from "../../assets/sunny-park.png";
import { GiNinjaHead } from "react-icons/gi";
import { GoOrganization } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";

const About = () => {
	return (
		<section id="about">
			<h5 className="text-light">About my work in projects of</h5>
			<h2 className="text-light">Technology, design and education</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Sunny} alt="André Tavares por Nathalia Millen" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<GiNinjaHead className="about__icon" />
							<h5>Experience</h5>
							<small>+4 years of experience</small>
						</article>
						<article className="about__card">
							<GoOrganization className="about__icon" />
							<h5>Clientes</h5>
							<small>Support and consultancy</small>
						</article>
						<article className="about__card">
							<RiTeamFill className="about__icon" />
							<h5>Projects</h5>
							<small>Partnerships and teams</small>
						</article>
					</div>
					<p>
						More than 4 years dedicated to projects in the areas of medical, construction, technology and professional
						development. I had the privilege of composing and leading teams in systems integration, application
						development, innovation and knowledge management projects. Total dedication to clients and projects, sharing
						knowledge in face-to-face and distance learning. Currently, I develop, customize and optimize websites with
						a focus on front-end, UX design, SEO and other digital marketing strategies.
					</p>
					<a href="#contact" className="btn btn-primary">
						Know more.
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
