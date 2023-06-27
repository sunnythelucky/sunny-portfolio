import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

// import './socialicons.css'
const SocialIcons = (props) => {
	return (
		<div className={props.position}>
			<a href="https://www.linkedin.com/in/sunnythelucky/" target="_blank" rel="noopener noreferrer">
				<BsLinkedin />
			</a>
			<a href="https://twitter.com/sunnythelucky_" target="_blank" rel="noopener noreferrer">
				<BsTwitter />
			</a>
			<a href="https://github.com/sunnythelucky" target="_blank" rel="noopener noreferrer">
				<BsGithub />
			</a>
		</div>
	);
};

export default SocialIcons;
