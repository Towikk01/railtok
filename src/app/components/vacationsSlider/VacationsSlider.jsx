'use client'
import React from "react";
import VacationCard from "@/app/components/vacation-card/VacationCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'



const ReviewSlider = ({ vacation }) => {
    return (
        <Swiper
            className='h-full'

            modules={[Pagination, Autoplay,Navigation]}
            spaceBetween={8}
            slidesPerView={1}
            pagination={{ clickable: true, type: 'bullets' }}
            loop={true}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50
                }

            }}
            autoplay={{ delay: 6500, disableOnInteraction: false }}
        >
            {vacation.map((job, index) => (
                <SwiperSlide key={index} className="w-[200px] h-full relative">
                    <VacationCard
                        key={job.id}
                        title={job.title}
                        sellary={job.sellary}
                        description={job.description}
                        schedule={job.schedule}
                        accomodation={job.accomodation}
                        requirements={job.requirements}
                        food={job.food}
                        country={job.country}
                        location={job.location}
                        text={job.text}
                        backgroundImage={job.backgroundImage}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

export default ReviewSlider;
