import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoMdQuote } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
function App() {
  return (
    <div className="bg-white">
      <div className="text-4xl p-9 col-start-1 col-span-4 text-zinc-800 font-bold mt-3">
        Community Reviews
      </div>
      <br></br>
      <br></br>
      <Swiper
        className=" text-black"
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="bg-black p-10 hover:bg-gray-500 text-gray-100">
          <IoMdQuote color="cyan" fontSize="3em" className="" />
          <div className="pt-2">
            {" "}
            Techbeens helped us get insights from other people in our industry
            to make a better, more informed decision.
          </div>
          <div className="flex gap-1 mt-5">
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
          </div>
          <img
            src="https://startupiceland.files.wordpress.com/2012/02/bala_k_passamynd.jpg"
            className="rounded-3xl select-none h-12 w-12 mt-4"
          ></img>
          <div className="font-semibold">
            Josh D.<p>Sales Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black p-10 hover:bg-gray-500 text-gray-100">
          <IoMdQuote color="cyan" fontSize="3em" className="" />
          <div className="pt-2">
            {" "}
            Techbeens has been a great place for me to both find, explore and
            review software
          </div>
          <div className="flex gap-1 mt-5">
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
          </div>
          <img
            src="https://www.if-coaching.com/wp-content/uploads/2019/12/adobestock_101042187-600x600.jpeg"
            className="rounded-3xl select-none h-12 w-12 mt-4"
          ></img>
          <div className="font-semibold">
            Matthew Gardner <p>Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black p-10 hover:bg-gray-500 text-gray-100">
          <IoMdQuote color="cyan" fontSize="3em" className="" />
          <div className="pt-2">
            {" "}
            Techbeens is my first stop destination for exploring business tools
            and advance services
          </div>
          <div className="flex gap-1 mt-5">
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
          </div>
          <img
            src="https://mineolaamerican.com/wp-content/uploads/2019/07/MikeAdams-web-300x300.jpg"
            className="rounded-3xl select-none h-12 w-12 mt-4"
          ></img>
          <div className="font-semibold">
            James Guard <p>Software Expert</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black p-10 hover:bg-gray-500 text-gray-100">
          <IoMdQuote color="cyan" fontSize="3em" className="" />
          <div className="pt-2">
            {" "}
            Techbeens has helped my business to integrate the most accurate
            software tools for smooth business operations and growth.
          </div>
          <div className="flex gap-1 mt-4">
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
          </div>
          <img
            src="https://imperialrecruitmentgroup.com/wp-content/uploads/2019/08/310719IRG_006-600x600.jpg"
            className="rounded-3xl select-none h-12 w-12 mt-4"
          ></img>
          <div className="font-semibold">
            Fredy Mate <p>Co-founder, BrownLadder</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black p-10 hover:bg-gray-500 text-gray-100">
          <IoMdQuote color="cyan" fontSize="3em" className="" />
          <div className="pt-2">
            {" "}
            Techbeens has helped my business to integrate the most accurate
            software tools for smooth business operations and growth.
          </div>
          <div className="flex gap-1 mt-3">
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
            <AiFillStar color="cyan" fontSize="1em" />
          </div>
          <img
            src="https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t500x500.jpg"
            className="rounded-3xl select-none h-12 w-12 mt-4"
          ></img>
          Monkey D Luffy
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default App;
