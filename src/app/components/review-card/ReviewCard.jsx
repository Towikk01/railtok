import React from 'react';

const ReviewCard = ({name, date, reviewText}) => {
	return (
		<figure className="border border-black min-h-[200px] h-fit text-black w-full rounded-[5px] bg-[#666] bg-opacity-20 shadow-md">
			<figcaption className="flex flex-col">
				<div className="flex flex-col sm:flex-row justify-between border-b border-black rounded-tl h-full rounded-tr px-5 py-2 items-center">
					<span className="font-bold text-xl text-white">{name}</span>
					<span className="font-bold text-sm text-black">{date}</span>
				</div>
				<p className="font-normal text-[#ADD9E9] h-full w-full py-3 px-5 text-[18px]">{reviewText}</p>
			</figcaption>
		</figure>
	);
};

export default ReviewCard;
