'use client';
import React from 'react';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';
import ApplyBlock from '@/app/components/apply-block/ApplyBlock';
import Image from 'next/image';
import {HeadingImage} from '../../../../public';


const AboutSection = () => {
	const { language, setLanguage } = useLanguage();
	const currentTranslations = translations[language];
	const data = [{item: currentTranslations.about.p1}, {item:currentTranslations.about.p2}, {item:currentTranslations.about.p3}, {item:currentTranslations.about.p4, isLast: true}];
	return (
		<section id="about" className="flex md:flex-row w-full px-5 py-10 border-black border-b">
			<div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
				<div className="text-white md:w-2/4 w-full flex flex-col gap-5 items-center md:items-start">
					<h4 className="text-[50px] relative text-center md:after:hidden text-white after:absolute w-fit after:w-full md:after:w-3/4 after:h-0.5 after:bg-black after:content-[''] after:-bottom-0 after:left-0">{currentTranslations.about.title}</h4>
					{data.map((item, index) => (
						<ApplyBlock key={index} description={item.item} isLast={item.isLast} className="text-[20px] text-white leading-8 text-center"/>
					))}
				</div>
				<div className="flex flex-col md:gap-2 items-center">
					<div className="w-full flex justify-center">
						<Image src={HeadingImage} alt="smthn" width={600} height={800}/>
					</div>
					<h4 className={'gradient text-[#ADD9E9] text-center text-[40px]'}>Railtok Recruitment</h4>
				</div>
			</div>
		</section>
	)
		;
};

export default AboutSection;
