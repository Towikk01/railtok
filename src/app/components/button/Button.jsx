'use client';
import React, { useState, useRef, useEffect } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { FaComments, FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useLanguage } from '@/app/LanguageContext';
import { translations } from '@/app/translations';

export const Modal = ({ onClose }) => {
	const modalRef = useRef();

	const handleCloseClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	const { language } = useLanguage();
	const currentTranslations = translations[language];
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				onClose();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<div className="fixed inset-0 z-50 flex justify-center items-center p-4">
			<div ref={modalRef} className="bg-opacity-90 border border-black rounded-[16px] px-6 py-4 bg-black bg-opacity-70 z-50 max-w-full w-[90%] md:w-auto">
				<button className="self-end" onClick={onClose}>
					<IoMdClose className="text-white text-3xl" />
				</button>
				<div className="text-white text-xl font-semibold text-center mb-4">{currentTranslations.button}</div>
				<div className="flex items-center md:gap-5 justify-around rounded-lg">
					<a href="viber://contact?number=%2B48734701011" className="flex flex-col items-center">
						<FaViber className="text-purple-600 text-6xl" />
						<span className="mt-2 text-sm text-white font-semibold">Viber</span>
					</a>
					<a href="https://t.me/+48734701011" className="flex flex-col items-center">
						<FaTelegramPlane className="text-blue-400 text-6xl" />
						<span className="mt-2 text-sm text-white font-semibold">Telegram</span>
					</a>
					<a href="https://api.whatsapp.com/send?phone=48734701011" className="flex flex-col items-center">
						<FaWhatsapp className="text-green-600 text-6xl" />
						<span className="mt-2 text-sm text-white font-semibold">WhatsApp</span>
					</a>
				</div>
			</div>
		</div>
	);
};

const Button = ({ onClick }) => {
	const { language } = useLanguage();
	const currentTranslations = translations[language];
	return (
		<div className="contact-btn-wrapper relative z-50 flex flex-col flex flex-col gap-2 items-center justify-center">
			<div className="relative flex items-center justify-center">
				<span className="wave-effect"></span>
				<button
					className="contact-btn text-[#f4f3ed] z-50 text-xl bg-blue-700 rounded-full p-3
							   hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
					onClick={onClick}
				>
					<FiMessageSquare className="text-4xl" />
				</button>
			</div>
			<div className="text-white font-semibold animate-bounce" style={{ textAlign: 'center' }}>
				<span className="block text-[15px] text-black">{currentTranslations.button.split(' ')[0].toUpperCase()}</span>
				<span className="block text-[15px] text-black">{language === 'en'? '' :currentTranslations.button.split(' ')[1].toUpperCase()}</span>
			</div>
		</div>
	);
};

const ButtonWithModal = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div className="fixed bottom-16 right-8 z-50">
			<Button onClick={openModal} />
			{isModalOpen && <Modal onClose={closeModal} />}
		</div>
	);
};

export default ButtonWithModal;
