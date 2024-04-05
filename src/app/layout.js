
import { Fenix } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header/Header";
import ParticlesBG from "@/app/components/particles/ParticlesBG";
import Footer from "@/app/components/footer/Footer";
import {LanguageProvider} from "@/app/LanguageContext";
import ScrollToTopButton from "@/app/components/scrolltotop/ScrollToTopButton";




const fenix = Fenix({ subsets: ["latin"], display: "swap", weight: "400" });

export const metadata = {
  title: "Railtok recruitment",
  description: "Recruitment agency for people who want to work abroad on a European countries",
  keywords: "Recruitment, agency, work, abroad, Europe, Poland, Estonia, work, recruitment, job, houses, reviews, vacations, contact, about, features, reviews, vacancies, slider, card, button, particles, footer, header, scroll, smooth, particles, language, context, next, font, google",
}

export default function RootLayout({ children }) {


    return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={`${fenix.className} 'scroll-smooth`}>
      <LanguageProvider>
      <Header />

      <main className="pt-[60px] lg:pt-[85px]">
        <ScrollToTopButton/>
          <ParticlesBG/>
          {children}
      </main>
      <Footer/>
      </LanguageProvider>
      </body>
    </html>
  );
}
