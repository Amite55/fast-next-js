'use client'

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const Images = () => {
    return (
        // <div>
        //     <Image src='/1.jpg' alt='images' width='1180' height='800' />
        //     {/* <Image src='/4.jpg' alt='images' width='1180' height='800' /> */}
        // </div>


        <div className='text-center max-w-[900px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/1.jpg' alt='images' width='700' height='500' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/2.jpg' alt='images' width='700' height='500' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/3.jpg' alt='images' width='700' height='500' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/4.jpg' alt='images' width='700' height='500' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/5.png' alt='images' width='700' height='500' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/6.jpg' alt='images' width='700' height='500' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full mx-auto' src='/7.png' alt='images' width='700' height='500' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Images;