import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import Slider from 'react-slick';
import './contactUs.css';
import clouds from '../../components/vectors/contactUs/contact_us_cloud.svg';
import bottom from '../../components/vectors/contactUs/contact_us_bottom.svg';
import designHead from '../../components/vectors/contact_headings/design_head.png';
import studentAdvisor from '../../components/vectors/contact_headings/student_advisor.png';
import prHead from '../../components/vectors/contact_headings/pr_head.png';
import overallCoordinator from '../../components/vectors/contact_headings/overall_coordinator.png';
import ikraarHead from '../../components/vectors/contact_headings/ikraar_head.png';
import danceHead from '../../components/vectors/contact_headings/dance_head.png';
import contentHead from '../../components/vectors/contact_headings/content_head.png';
import debateHead from '../../components/vectors/contact_headings/debate_head.png';
import sketchHead from '../../components/vectors/contact_headings/sketch_head.png';
import filmHead from '../../components/vectors/contact_headings/editing_head.png';
import financeHead from '../../components/vectors/contact_headings/finance_head.png';
import harmonyHead from '../../components/vectors/contact_headings/harmony_head.png';
import quizHead from '../../components/vectors/contact_headings/quiz_head.png';
import sponsorshipHead from '../../components/vectors/contact_headings/sponsorship_head.png';
import photographyHead from '../../components/vectors/contact_headings/photography_head.png';
import artHead from '../../components/vectors/contact_headings/brush_head.png';
import managementHead from '../../components/vectors/contact_headings/management_head.png';
import treasureHead from '../../components/vectors/contact_headings/treasure_head.png';
import symphonyHead from '../../components/vectors/contact_headings/symphony_head.png';
import aastha from '../../components/vectors/boarding_passes/aastha.png';
import adwait from '../../components/vectors/boarding_passes/adwait.png';
import akshay from '../../components/vectors/boarding_passes/akshay.png';
import khushboo from '../../components/vectors/boarding_passes/khushboo.png';
import saksham from '../../components/vectors/boarding_passes/saksham.png';
import sejal from '../../components/vectors/boarding_passes/sejal.png';
import surya from '../../components/vectors/boarding_passes/surya.png';
import aadil from '../../components/vectors/boarding_passes/aadil.png';
import arpit from '../../components/vectors/boarding_passes/arpit.png';
import darshay from '../../components/vectors/boarding_passes/darshay.png';
import deep from '../../components/vectors/boarding_passes/deep.png';
import gunjan from '../../components/vectors/boarding_passes/gunjan.png';
import harshil from '../../components/vectors/boarding_passes/harshil.png';
import kartik from '../../components/vectors/boarding_passes/kartik.png';
import mansi from '../../components/vectors/boarding_passes/mansi.png';
import namami from '../../components/vectors/boarding_passes/namami.png';
import naveen from '../../components/vectors/boarding_passes/naveen.png';
import sanya from '../../components/vectors/boarding_passes/sanya.png';
import satvik from '../../components/vectors/boarding_passes/satvik.png';
import sourabh from '../../components/vectors/boarding_passes/sourabh.png';
import svara from '../../components/vectors/boarding_passes/svara.png';
import bottom_m from '../../components/vectors/mobile_passes/bottom_m.png';

const ContactUs = () => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
	};

	const event_settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
	};

	const mobile_settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const [card, setCard] = useState({
		ifcard: true,
		studentAdvCard: false,
		managementHead: false,
		prCarousel: false,
		prHead1: false,
		prHead2: false,
		sponsHead1: false,
		sponsHead2: false,
		sponsCarousel: false,
		financeHead: false,
		designHead: false,
		contentHead: false,
		danceHead: false,
		symphonyHead: false,
		harmonyHead: false,
		quizHead: false,
		debateHead: false,
		ikraarHead: false,
		brushHead: false,
		sketchHead: false,
		treasureHead: false,
		vividHead: false,
		filmwarsHead: false,
		eventHeads: false,
	});

	const [flipped, setFlipped] = useState(true);

	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 },
	});

	return (
		<div className='contactUs'>
			<img src={clouds} />
			<div className='container-1'>
				<div className='designation'>
					<span
						className='individualDesignation'
						style={{ opacity: card.ifcard ? '1' : '' }}
						onClick={() => {
							setCard({ ifcard: true });
						}}
					>
						{' '}
						Overall Coordinator
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.studentAdvCard ? '1' : '' }}
						onClick={() => {
							setCard({ studentAdvCard: true });
						}}
					>
						Student Advisor
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.managementHead ? '1' : '' }}
						onClick={() => {
							setCard({ managementHead: true });
						}}
					>
						Management Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.sponsCarousel ? '1' : '' }}
						onClick={() => {
							setCard({ sponsCarousel: true });
						}}
					>
						Sponsorship Coordinator
					</span>
				</div>
				<div className='box-2'>
					<div
						onClick={() => setFlipped((state) => !state)}
						style={{ display: card.designHead ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={designHead}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={khushboo}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((state) => !state)}
						style={{ display: card.studentAdvCard ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={studentAdvisor}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={harshil}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((flipped) => !flipped)}
						style={{ display: card.ifcard ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={overallCoordinator}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={saksham}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => setFlipped((flipped) => !flipped)}
						style={{ display: card.financeHead ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={financeHead}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={darshay}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div style={{ display: card.sponsCarousel ? 'block' : 'none' }}>
						<Slider {...settings} style={{ width: '40vw' }}>
							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.sponsHead1 ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={sponsorshipHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={aastha}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.sponsHead2 ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={sponsorshipHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={adwait}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>
						</Slider>
					</div>

					<div style={{ display: card.prCarousel ? 'block' : 'none' }}>
						<Slider {...settings} style={{ width: '40vw' }}>
							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.prHead1 ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={prHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={surya}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.prHead2 ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={prHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={sourabh}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>
						</Slider>
					</div>

					<div style={{ display: card.eventHeads ? 'block' : 'none' }}>
						<Slider {...event_settings} style={{ width: '40vw' }}>
							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.filmwarsHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={filmHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={arpit}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.vividHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={photographyHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={naveen}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.symphonyHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={symphonyHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={namami}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>
							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.treasureHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={treasureHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={svara}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.harmonyHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={harmonyHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={kartik}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.quizHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={quizHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={gunjan}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.ikraarHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={ikraarHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={akshay}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.danceHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={danceHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={sejal}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.brushHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={artHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={satvik}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>

							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.sketchHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={sketchHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={deep}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>
							<div
								onClick={() => setFlipped((flipped) => !flipped)}
								style={{ display: card.debateHead ? '' : 'none' }}
							>
								<a.img
									className='sliderClass back'
									src={debateHead}
									style={{
										opacity: opacity.interpolate((o) => 1 - o),
										transform,
									}}
								/>
								<a.img
									className='sliderClass front'
									src={mansi}
									style={{
										opacity,
										transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
									}}
								/>
							</div>
						</Slider>
					</div>

					<div
						onClick={() => setFlipped((state) => !state)}
						style={{ display: card.contentHead ? '' : 'none' }}
					>
						<a.img
							className='c back'
							src={contentHead}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={sanya}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>

					<div
						onClick={() => {
							setFlipped((state) => !state);
						}}
						style={{ display: card.managementHead ? 'block' : 'none' }}
					>
						<a.img
							className='c back'
							src={managementHead}
							style={{
								opacity: opacity.interpolate((o) => 1 - o),
								transform,
							}}
						/>
						<a.img
							className='c front'
							src={aadil}
							style={{
								opacity,
								transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
							}}
						/>
					</div>
				</div>
				<div className='box-3'>
					<span
						className='individualDesignation'
						style={{ opacity: card.prCarousel ? '1' : '' }}
						onClick={() => {
							setCard({ prCarousel: true });
						}}
					>
						Public Relations Coordinator
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.designHead ? '1' : '' }}
						onClick={() => {
							setCard({ designHead: true });
						}}
					>
						Design Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.financeHead ? '1' : '' }}
						onClick={() => {
							setCard({ financeHead: true });
						}}
					>
						Finance Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.contentHead ? '1' : '' }}
						onClick={() => {
							setCard({ contentHead: true });
						}}
					>
						Social Media and Content Head
					</span>
					<span
						className='individualDesignation'
						style={{ opacity: card.eventHeads ? '1' : '' }}
						onClick={() => {
							setCard({ eventHeads: true });
						}}
					>
						Event Heads
					</span>
				</div>
			</div>

			<div className='container-2'>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>CONTACT US</span>
				</div>
				<div
					className='overallCoordinator'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Overall Coordinator</span>
					<img
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/saksham_m_4x_sumuu2.webp'
						style={{ width: '60vw', height: '90vw' }}
					/>
				</div>
				<div
					className='studentAdvisor'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Student Advisor</span>
					<img
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/harshil_m_4x_fjy7il.webp'
						style={{ width: '60vw', height: '90vw' }}
					/>
				</div>
				<div
					className='managementHead'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Management Head</span>
					<img
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271039/Contact%20us/moibile/aadil_m_4x_fb5zvi.webp'
						style={{ width: '60vw', height: '90vw' }}
					/>
				</div>

				<div
					className='sponsorshipHead'
					style={{
						margin: '1rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<span className='heading-mobile'>Sponsorship Coordinator</span>
					<div className='sl-div'>
						<Slider {...mobile_settings}>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271039/Contact%20us/moibile/aastha_m_4x_b0tzti.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271039/Contact%20us/moibile/adwait_m_4x_r94rt3.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
						</Slider>
					</div>
				</div>

				<div
					className='PRHead'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Public Relations Coordinator</span>
					<div className='sl-div'>
						<Slider {...mobile_settings}>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271041/Contact%20us/moibile/surya_m_4x_ukgxmx.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271041/Contact%20us/moibile/sourabh_m_4x_poln9f.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
						</Slider>
					</div>
				</div>

				<div
					className='designHead'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Design Head</span>
					<img
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/khushboo_m_4x_yrfrrr.webp'
						style={{ width: '60vw', height: '90vw' }}
					/>
				</div>

				<div
					className='financeHead'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Finance Head</span>
					<img
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271039/Contact%20us/moibile/darshay_m_4x_baiuqm.webp'
						style={{ width: '60vw', height: '90vw' }}
					/>
				</div>

				<div
					className='contentHead'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Social Media & Content Head</span>
					<img
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271041/Contact%20us/moibile/sanya_m_4x_ey8ije.webp'
						style={{ width: '60vw', height: '90vw' }}
					/>
				</div>

				<div
					className='eventHeads'
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: '1rem',
					}}
				>
					<span className='heading-mobile'>Event Heads</span>
					<div className='sl-div'>
						<Slider {...mobile_settings}>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271039/Contact%20us/moibile/arpit_m_4x_rtggas.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/naveen_m_4x_viy5ao.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/namami_m_4x_xdjems.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/kartik_m_4x_qnktij.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271039/Contact%20us/moibile/akshay_m_4x_klpp4p.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/gunjan_m_4x_qe7xzt.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271041/Contact%20us/moibile/sejal_m_4x_yhhg22.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271041/Contact%20us/moibile/satvik_m_4x_qrk1dd.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/deep_m_4x_q49eim.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_300/v1617271040/Contact%20us/moibile/mansi_m_4x_o1p0um.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
							<div>
								<img
									src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_240/v1617271041/Contact%20us/moibile/svara_m_4x_rm4pxq.webp'
									style={{ width: '60vw', height: '90vw', marginLeft: '1.6rem' }}
								/>
							</div>
						</Slider>
					</div>
				</div>
			</div>
			<img src={bottom} className='bottomImage' />
			<img src={bottom_m} className='bottomMobile' />
		</div>
	);
};

export default ContactUs;
