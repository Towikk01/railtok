'use client';
import React from 'react';
import Button from '../../components/button/Button';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';

const Contact = () => {
	const { language, setLanguage } = useLanguage();
	const currentTranslations = translations[language];
	return (
		<section id="contact" className="flex flex-col w-full px-5 py-10 border-black border-b">
			<div className="flex flex-col gap-5 items-center">
				<h4 className="text-[50px] text-white w-fit text-center">{currentTranslations.contacts.title}</h4>
			</div>
		</section>
	);
};

export default Contact;
