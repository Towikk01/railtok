import Link from 'next/link';

const ScrollToTopButton = () => {
    return (
        <Link href="/" scroll={true}>
            <button
                className="fixed bottom-5 right-5 z-50 p-3 text-[26px] text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-lg rounded-full"
                aria-label="Scroll to top"
            >
                ↑
            </button>
        </Link>
    );
};

export default ScrollToTopButton;
