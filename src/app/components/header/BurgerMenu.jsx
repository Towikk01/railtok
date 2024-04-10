import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import {FaFacebook, FaInstagram, FaPhoneAlt} from 'react-icons/fa';
import {MailIcon, PhoneIcon} from '@heroicons/react/outline';
import React from 'react';


import Button from '@/app/components/button/Button';
import ButtonWithModal from '@/app/components/button/Button';
import {translations} from '@/app/translations';
const MobMenu = ({ opened, toggle, language }) => {
	const currentTranslations = translations[language];
	const navigation = [
		{'title': currentTranslations.header.home, 'link': '/'},
		{'title': currentTranslations.header.about, link: '/#about'},
		{'title': currentTranslations.header.advantages, 'link': '/#features'},
		{'title': currentTranslations.header.reviews, 'link': '/#reviews'},
		{'title': currentTranslations.header.vacancies, 'link': '/#vacations'},
		{'title': currentTranslations.header.contacts, 'link': '/#footer'},
	];

	return (
		<div
			className={`h-full w-screen flex md:hidden flex-col mx-auto mt-[95px] items-center  text-black absolute z-20 transition-transform duration-200 bg-transparent ${opened ? '-translate-x-0' : '-translate-x-[110%]'}`}
		>
			<nav className="bg-[#1b2244] list-none flex flex-col gap-2 z-20 items-center w-full justify-center">
				<li>
					<a href="mailto:railtokrecruitment.info@gmail.com" className="text-white"><MailIcon className="inline-block text-white h-5 w-5 mr-2"/>railtokrecruitment.info@gmail.com</a>
				</li>
				<li>
					<a href="tel:+48734701011" className="text-white"><PhoneIcon className="inline-block text-white h-5 w-5 mr-2"/>+48-734-701-011</a>
				</li>
				<li>
					<a href="https://www.facebook.com/Railtokrecrutment" target="_blank" rel="noopener noreferrer"
						className="text-blue-500"><FaFacebook className="inline-block h-5 w-5 mr-2"/>Facebook</a>
				</li>
				<li>
					<a href="https://www.instagram.com/railtokrecrutment" target="_blank" rel="noopener noreferrer"
						className="text-pink-500"><FaInstagram className="inline-block h-5 w-5 mr-2"/>Instagram</a>
				</li>
			</nav>
			<div className="bg-[#1b2244] w-full py-3 self-center flex flex-col gap-1 items-center">
				{navigation.map((item, index) => (
					<Link key={index}  href={item.link} className="whitespace-pre text-white text-[17px]">
						{item.title}
					</Link>
				))}
			</div>
		</div>
	);
};

const BurgerMenu = ({opened, toggle, language}) => {
	return (
		<>
			<button className="w-fit pl-3 md:hidden" onClick={toggle}>
				{opened ? (
					<IoMdClose className="w-9 h-9 md:hidden text-white"/>
				) : (
					<IoIosMenu className="w-9 h-9 md:hidden text-white"/>
				)}
			</button>
			<MobMenu opened={opened} toggle={toggle} language={language}/>
		</>
	);
};

export default BurgerMenu;
