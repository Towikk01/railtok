import Image from 'next/image';
import Heading from '@/app/sections/heading/Heading';
import About from '@/app/sections/about/About';
import Features from '@/app/sections/features/Features';
import Contact from '@/app/sections/contact/Contact';
import Houses from '@/app/sections/houses/Houses';
import Reviews from '@/app/sections/reviews/Reviews';
import Vacations from '@/app/sections/vacations/Vacations';
import Applying from '@/app/sections/applying/Applying';

export default function Home() {
	return (
		<>
			<Heading/>
			<About/>
			<Features/>
			<Contact/>
			<Applying/>
			<Houses/>
			<Reviews/>
			<Vacations/>
		</>
	);
}
