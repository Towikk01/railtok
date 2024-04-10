'use client';
import React from 'react';
import FeatureCard from '@/app/components/feature-card/FeatureCard';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';




const Features = () => {
	const { language, setLanguage } = useLanguage();
	const currentTranslations = translations[language];


	const datablocks =[currentTranslations.features[0], currentTranslations.features[1], currentTranslations.features[2]];

	return (
		<section id="features" className="flex flex-col w-full px-5 py-10 border-black border-b">
			<div className="flex flex-col items-center gap-10">
				<h4 className="text-[50px] text-white leading-10 relative before:absolute before:top-1/2 md:before:w-1/5 before:h-0.5 before:bg-black md:before:content-[''] before:-left-[25%] after:absolute w-fit after:top-1/2 md:after:w-1/5 after:h-0.5 after:bg-black md:after:content-[''] after:-right-[25%] text-center">{currentTranslations.features.title}</h4>
				<ul className="flex flex-col md:flex-row justify-between w-full gap-5 items-center">
					{datablocks.map((block, index) => (
						<li className="marker:text-blue-400" key={index}>
							<FeatureCard description={block}/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Features;
