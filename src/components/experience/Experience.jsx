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
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>React, Redux</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5 title="Vanilla, ES5, ES6, Jquery">JavaScript, TypeScript</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article
							className="experience__details"
							title="Woocommerce, LMS, Customizações, Elementor, Temas e Plugins"
						>
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>Node.js, Express</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>HTML5, CSS</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>
						<article className="experience__details" title="Bootstrap, Tailwind, SASS, Frameworks and Methods">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>RESTful APIs</h5>
							</div>
							<progress value="90" max="100"></progress>
						</article>

						<article className="experience__details" title="Node.js">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>GraphQL</h5>
							</div>
							<progress value="80" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" style={{ width: "2rem" }} />
								<h5>Frontend Javascript Frameworks - Next.js, Angular.js </h5>
							</div>
							<progress value="80" max="100"></progress>
						</article>
						<article className="experience__details">
							<div>
								<BsFillCheckCircleFill className="experience__details-icon" />
								<h5>Testing Libraries - Jest, Cypress</h5>
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
