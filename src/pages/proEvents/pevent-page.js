import React from 'react';
import { useParams, Link } from 'react-router-dom';
import clouds from './peventsTop.svg';
import pevntsbottom from './peventsBottom.svg';
import mobilebottom from './mobile-bottom.webp';
import './pevent-page.css';

const Event = () => {
	const { id } = useParams();
	var titles = [
		'COMEDY NIGHT',
		'MELODIOUS AU REVOIR',
		'MUSIC WORKSHOP BY ADIL RASHID',
		'THEATER WORKSHOP BY PRADEEP BAJPAI',
		'HIP HOP WORKSHOP BY KUNAL SRIVASTAVA',
	];
	var title = titles[0];
	var ticket =
		'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,h_720,q_70/v1617216099/CultRang%20pro-events/standup_comedy_mag32i.webp';
	var discription =
		'Comedic performance in front of a live audience on an online platform, by the esteemed satirist, Appurv Gupta. A pro-event involving humorous instances, jokes, one-liners and much more, to entertain the crowd and tickle some funny bones.';
	if (id === 'melodiousAuRevoir') {
		title = titles[1];
		ticket =
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616941399/CultRang%20pro-events/Melodious_au_Revoir-min_nerd6r.webp';
		discription =
			'An evening filled with soulful melodies, dedicated to resonant musical performances by a virtuoso coupled with a live performance by a ‘pomedian’ which is sure to drive you nuts! Prepare yourselves to laugh and cry, all at the same time as you join us for this melodious au revoir!';
	} else if (id === 'musicWorkshop') {
		title = titles[2];
		ticket =
			'https://res.cloudinary.com/dmsa1uerl/image/upload/v1616941821/CultRang%20pro-events/Music_drbzki.jpg';
		discription =
			'Want to know the perfect chords which strike all your emotions? Join the Talk by Adil Rashid, the Lead Guitarist of Underground Authority on the 10th of April, 6 PM. The talk is open to all, so get ready with your Keys and Strings and log into our event, and learn how to express Vivid Forms of Music.';
	} else if (id === 'theaterWorkshop') {
		title = titles[3];
		ticket =
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616941398/CultRang%20pro-events/theatre_workshop-min_iw8gsd.webp';
		discription =
			'Want to be a superstar? Join our virtual workshop on 9th of April to learn and get some tips to boost your acting skills with Actor and Director, Mr Pradeep Bajpai. The webinar is open to all, so set up your acting faces and learn something new and fun. Register for Workshop here';
	} else if (id === 'hipHopWorkshop') {
		title = titles[4];
		ticket =
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616941399/CultRang%20pro-events/DanceWorkshop-min_e7froo.webp';
		discription =
			'Yearning to learn and have fun with street dance styles? Join our virtual workshop on 10th April to learn Hip Hop from Dancer and Choreographer, Kunal Srivastava. The workshop is open to all, so put on your dancing shoes and join other dancers like yourself to learn something new and fun. No prerequisites, because Anybody Can Dance!';
	}

	return (
		<div className='pro-event-container'>
			<Link to='/'>
				<i className='event-back fa fa-chevron-left'></i>
			</Link>
			<div className='event-context'>
				<div className='pevnt-top'>
					<img src={clouds} alt='clouds'></img>
				</div>

				<div className='pevent-tickets'>
					<div className='ticket-container'>
						<img className='pevent-poster' src={ticket} alt='ticet'></img>
					</div>

					<div className='pevent-register'>
						<div className='pevent-title'>{title}</div>
						<div className='detail-container'>{discription}</div>
						<div className='register-button'>
							<Link to={`/registeration/${id}`}>
								<p className='register-text'>REGISTER</p>
							</Link>
						</div>
					</div>
				</div>

				<div className='pevent-bottom'>
					<img src={pevntsbottom} alt='pevent-bottom'></img>
				</div>
				<div className='pevent-mobile'>
					<div className='pevent-tickets-m'>
						<div className='pevent-title' id='big-title'>
							{title}
						</div>
						<div className='ticket-container-outer'>
							<div className='ticket-container'>
								<img className='pevent-poster' src={ticket} alt='ticet'></img>
							</div>
						</div>

						<div className='details-m'>
							<div className='detail-container-m'>{discription}</div>
						</div>
						<div className='registre-btn-container'>
							<div className='register-button-m'>
								<Link to={`/registeration/${id}`}>
									<p className='register-text'>REGISTER</p>
								</Link>
							</div>
						</div>
					</div>
					<div className='pevnt-mobile-bottom'>
						<img src={mobilebottom} alt='pevent-bottm'></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
