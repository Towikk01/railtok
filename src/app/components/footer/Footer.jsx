'use client';
import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import {FaFacebook, FaInstagram, FaViber} from 'react-icons/fa';
import Button from '@/app/components/button/Button';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';


const Footer = () => {
	const {language} = useLanguage();
	const currentTranslations = translations[language];
	return (
		<footer id="footer" className="bg-[#1b2244] text-white w-full p-4">
			<div className="flex flex-row justify-between max-w-[1000px] mx-auto items-start">
				<div className="container mx-auto flex flex-col sm:flex-row md:flex-row justify-between gap-3 items-center">
					<div className="mb-4 md:mb-0">
						<h5 className="font-bold text-lg mb-2">{currentTranslations.footer.title}</h5>
						<ul className="flex flex-col gap-2">
							<li><a className="flex flex-row items-center gap-1 underline" href="https://invite.viber.com/?g2=AQAT6jtHEk%2BJz1FrBRnUQ5uNv1JQ0PkpoFBzqBG5a%2Bz9hY5pK5IUkglH62JOTo0b&lang=ru" target="_blank" rel="noopener noreferrer"><FaViber/>{currentTranslations.footer.link1} </a></li>
							<li><a className="flex flex-row items-center gap-1 underline" href="https://invite.viber.com/?g2=AQAinpYsOGZ0nFH3XCEXg%2FBmfRNwSzJOXSG6CEbE67g%2Bm89pPZnXNxjgAA2YRs4A&lang=ru" target="_blank" rel="noopener noreferrer"><FaViber/>{currentTranslations.footer.link2}</a></li>
							<li><a className="flex flex-row items-center gap-1 underline" href="https://invite.viber.com/?g2=AQAA8ff6%2FE8w8lJsrWlVH%2FA9n4MyCU5%2BvKTK7JJrOLpncNPr7P8cE0pGVP97RGYe&lang=ru" target="_blank" rel="noopener noreferrer"><FaViber/>{currentTranslations.footer.link3}</a></li>
						</ul>

					</div>
					<div className="flex flex-col gap-2 sm:self-start">
						<a href="mailto:railtokrecruitment.info@gmail.com"><MailIcon className="inline-block text-white h-5 w-5 mr-2"/>railtokrecruitment.info@gmail.com</a>
						<a href="tel:+48734701011"><PhoneIcon className="inline-block text-white h-5 w-5 mr-2"/>+48-734-701-011</a>
						<a href="https://www.facebook.com/Railtokrecrutment" target="_blank" rel="noopener noreferrer"
							className="text-blue-500"><FaFacebook className="inline-block h-5 w-5 mr-2"/>Facebook</a>
						<a href="https://www.instagram.com/railtokrecrutment" target="_blank" rel="noopener noreferrer"
							className="text-pink-500"><FaInstagram className="inline-block h-5 w-5 mr-2"/>Instagram</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
