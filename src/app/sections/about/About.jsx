'use client'
import React from 'react';
import Image from "next/image";
import {HeadingImage} from "../../../../public";
import {motion} from "framer-motion";
import {useLanguage} from "@/app/LanguageContext";
import {translations} from "@/app/translations";

const AboutSection = () => {
    const { language, setLanguage } = useLanguage();
    const currentTranslations = translations[language]
    return (
        <section id="about" className="flex md:flex-row w-full px-5 py-10 border-black border-b">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-0">
                <div className="text-[#ADD9E9] md:w-2/4 w-full flex flex-col gap-5">
                    <h4 className="text-[50px] relative text-white after:absolute w-fit after:w-3/4 after:h-0.5 after:bg-black after:content-[''] after:-bottom-0 after:left-0">{currentTranslations.about.title}</h4>
                    <p className="text-[24px] leading-8 font-[500]">
                        {currentTranslations.about.description}
                    </p>
                    <p className="text-[24px]">
                        {currentTranslations.about.p1}
                    </p>
                    <p className="text-[20px]">
                        {currentTranslations.about.p2}
                    </p>
                    <p className="text-[20px]">
                        {currentTranslations.about.p3}
                    </p>
                </div>
                <div className="flex flex-col items-center">
                <motion.div className="w-full flex flex-col justify-center"
                            initial={{scale : 1}} // Start at normal size
                            animate={{
                                scale : [1, 1.15, 1], // Pulse from normal size to slightly larger and back
                            }}
                            transition={{
                                duration : 1.5, // Duration of each pulse
                                ease : "linear", // Use a linear easing for consistent pulse speed
                                repeat : Infinity, // Repeat the animation indefinitely
                                repeatType : "loop" // Ensure the animation loops
                            }}
                >
                    <Image src={HeadingImage} alt="smthn" width={400} height={400}
                           className="rounded-[50%] h-[335px] lg:h-[400px] object-cover"/>
                    <h4 className="text-[#ADD9E9] text-center text-[40px]">Railtok Recruitment</h4>
                </motion.div>
                </div>
            </div>
        </section>
    )
        ;
};

export default AboutSection;
