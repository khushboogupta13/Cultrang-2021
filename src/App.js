import './App.css';
import Home from './pages/home/home';
import AboutUs from './pages/about-us/aboutUs';
import ContactUs from './pages/contactUs/contactUs';
import Register from './pages/register/register';
import { Switch, Route } from 'react-router-dom';
import Events from './pages/Events/Events';
import EventPage from './pages/Events/EventPage';
import ProEventPage from './pages/proEvents/pevent-page';
import RegistrationSuccess from './pages/registerSuccess/registerSuccess';
import GuardedRoute from './components/guardedRoute/guardedRoute';
import Proevents from './pages/proEvents/pro-events';
import Sponsor from './pages/sponsors/sponsor';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
	console.log(localStorage.getItem('auth'));
	const onLeave = (origin, destination, direction) => {
		console.log('Leaving section ' + origin.index);
	};
	const afterLoad = (origin, destination, direction) => {
		console.log('After load: ' + destination.index);
	};
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<ReactFullpage
						scrollOverflow={true}
						scrollBar={false}
						onLeave={onLeave}
						afterLoad={afterLoad}
						normalScrollElements='.content11'
						render={({ state, fullpageApi }) => {
							return (
								<div id='fullpage-wrapper'>
									<div className='section' id='home'>
										<Home className='home-page' fullpageApi={fullpageApi} />
									</div>
									<div className='section' id='about'>
										<AboutUs />
									</div>
									<div className='section' id='events'>
										<Events />
									</div>
									<div className='section' id='pro-events'>
										<Proevents />
									</div>
									<div className='section' id='sponsor'>
										<Sponsor />
									</div>
									<div className='section' id='contact'>
										<ContactUs />
									</div>
								</div>
							);
						}}
					/>
				</Route>
				<Route path='/event/:id'>
					<EventPage />
				</Route>
				<Route path='/pro-events/:id'>
					<ProEventPage />
				</Route>
				<Route path='/registeration/:id'>
					<Register />
				</Route>
				<GuardedRoute
					exact
					path='/registeration-success'
					component={RegistrationSuccess}
					auth={true}
				/>
			</Switch>
		</div>
	);
}
export default App;
