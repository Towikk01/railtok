// components/DynamicBlock.jsx
const DynamicBlock = ({ title, description, isLast = false }) => {
	return (
		<div className={`flex ${title ? 'md:flex-col md:gap-9' : 'md:flex-col md:gap-2'} items-start flex-row   last:mb-0 gap-[22px] w-fit`}>
			<div className={'flex flex-col items-center gap-[1.15rem] md:flex-row md:gap-5 md:w-full'}>
				<div
					className="min-w-[30px] h-[30px] bg-amber-100 animate-pulse bg-opacity-20 rounded-full flex items-center justify-center">
					<div className="w-[15px] h-[15px] bg-white rounded-full"></div>
				</div>

				<div
					className={`w-0.5 h-24 bg-transparent border-l-2 border-dashed border-gray-300 md:border-l-0 md:border-b md:w-full md:h-0.5 ${isLast ? 'h-48': 'h-24'}`}></div>
			</div>
			<div className={'flex flex-col gap-4'}>
				{title && (
					<h3 className="text-[21px] text-white lg:whitespace-pre md:text-[24px] border-b border-white w-fit md:leading-8 lg: font-medium md:font-normal text-textPrimary leading-[26px]">
						{title}
					</h3>
				)}
				<p className={`${title ? 'text-[21px]' : 'text-[20px] mt-[2.8rem] md:mt-0'} md:text-[20px] text-white  md:leading-[26px] text-white/95 font-normal leading-[22px]  md:mb-0 md:mr-[30px] lg:mr-0 lg:max-w-[306px] md:max-w-[163px]`}>
					{description}
				</p>
			</div>
		</div>
	);
};
export default DynamicBlock;
