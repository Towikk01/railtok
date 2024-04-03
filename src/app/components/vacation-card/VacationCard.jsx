import React from 'react';
import Image from "next/image";

const VacationCard = ({ title,  country, sellary, schedule, food, accomodation, requirements, description, backgroundImage }) => {
    return (
        <figure className="relative text-white bg-cover bg-center w-full rounded-lg h-[370px] md:h-[450px] shadow-md overflow-hidden">
            <Image
                src={backgroundImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
            />
            <figcaption className="relative z-10 p-3 flex flex-col justify-between bg-black bg-opacity-50 h-full">
                <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                <div className="flex flex-col justify-center gap-2">
                    <span className="text-[14px]">{country}</span>
                    <span className="text-[14px]">{sellary}</span>
                </div>
                <ul className="my-auto">
                    {description.map ((item, index) => (
                        <li key={index} className="text-sm">{item}</li>
                    ))}
                </ul>
                <div className="flex flex-col mt-auto h-full">
                <p className="text-sm mt-2">{schedule}</p>
                <p className="text-sm mt-1">{accomodation}</p>
                <p className="text-sm mt-1">{requirements}</p>
                <p className="text-sm mt-1">{food}</p>
                </div>
            </figcaption>
        </figure>
    );
};

export default VacationCard;
