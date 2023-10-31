import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData = [
	{
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
		name: "Ester Okamoto - Co-worker",
		review:
			"Sunhui and I worked together on several projects, and I was lucky to call her my coworker. She consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed assignments on time. She had excellent time management skills and had a knack for keeping everyone calm and productive during intense crunch periods. She is a talented front-end developer with great experience in AWS .Any team would be lucky to have Sunhui. ",
	},
	{
		avatar: "https://randomuser.me/api/portraits/men/15.jpg",
		name: "Maurício costa - Manager",
		review:
			"Sunhui is an awesome and highly talented developer. I consider myself fortunate to have been able to work with Sunhui over the past year at Secret Location. She is a professional and dedicated programmer with a great work ethic and always gave 100% to our team. I would completely recommend Sunhui to anybody looking for an excellent Front-End developer!",
	},
	{
		avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
		name: "Brandon Wilker - Co-worker",
		review:
			"Sunhui is a very passionate and loves what she does. Seeing her motivated while we were working together also encouraged me to be like her. In my view, for her work means more than how others usually think about it. I am glad to have an opportunity to work with her. Hope she works on even more fantastic projects with future co-workers!",
	},
];

const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5 className="text-light">Co-worker Reviews</h5>
			<h2 className="text-light">Reviews</h2>
			<Swiper
				className="container testimonials__container"
				modules={[Pagination, Navigation]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{testimonialData.map(({ avatar, name, review }, idex) => {
					return (
						<SwiperSlide className="testimonial">
							<div className="client__avatar">
								<img src={avatar} alt={name} />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
