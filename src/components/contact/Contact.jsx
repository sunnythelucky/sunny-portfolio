import React from "react";
import "./contact.css";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { BsEnvelope } from "react-icons/bs";
import { FaHatWizard } from "react-icons/fa";

const Contact = () => {
	const form = useRef();
	const [msg, setMsg] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_k21tg8s", "template_8aq38hi", form.current, "5SzJoWUkRHKf1tpY1");
		setMsg("Mensagem Enviada! Obrigado.");
		e.target.reset();
		// .then((result) => {
		//     console.log(result.text);
		// }, (error) => {
		//     console.log(error.text);
		// });
	};

	return (
		<section id="contact">
			<h5 className="text-light">Tell me about your projects or leave a comment!</h5>
			<h2 className="text-light">Contact</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<BsEnvelope className="contact__option-icon" />
						<h4>E-mail</h4>
						<h5>sunnyparkk@gmail.com</h5>
						<a href="mailto:sunnyparkk@gmail.com">Message</a>
					</article>
					<article className="contact__option">
						<FaHatWizard className="contact__option-icon" />
						<h4>Site</h4>
						<h5>Github</h5>
						<a href="https://www.github.com/sunnythelucky" target="_blank" rel="noopener noreferrer">
							See my projects
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your Name" required />
					<input type="email" name="email" placeholder="Your e-mail" required />
					<textarea name="message" rows="7" required placeholder="Write your message"></textarea>
					<button type="submit" className="btn btn-primary">
						Send
					</button>
					<span>{msg}</span>
				</form>
			</div>
		</section>
	);
};

export default Contact;
