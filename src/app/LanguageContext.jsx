'use client';
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('uk'); // default language
	const value = { language, setLanguage };
	return (
		<LanguageContext.Provider value={value} >
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
