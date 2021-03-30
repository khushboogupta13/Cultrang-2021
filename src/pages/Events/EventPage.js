import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './EventPage.css';
import events from './Data/Data';
import mobileBottom from './Event_vector/mobile-bottom.png';
import cloud1 from './Event_vector/cloud1.png';
import cloud2 from './Event_vector/cloud2.png';
import eventTopPng from './Events_PNG/events cloud.png';
import eventBottomPng from './Events_PNG/bottom.png';
import bigcardCorner from './Event_vector/bigcard_corner.png';
import smallCardCorner from './Event_vector/card_corner.png';

function EventPage() {
	const { id } = useParams();
	const event = events.find((e) => e.id === id);
	const mediaMatch = window.matchMedia('(max-width: 720px)');
	const [mobile, setMobile] = useState(mediaMatch.matches);
	useEffect(() => {
		const handler = (e) => setMobile(e.matches);
		mediaMatch.addListener(handler);
		return () => mediaMatch.removeListener(handler);
	});
	return (
		<div className='event'>
			<img src={eventTopPng} alt='wheel-cloud' className='event-vector-top' />
			<img
				src={cloud1}
				alt='cloud'
				className='mobileEventVector'
				style={{ top: '0px', left: '0px', width: '100vw' }}
			/>
			<img
				src={cloud2}
				alt='cloud'
				className='mobileEventVector'
				style={{ top: '0px', right: '0px', width: '100vw' }}
			/>
			<img
				src={mobileBottom}
				alt='cloud'
				className='mobileEventVector'
				style={{ bottom: '0px', width: '100vw' }}
			/>
			{!mobile && (
				<div className='event-info'>
					<Link to='/'>
						<i className='event-back fa fa-chevron-left'></i>
					</Link>
					<div className='event-poster'>
						<img src={bigcardCorner} alt='card' className='bigcard-corner' />
						<div className='posterClass'>
							<img
								src={event.poster}
								alt={event.eventNickName}
								className='posterImg'
							/>
						</div>
					</div>
					<div style={{ height: '100vh', width: '6vw' }}></div>
					<div className='event-register'>
						<p className='eventName'> {event.eventNickName.toUpperCase()}</p>
						<div className='event-details'>
							<div className='event-details-box'>
								<p className='eventDetailText'>{event.eventDetails}</p>
								<p className='eventDetailText'>
									Deadline for submission of entries: {event.deadline}
								</p>
								<p className='eventDetailText'>
									Powered by{' '}
									<a
										href='https://isb.alienbrains.in/2021?utm_source=Cultrang&utm_medium=website&utm_campaign=isb_cultrang'
										target='_blank'
										rel='noreferrer'
										style={{ color: '#1890ff' }}
									>
										India's Super Brain
									</a>
								</p>
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								width: '-webkit-fill-available',
							}}
						>
							<div className='register-button'>
								<Link to={`/registeration/${id}`}>
									<p className='register-text'>REGISTER</p>
								</Link>
							</div>
							<div className='register-button'>
								<a href='https://www.sociana.com/' target='_blank' rel='noreferrer'>
									<p className='register-text'>REGISTER WITH SOCIANA</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
			{mobile && (
				<div className='mobile-event-info'>
					<Link to='/'>
						<i className='event-back fa fa-chevron-left'></i>
					</Link>
					<div className='mobile-event-register'>
						<p
							style={{
								fontSize: '2em',
								color: 'white',
								fontWeight: 'bold',
								margin: '0px',
								textShadow: ' 4px 4px #000000',
							}}
						>
							{' '}
							{event.eventNickName.toUpperCase()}
						</p>
						<div className='mobile-event-poster'>
							<img src={smallCardCorner} alt='card' className='smallCard-corner' />
							<div className='mobile-posterClass'>
								<img
									src={event.poster}
									alt={event.eventNickName}
									className='mobile-posterImg'
									objectFit='cover'
								/>
							</div>
						</div>
						<div className='mobile-event-details'>
							<div className='mobile-event-details-content-box'>
								<p className='mobileEvent-details-text'>{event.eventDetails}</p>
								<p className='mobileEvent-deadline-text'>Deadline: {event.deadline}</p>
								<p className='eventDetailText'>
									Powered by{' '}
									<a
										href='https://isb.alienbrains.in/2021?utm_source=Cultrang&utm_medium=website&utm_campaign=isb_cultrang'
										target='_blank'
										rel='noreferrer'
										style={{ color: '#1890ff' }}
									>
										India's Super Brain
									</a>
								</p>
							</div>
						</div>
						<div className='register-button'>
							<Link to={`/registeration/${id}`}>
								<p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0px' }}>
									REGISTER
								</p>
							</Link>
						</div>
						<div className='register-button'>
								<a href='https://www.sociana.com/' target='_blank' rel='noreferrer'>
									<p className='register-text'>REGISTER WITH SOCIANA</p>
								</a>
						</div>
					</div>
				</div>
			)}
			<img
				src={eventBottomPng}
				alt='wheel-building'
				className='event-vector-bottom'
			/>
		</div>
	);
}

export default EventPage;
