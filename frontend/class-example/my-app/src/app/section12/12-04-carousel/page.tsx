"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function CarouselPage() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Image
                    src="/images/00-image.jpg"
                    alt="강아지이미지"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/12-04-dog2.jpg"
                    alt="강아지이미지"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/12-04-dog3.jpg"
                    alt="강아지이미지"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/12-04-dog4.jpg"
                    alt="강아지이미지"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </SwiperSlide>
        </Swiper>
    );
}
