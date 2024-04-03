'use client'
import React from 'react';
import VacationCard from "@/app/components/vacation-card/VacationCard";
import {Flowers, Florist, Fermer, TV, Fly, Auto, Food} from "../../../../public";
import {useLanguage} from "@/app/LanguageContext";
import {translations} from "@/app/translations";
import VacationsSlider from "@/app/components/vacationsSlider/VacationsSlider";



const Vacations = () => {
    const {language} = useLanguage();
    const currentTranslations = translations[language]
    const jobsData = [{...currentTranslations.vacancies.cards[2], id: 3, backgroundImage: TV},{...currentTranslations.vacancies.cards[0], id: 1, backgroundImage: Florist},{...currentTranslations.vacancies.cards[1], id: 2, backgroundImage: Fermer},{...currentTranslations.vacancies.cards[3], id: 4, backgroundImage: Fly},{...currentTranslations.vacancies.cards[4], id: 5, backgroundImage: Auto},{...currentTranslations.vacancies.cards[5], id: 6, backgroundImage: Food}]


    return (
        <section id="vacations" className="flex flex-col w-full px-5 py-12">
            <h2 className="font-normal text-white whitespace-normal md:whitespace-pre text-[48px] text-center mb-8">{currentTranslations.vacancies.title}</h2>
            <div className="w-full">
                    <VacationsSlider vacation={jobsData}/>
            </div>
        </section>
    );
};

export default Vacations;
