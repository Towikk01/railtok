'use client'
import React from 'react';
import VacationCard from "@/app/components/vacation-card/VacationCard";
import {Flowers, Florist, Fermer, TV} from "../../../../public";
import {useLanguage} from "@/app/LanguageContext";
import {translations} from "@/app/translations";



const Vacations = () => {
    const {language} = useLanguage();
    const currentTranslations = translations[language]
    const jobsData = [{...currentTranslations.vacancies.cards[2], id: 3, backgroundImage: TV},{...currentTranslations.vacancies.cards[0], id: 1, backgroundImage: Florist},{...currentTranslations.vacancies.cards[1], id: 2, backgroundImage: Fermer}]


    return (
        <section id="vacations" className="flex flex-col w-full px-5 py-12">
            <h2 className="font-normal text-white whitespace-normal md:whitespace-pre text-[48px] text-center mb-8">{currentTranslations.vacancies.title}</h2>
            <div className="grid grid-cols-1 h-full w-full sm:grid-cols-3 gap-4">
                {jobsData.map((job) => (
                    <VacationCard
                        key={job.id}
                        title={job.title}
                        sellary={job.sellary}
                        description={job.description}
                        schedule={job.schedule}
                        accomodation={job.accomodation}
                        requirements={job.requirements}
                        food={job.food}
                        country={job.country}
                        location={job.location}
                        text={job.text}
                        backgroundImage={job.backgroundImage}
                    />
                ))}
            </div>
        </section>
    );
};

export default Vacations;
