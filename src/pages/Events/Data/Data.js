import danceIcon from '../Event-SVG/dancer.svg';
import musicIcon from '../Event-SVG/music-note.svg';
import debateIcon from '../Event-SVG/debate.svg';
import videoEditingIcon from '../Event-SVG/video editing.svg';
import paintingIcon from '../Event-SVG/paint-palette.svg';
import sketchIcon from '../Event-SVG/sketch.svg';
import quizIcon from '../Event-SVG/quiz.svg';
import poetryIcon from '../Event-SVG/poetry.svg';
import photographyIcon from '../Event-SVG/camera.svg';
import treasureIcon from '../Event-SVG/treasure.svg';
import vocalIcon from '../Event-SVG/microphone.svg';
const events = [
	{
		id: 'dancetilldawn',
		eventName: 'SOLO DANCE',
		eventNickName: 'Dance Till Dawn ',
		eventDetails:
			'Dancing is so much more than just grooving on the dance floor to your favorite tunes. Dance is art in motion, it’s the embodiment of rhythm. If you’re someone who brings the fire to the dance floor, we have got the perfect event for you! Come along and dance to your own rhythm.',
		deadline: '7th April, 2021',
		icon: danceIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616938550/Cultrang%20posters/solo_dance_kr9dbq.webp',
	},
	{
		id: 'symphony',
		eventName: 'Solo Vocals',
		eventNickName: 'Symphony ',
		eventDetails:
			' If you’ve got the voice, we’ve got the mic! But it takes more than just a mic to create something beautiful. Here’s a competition to bring out your inner virtuoso, and perhaps blow the roof off the place.',
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616942621/Cultrang%20posters/Symphony_eaxcpg.webp',
		icon: vocalIcon,
		deadline: ' 7th April, 2021',
	},
	{
		id: 'harmony',
		eventName: 'Instrumental ',
		eventNickName: 'Harmony',
		eventDetails:
			' If you’re anything like us, you’ve probably tried to impersonate Beethoven or Slash a million times, and fantasised about being a rock star. While wearing retro outfits and growing your hair way too long isn’t what we expect, we wouldn’t mind a great solo!',
		deadline: ' 7th April, 2021',
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616938551/Cultrang%20posters/Harmony_zzur6s.webp',
		icon: musicIcon,
	},
	{
		id: 'debate',
		eventName: 'DEBATE',
		eventNickName: 'Debatocalypse',
		eventDetails:
			' There’s no point in having an opinion if you can’t voice it. Change only happens when the idea is backed by concrete arguments and is robust to counter claims. If you have a way of bringing conviction to your points, we have the perfect competition for you!',
		deadline: ' 7th April, 2021',
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,h_720,q_70,w_720/v1616938552/Cultrang%20posters/debate_poster_tmpqrj.webp',
		icon: debateIcon,
	},
	{
		id: 'filmwars',
		eventName: 'Video Editing',
		eventNickName: 'Filmwars',
		eventDetails:
			'  While great acting is required to make a good movie, the lack of proper editing can even make Captain America look like a clown. Besides, making things emerge from thin air is what makes someone the modern Picasso! Be there and make sure you clip it the right way!',
		deadline: ' 7th April, 2021',
		icon: videoEditingIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616938551/Cultrang%20posters/film_wars_ep7lkc.webp',
	},
	{
		id: 'brushhour',
		eventName: 'Painting',
		eventNickName: 'Brush Hour',
		eventDetails:
			'This is the perfect event for you, if you have a way of making things come alive with the stroke of a brush. Besides, who wants to live in a world without colours, so dark and gloomy? Vicente van Go paint it!',
		deadline: ' 7th April, 2021',
		icon: paintingIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_auto:eco,w_720/v1616942822/Cultrang%20posters/brushHour_tsdbcu.webp',
	},
	{
		id: 'etchasketch',
		eventName: 'SKETCHING',
		eventNickName: 'Etch-a-Sketch',
		eventDetails:
			'If you like to bring things to life by no brush but just pencils, and of course if you don’t mind getting a ton of graphite on your fingers, we’ve got you covered with our sketching event. Bring those pencils, show us the magic of that one stroke!',
		deadline: ' 7th April, 2021',
		icon: sketchIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616942719/Cultrang%20posters/etchASketch_m4hqra.webp',
	},
	{
		id: 'qb',
		eventName: 'QUIZZING ',
		eventNickName: 'Quizzaholic Bandits',
		eventDetails:
			'Get your antennae raised for we got you a chance to prove your genius. In the battle of wits involving familiarity and knowledge of various cultures across the world, with the added incentive of the tag of a trivia maestro, will you come out on top, or end up being trivial?',
		deadline: ' 7th April, 2021',
		icon: quizIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616938550/Cultrang%20posters/quiz_poster_buo4fb.webp',
	},
	{
		id: 'ikraar',
		eventName: 'POETRY  ',
		eventNickName: 'Ikraar',
		eventDetails:
			'  Years of evidence still might not be enough for a scientist. But for a poet, a momentary inspiration is all it takes! Showcase your inner Wordsworth, a pill that ink, let those words flow as we wait for your poetry to leave us spellbound.',
		icon: poetryIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616938551/Cultrang%20posters/ikraar_poster_ufxo7p.webp',
		deadline: ' 7th April, 2021',
	},
	{
		id: 'vividsnaps',
		eventName: ' Photography',
		eventNickName: 'Vivid Snaps',
		eventDetails:
			'In a world so full of wonderful spectacles and untamed beauty, Photography is about finding something interesting in an ordinary place. If the picture clicked by you can communicate a visual narrative, send a message, or simply be an indulgence for the serene admirers, come along and let the pictures tell us their story.',
		deadline: ' 7th April, 2021',
		icon: photographyIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/c_scale,q_70,w_720/v1616942718/Cultrang%20posters/vividSnaps_hyhumc.webp',
	},
	{
		id: 'thunt',
		eventName: 'Treasure Hunt',
		eventNickName: 'Treasure Hunt ',
		eventDetails:
			' Treasure Hunt takes you on a cryptic, interactive journey into the secret nooks and crannies and on an adventure like no other. The event is crammed with activities and puzzles that challenge your wits and require you to engage all your mental faculties in an intriguing environment, which means that all team members will have the opportunity to use their particular skills and, perhaps, emerge victorious as a team.',
		deadline: ' 7th April, 2021',
		icon: treasureIcon,
		poster:
			'https://res.cloudinary.com/dmsa1uerl/image/upload/v1616938550/Cultrang%20posters/treasure_hunt_ip3ozh.jpg',
	},
];
export default events;
