'use client';
import React from 'react';
import Button from '../../components/button/Button';
import {useLanguage} from '../../LanguageContext';
import {translations} from '@/app/translations';

const Heading = () => {
	const {language} = useLanguage();
	const currentTranslations = translations[language];
	return (
		<section id="#heading" className="md:h-[670px]  w-full flex flex-col py-5 justify-center px-5 border-b border-black">
			<div className="flex flex-col justify-center self-center w-full md:w-3/4 items-center gap-10">
				<div className="flex flex-col justify-center items-center gap-5">
					<h1 className="md:text-[50px] leading-[50px] text-[40px] lg:text-[55px]  text-white font-bold  text-center">
						{currentTranslations.heading.title}
					</h1>
					<p className="text-[26px] text-white  leading-8 text-center">
						{currentTranslations.heading.description}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Heading;
