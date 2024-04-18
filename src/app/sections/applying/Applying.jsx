'use client';
import React from 'react';
import ApplyBlock from '@/app/components/apply-block/ApplyBlock';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';


const Applying = () => {
	const { language, setLanguage } = useLanguage();
	const currentTranslations = translations[language];
	const data = [currentTranslations.apply.description[0], currentTranslations.apply.description[1], currentTranslations.apply.description[2], currentTranslations.apply.description[3], {...currentTranslations.apply.description[4], isLast: false}];
	
	return (
		<section id="contact" className="flex flex-col w-full px-5 py-10 gap-5 border-black border-b">
			<h3 className="text-center text-[39px] text-white">{currentTranslations.apply.title}</h3>
			<div className="flex flex-col md:flex-row gap-[24px] md:gap-[20px] md:justify-between flex-start w-full">
				{data.map ((item, index) => (
					<ApplyBlock
						key={index}
						title={item.title}
						description={item.description}
						isLast={item.isLast}
					/>
				))}
			</div>
		</section>
	);
};

export default Applying;
