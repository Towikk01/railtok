'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'


const Slider = ({ images }) => {
    return (
        <Swiper
            className='h-[330px]'
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={8}
            slidesPerView={1}
            pagination={{ clickable: true, type: 'bullets' }}
            loop={true}
            navigation={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
                // when window width is >= 640px
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            }}
            // ...
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className="w-[200px] h-[370px] relative">
                    <Image
                        src={image}
                        alt={`Slide ${index}`}
                        // layout="responsive"
                        objectFit="cover"
                        fill="responsive"
                    />
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default Slider;
