import React from "react";
import "./services.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Services = () => {
	return (
		<section id="services">
			<h5 className="text-light">How can I help you</h5>
			<h2 className="text-light">Services</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Web development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>Development and Hosting</p>
						</li>
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>React | Angular | Redux</p>
						</li>
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>Corporate E-mail</p>
						</li>
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>Migrations (no ranking loss)</p>
						</li>
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>Automations, Optimizations and Performance</p>
						</li>
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>Customizations and Integrations</p>
						</li>
						<li>
							<BsFillCheckCircleFill className="service__list-icon" />
							<p>Custom Design Library</p>
						</li>
					</ul>
				</article>
			</div>
			<div>
				{/* <a href="https://cloudez.io/br?utm_campaign=partner-atavares-seoxperts-badge&autm_medium=badge&utm_source=partner&utm_content=partner&utm_term=">
        <img alt="" width="220" height="60" src="https://files.cloudez.io/stamp/partner-sm.svg">
      </a> */}
			</div>
		</section>
	);
};

export default Services;
