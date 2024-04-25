import { Fenix } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/header/Header';
import ParticlesBG from '@/app/components/particles/ParticlesBG';
import Footer from '@/app/components/footer/Footer';
import {LanguageProvider} from '@/app/LanguageContext';
import {favicon} from '../../public';
import ButtonWithModal from '@/app/components/button/Button';
import Script from 'next/script';


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
			<Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={ {
				__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
\t\t\tnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
\t\t\tj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
\t\t\t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
\t\t})(window,document,'script','dataLayer','GTM-P5BPT4DJ');`
			}}>
			</Script>
			<Script
				id="fb-pixel"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3809540382611782');
fbq('track', 'PageView');
`,
				}}
			/>
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
