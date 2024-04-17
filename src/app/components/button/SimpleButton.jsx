'use client';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import {Modal} from './Button';
import { FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';
import {useLanguage} from '@/app/LanguageContext';
import {translations} from '@/app/translations';

export const SimpleButton = () => {
	const { language } = useLanguage();
	const currentTranslations = translations[language];
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div className="">
			<button
				className="simple-button bg-blue-700 text-xl text-white font-semibold py-2 px-4 rounded-xl animate-bounce hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
				onClick={openModal}
			>
				{currentTranslations.button}
			</button>
			{isModalOpen && (
				<Modal onClose={closeModal}>
					<button className="self-end" onClick={closeModal}>
						<IoMdClose className="text-white text-3xl" />
					</button>
					<div className="flex items-center md:gap-5 justify-around rounded-lg">
						<a href="viber://contact?number=%2B48734701011" className="flex md:hidden flex-col items-center">
							<FaViber className="text-purple-600 text-6xl" />
							<span className="mt-2 text-sm text-white font-semibold">Viber</span>
						</a>
						<a href="viber://chat?number=+%2B48734701011" className="hidden md:flex flex-col items-center">
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
				</Modal>
			)}
		</div>
	);
};

export default SimpleButton;
