import React from "react";
import ImageOne from "../images/7.jpg";
import ImageTwo from "../images/8.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const content = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex overflow-y-auto">
            <div className="flex p-20 mx-44">
              <img
                src={ImageTwo}
                alt="landscape"
                className=" rounded-lg  shadow mx-5 my-5 hover:animate-pulse"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex overflow-y-auto">
            <div className="flex p-20 mx-44">
              <img
                src={ImageOne}
                alt="landscape"
                className=" rounded-lg  shadow mx-5 my-5 hover:animate-pulse"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default content;