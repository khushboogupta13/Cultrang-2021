import React from 'react';
import { Divider } from 'antd';
import './sponsors.css';
import tossido from './logos/tossido.jpg';
import delta from './logos/delta.png';
import hoverRobotix from './logos/hoverrobotix.jpg';
import inCampus from './logos/incampus.jpg';
import inMovidu from './logos/inmovidu.jpg';
import isb from './logos/isb.png';
import mtechPost from './logos/mtechpost.png';
import nomobo from './logos/nomobo.jpg';
import skillIndia from './logos/skillindia.jpg';
import sociana from './logos/sociana.jpeg';
import sponsorBull from './logos/sponsor_bull.png';
import yi from './logos/yi.png';
import cloudVect from './sponsor_cloud.svg';
import cb from './logos/cb.png';
import nBard from './logos/nbard.png';

class Sponsor extends React.Component {
	render() {
		return (
			<div className='sponsor_main'>
				<img className='cloudVector' src={cloudVect} />
				<div className='box_01'>
					<div className='heading-container-sponsor'>
						<h1 className='heading'>SPONSORS</h1>
					</div>
					<div className='row2'>
						<a
							href='https://www.deltastore.in/'
							target='_blank'
							rel='noreferrer'
							id='t1'
							style={{ flex: '1 0 10vw' }}
						>
							<div className='card' style={{ marginTop: '6vw' }}>
								<div class='card-body'>
									<h5 class='card-title'>CO-SPONSOR</h5>
								</div>
								<img
									style={{ width: '10vw' }}
									src={delta}
									class='card-img-top'
									alt='...'
									id='spons-image'
								/>
							</div>
						</a>
						<a
							href='https://isb.alienbrains.in/2021?utm_source=Cultrang&utm_medium=website&utm_campaign=isb_cultrang'
							target='_blank'
							rel='noreferrer'
							id='t2'
							style={{ flex: '2 0 20vw' }}
						>
							<div className='card' id='test' style={{ marginTop: '-2vw' }}>
								<div class='card-body'>
									<h5 class='card-title'>TITLE SPONSOR</h5>
								</div>
								<img
									src={isb}
									class='card-img-top'
									alt='...'
									id='spons-image'
									style={{ width: '30vw', marginTop: '-7vw' }}
								/>
							</div>
						</a>
						<a href='#' id='t3' style={{ flex: '1 0 10vw' }}>
							<div className='card' style={{ marginTop: '5vw' }}>
								<div class='card-body'>
									<h5 class='card-title' style={{ paddingBottom: '0px !important' }}>
										SPONSORSHIP PARTNER
									</h5>
								</div>
								<img
									src={sponsorBull}
									class='card-img-top'
									alt='...'
									id='spons-image'
									style={{ width: '10vw' }}
								/>
							</div>
						</a>
					</div>
					<Divider id='divi-der' className='media_divider'>
						MEDIA SPONSORS
					</Divider>
					<div className='column3'>
						<div className='row41'>
							<a href='https://youthincmag.com/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={yi} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Youth Media Partner</h5>
									</div>
								</div>
							</a>

							<a href='https://www.noticebard.com/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={nBard} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Media Partner</h5>
									</div>
								</div>
							</a>

							<a href='https://incampus.in/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={inCampus} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Outreach Partner</h5>
									</div>
								</div>
							</a>
						</div>
					</div>
					<Divider id='divi-der'>OTHER SPONSORS</Divider>
					<div className='column4'>
						<div className='row41'>
							<a href='https://www.marktechpost.com/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={mtechPost} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Educational Partner</h5>
									</div>
								</div>
							</a>

							<a href='https://www.sociana.com/' target='_blank'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={sociana} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Registration Partner</h5>
									</div>
								</div>
							</a>

							<a href='https://www.inmovidutech.com/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={inMovidu} class='card-img-top' alt='...' />
									<div class='card-body' style={{ width: '30vw' }}>
										<h5 class='card-title'>
											Official Industrial Training & Live Project Partner
										</h5>
									</div>
								</div>
							</a>
						</div>
						<div className='row41'>
							<a href='https://nomobo.in/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={nomobo} alt='...' class='card-img-top' />
									<div>
										<h5 class='card-title'>Treasure Hunt Partner</h5>
									</div>
								</div>
							</a>
							<a href='http://www.hoverrobotix.com/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={hoverRobotix} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Tech Gadgets Partner</h5>
									</div>
								</div>
							</a>
							<a href='https://codingblocks.com/' target='_blank' rel='noreferrer'>
								<div
									className='card'
									style={{ width: '10vw', marginTop: '1vw' }}
									id='spons-image'
								>
									<img src={cb} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Coding Partner</h5>
									</div>
								</div>
							</a>
						</div>
						<div className='row41'>
							<a href='https://skillingindia.in/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={skillIndia} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>E-learning Partner</h5>
									</div>
								</div>
							</a>

							<a href='http://www.tossidoonline.in/' target='_blank' rel='noreferrer'>
								<div className='card' style={{ width: '10vw' }} id='spons-image'>
									<img src={tossido} class='card-img-top' alt='...' />
									<div class='card-body'>
										<h5 class='card-title'>Online Shopping Partner</h5>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div id='bottomVector'>
					<img
						id='bottomPng'
						src='https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_1920/v1617216453/CultRang%20imges/sponsor_bottom_muewnz.webp'
						style={{ width: '100vw' }}
					/>
				</div>
			</div>
		);
	}
}

export default Sponsor;
