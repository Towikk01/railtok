import React from 'react';

const FeatureCard = ({description}) => {
    return (
        <div className="rounded-[30px] h-[350px] w-full max-w-[310px] max-h-[415px] py-10 px-10 bg-black bg-opacity-35 overflow-auto">
              <ul className="text-black list-disc gap-1 flex flex-col items-start">
                  {description.map((item, index) => (
                      <li key={index}>
                          <span className="text-[20px] text-white">{item}</span>
                      </li>
                  ))}
              </ul>
        </div>
    );
};

export default FeatureCard;
