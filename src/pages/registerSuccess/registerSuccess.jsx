import React, { useEffect, useState } from 'react';
import './registerSuccess.css';
import { Link } from 'react-router-dom';
import Top from './SVG/register cloud.svg';
import Bottom from './SVG/register bottom.svg';

function RegistrationSuccess() {
	const calculateTimeLeft = () => {
		var countDownDate = new Date('April 9, 2021 00:00:00').getTime();
		var now = new Date().getTime();

		const difference = countDownDate - now;
		let timeLeft = {};
		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
			return timeLeft;
		}
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearTimeout(timer);
	});

	return (
		<div className='register-container' style={{ heigth: '100vh' }}>
			<div className='clouds'>
				<img src={Top} alt='clouds' />
			</div>
			<Link to='/'>
				<i className='event-back fa fa-chevron-left'></i>
			</Link>
			<div className='divdiv'>
				<div>
					<p className='heading1'>Registration SuccessFul!</p>
				</div>
				<div className='timer-div'>
					<h4 className='timer-div-title'>COMING SOON</h4>
					<div className='time-div'>
						<div className='cc-div'>
							<div className='circle-div' id='days'>
								<p>{timeLeft.days}</p>
							</div>
							<h5>Days</h5>
						</div>
						<div className='cc-div'>
							<div className='circle-div' id='hours'>
								<p>{timeLeft.hours}</p>
							</div>
							<h5>Hours</h5>
						</div>
						<div className='cc-div'>
							<div className='circle-div' id='minutes'>
								<p>{timeLeft.minutes}</p>
							</div>
							<h5>Minutes</h5>
						</div>
						<div className='cc-div'>
							<div className='circle-div' id='seconds'>
								<p>{timeLeft.seconds}</p>
							</div>
							<h5>Seconds</h5>
						</div>
					</div>
				</div>
				<div>
					<p className='inst-text'>
						You've successfully registered for CultRang 2021! A mail has been send to
						you that contains the further instructions.
					</p>
				</div>
			</div>
			<div className='heading-container-reg'>
				<h1 className='headingReg'>REGISTER</h1>
			</div>
			<div className='bbuilding'>
				<img src={Bottom} alt='bottom' />
			</div>
		</div>
	);
}

export default RegistrationSuccess;
