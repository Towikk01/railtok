import { Fenix } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/header/Header';
import ParticlesBG from '@/app/components/particles/ParticlesBG';
import Footer from '@/app/components/footer/Footer';
import {LanguageProvider} from '@/app/LanguageContext';
import {favicon} from '../../public';
import ButtonWithModal from '@/app/components/button/Button';


const fenix = Fenix({ subsets: ['latin'], display: 'swap', weight: '400' });

export const metadata = {
	title: 'Railtok Recruitment',
	description: 'Робота у Польщі та країнах Західної Європи. Ми допоможемо підібрати саме ту вакансію яку ти потребуєш. Робота для чоловіків, жінок та сімейних пар. Не зволікай - пиши менеджеру. Ми маємо багатий вибір вакансій по всій території Польщі!',
	keywords: 'Recruitment, agency, work, abroad, Europe, Poland, Estonia, work, recruitment, job, houses, reviews, vacations, contact, about, features, reviews, vacancies, slider, card, button, particles, footer, header, scroll, smooth, particles, language, context, next, font, google',
	image: favicon,
};
export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{scrollBehavior:'smooth'}}>
			<body className={`${fenix.className} 'scroll-smooth`}>
				<LanguageProvider>
					<Header />
					<main className="pt-[60px] lg:pt-[85px]">
						<ButtonWithModal/>
						<ParticlesBG/>
						{children}
					</main>
					<Footer/>
				</LanguageProvider>
			</body>
		</html>
	);
}
