import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
	return (
		<section id="experience">
			<h5 className="text-light">Main Skills</h5>
			<h2 className="text-light">Experience in Projects</h2>
			<div className="container experience__container">
				<div className="experience__title-ti">
					<h3>Tech Skills</h3>
					<div className="experience__content">
						<article className="experience__details" title="Web Semântica, XML, Web Standards">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>HTML5</h5>
							</div>
							<progress value="90" max="100">
								90%
							</progress>
						</article>
						<article
							className="experience__details"
							title="Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias"
						>
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>CSS</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article className="experience__details" title="DOM, APIs, JSON">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5 title="Vanilla, ES5, ES6, Jquery">JavaScript</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>React</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article
							className="experience__details"
							title="Woocommerce, LMS, Customizações, Elementor, Temas e Plugins"
						>
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>Node.js</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article className="experience__details" title="Node.js">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>AWS</h5>
							</div>
							<progress value="70" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>Angular, View.js</h5>
							</div>
							<progress value="50" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>Jest, Mocha</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
