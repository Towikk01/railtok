// components/DynamicBlock.jsx
const DynamicBlock = ({  title, description,  isLast = true }) => {


	return (
		<div className="flex items-start flex-row md:flex-col md:gap-9 last:mb-0 gap-[22px] w-fit  ">
			<div className="flex flex-col md:flex-row items-center gap-[1.15rem] md:gap-5 md:w-full">
				<div
					className="min-w-[30px] h-[30px] bg-amber-100 animate-pulse bg-opacity-20 rounded-full flex items-center justify-center">
					<div className="w-[15px] h-[15px] bg-white rounded-full"></div>
				</div>
				{isLast && (
					<div
						className="w-0.5 h-24 bg-transparent border-l-2 border-dashed border-gray-300 md:border-l-0 md:border-b md:w-full md:h-0.5"></div>
				)}
			</div>
			<div className="flex flex-col gap-4">
				<h3 className="text-[18px] text-white lg:whitespace-pre md:text-[24px] border-b border-white w-fit md:leading-8 lg: font-medium md:font-normal text-textPrimary leading-[26px]">
					{title}
				</h3>
				<p className="text-[20px] md:text-base text-white  md:leading-[26px] text-white/95 font-normal leading-[22px]  md:mb-0 md:mr-[30px] lg:mr-0 lg:max-w-[306px] md:max-w-[163px]">
					{description}
				</p>
			</div>
		</div>
	);
};

export default DynamicBlock;
