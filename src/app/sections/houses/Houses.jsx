'use client'
import React from 'react';
import Slider from "@/app/components/slider/Slider";
import {House1, House2, House3, House9, House6,House7,House8,House10,House12,House5,House11,House4} from "../../../../public";
import {useLanguage} from "@/app/LanguageContext";
import {translations} from "@/app/translations";

const images = [House1, House2, House3,House6, House9, House7,House8,House10,House12,House5,House11,House4]

const Houses = () => {
    const {language} = useLanguage()
    const currentTranslations = translations[language]
    return (
        <section id="houses" className="flex flex-col w-full gap-10 px-5 py-10 border-black border-b">
                <h4 className="text-center text-[39px] text-white">{currentTranslations.houses.title}</h4>
            <div className="w-full">
            <Slider images={images}/>
            </div>
        </section>
    );
};

export default Houses;
