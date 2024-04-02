'use client'
import React, { useState } from "react";
import ReviewCard from "@/app/components/review-card/ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'



    const ReviewSlider = ({ reviews }) => {
        return (
            <Swiper
                className='h-[340px]'

                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={8}
                slidesPerView={1}
                pagination={{ clickable: true, type: 'bullets' }}
                loop={true}
                navigation={true}
                autoplay={{ delay: 6500, disableOnInteraction: false }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className="w-[200px] h-[370px] relative">
                      <ReviewCard reviewText={review.reviewText} date={review.date} name={review.name}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
};

export default ReviewSlider;
