'use client'
import React, { useState } from 'react'
import Image from "next/image";
import {Logo} from '../../../../public/index'
import Link from 'next/link'
import BurgerMenu from "@/app/components/header/BurgerMenu";
import {useLanguage} from "@/app/LanguageContext";
import {translations} from "@/app/translations";



const Header = () => {
    const { language, setLanguage } = useLanguage();
    const currentTranslations = translations[language]
    const [opened, setOpened] = useState(false)
    const toggleOpenedMenu = () => setOpened(!opened)


    const navigation = [
        {'title': currentTranslations.header.home, 'link': '/'},
        {'title': currentTranslations.header.about, link: '/#about'},
        {'title': currentTranslations.header.advantages, 'link': '/#features'},
        {'title': currentTranslations.header.reviews, 'link': '/#reviews'},
        {'title': currentTranslations.header.vacancies, 'link': '/#vacations'},
        {'title': currentTranslations.header.contacts, 'link': '/#footer'},
    ]

    return (
        <header className="flex flex-row justify-between py-3  z-20 fixed w-full bg-[#1b2244] items-center">
            <div
                className="flex flex-row items-center justify-center relative md:justify-between w-full max-w-[1000px] mx-auto px-5">
                <BurgerMenu opened={opened} toggle={toggleOpenedMenu} language={language}/>
                <Image src={Logo} alt="logo" width={120} height={120}/>
                <div className="hidden md:flex flex-row gap-8 justify-around items-center w-full px-5 lg:w-3/5">
                    {navigation.map ((item, index) => (
                        <Link key={index} href={item.link} className="whitespace-pre">
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex flex-row gap-2">
                    <button onClick={() => setLanguage ('uk')}>UA</button>
                    <button onClick={() => setLanguage ('en')}>EN</button>
                    <button onClick={() => setLanguage ('ru')}>RU</button>
                </div>
            </div>
        </header>
    )
}

export default Header
