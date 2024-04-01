'use client'

import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaViber, FaTelegramPlane } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io'
import {useLanguage} from "@/app/LanguageContext";
import {translations} from "@/app/translations";




const Modal = ({ onClose, children }) => {
    const modalRef = useRef();

    const handleCloseClick = (e) => {
        if (!modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleCloseClick);
        return () => {
            document.removeEventListener('click', handleCloseClick);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <div ref={modalRef} className="bg-opacity-90 border border-black rounded-[16px] px-6 py-4 bg-black bg-opacity-70 z-50 max-w-full w-[90%] md:w-auto">
                {children}
            </div>
        </div>
    );
};

const Button = ({text, onClick}) => {
    return (
        <button
            className="text-[#f4f3ed] w-fit text-xl bg-[#4fcced] hover:bg-[#86d9ed] hover:text-black transition-all duration-300 rounded-[20px] px-5 py-3.5"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

const ButtonWithModal = () => {
    const { language } = useLanguage();
    const currentTranslations = translations[language]
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <Button text={currentTranslations.button} onClick={openModal} />
            {isModalOpen && <Modal onClose={closeModal}>
                <button className="self-end" onClick={closeModal}>
                    <IoMdClose className="text-white text-3xl"/>
                </button>
                <div className="flex items-center md:gap-5 justify-around rounded-lg">
                    <a href="viber://contact?number=%2B48734701011" className="flex md:hidden flex-col items-center">
                        <FaViber className="text-purple-600 text-6xl"/>
                        <span className="mt-2 text-sm text-white font-semibold">Viber</span>
                    </a>
                    <a href="viber://chat?number=+%2B48734701011" className="hidden md:flex flex-col items-center">
                        <FaViber className="text-purple-600 text-6xl"/>
                        <span className="mt-2 text-sm text-white font-semibold">Viber</span>
                    </a>
                    <a href="https://web.telegram.org/k/#@alekskot44" className="flex flex-col items-center">
                        <FaTelegramPlane className="text-blue-400 text-6xl"/>
                        <span className="mt-2 text-sm text-white font-semibold">Telegram</span>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=48734701011" className="flex flex-col items-center">
                        <FaWhatsapp className="text-green-600 text-6xl"/>
                        <span className="mt-2 text-sm text-white font-semibold">WhatsApp</span>
                    </a>
                </div>
            </Modal>}
        </div>
    );
};

export default ButtonWithModal;
