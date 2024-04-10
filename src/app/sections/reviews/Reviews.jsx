'use client';
import React from 'react';
import ReviewCard from '@/app/components/review-card/ReviewCard';
import Button from '@/app/components/button/Button';
import ReviewSlider from '@/app/components/slider/reviewSlider';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';



const Reviews = () => {
	const {language} = useLanguage();
	const currentTranslations = translations[language];
	const reviewsData = [currentTranslations.review.reviews[0], currentTranslations.review.reviews[1], currentTranslations.review.reviews[2], currentTranslations.review.reviews[3], currentTranslations.review.reviews[4], currentTranslations.review.reviews[5]];

	return (
		<section id="reviews" className="flex flex-col md:flex-row w-full px-5  gap-10 py-10 border-black border-b">
			<div className="flex flex-col gap-2 sm:gap-5 w-full">
				<h4 className="sm:text-start text-center text-[50px] sm:text-[39px] text-white">{currentTranslations.review.title}</h4>
				<p className='text-[#ADD9E9] text-center sm:text-start text-[20px]'>
					{currentTranslations.review.description}
				</p>
			</div>
			<div className="w-full md:w-1/2">
				<ReviewSlider reviews={reviewsData}/>
			</div>
		</section>
	);
};

export default Reviews;
