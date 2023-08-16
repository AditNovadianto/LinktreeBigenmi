import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import NextLink from "next/link";

const Link = ({ images, href, name }) => {
  // const swiper = new Swiper(".swiper", {
  //   // Default parameters
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20,
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40,
  //     },
  //   },
  // });

  return (
    <div>
      <div className="block desktop:hidden">
        <Swiper
          className="w-full m-auto"
          spaceBetween={0}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[200px]">
                <img
                  className="w-[200px] h-full rounded-lg overflow-hidden object-cover m-auto"
                  src={image}
                  alt="index"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden desktop:block">
        <Swiper
          className="w-full m-auto"
          spaceBetween={0}
          slidesPerView={2}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2000,
          }}
          modules={[Autoplay]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[200px]">
                <img
                  className="w-[200px] h-full rounded-lg overflow-hidden object-cover m-auto"
                  src={image}
                  alt="index"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-7 w-full">
        <NextLink
          className="w-full block font-poppins font-semibold text-center bg-white p-3 rounded-lg"
          href={href}
        >
          {name}
        </NextLink>
      </div>
    </div>
  );
};

export default Link;
