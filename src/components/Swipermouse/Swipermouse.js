/* eslint-disable no-restricted-globals */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "swiper/components/mousewheel/mousewheel.scss";
import Image from "../Image/Image";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";

import m2 from "../../static/images/m2.jpg";
import ww1 from "../../static/images/ww1.jpg";

import mm from "../../static/images/mm.jpg";
import s from "../../static/images/s.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const Swipermouse = (props) => {
  return (
    <main>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        direction="vertical"
        spaceBetween={0}
        speed={520}
        sensitivity={12}
        mousewheel={true}
        onSlideChange={(swiper) => props.setIndexback(swiper.activeIndex)}
        // ={(swiper) => setActiveIndex(swiper.activeIndex.toString())}
        // onSwiper={(swiper) => console.log("")}
        // scrollbar={{ draggable: true }}
        // pagination={{ clickable: true }}
        style={{ height: "100vh", marginTop: "0px" }}
      >
        <SwiperSlide className="slide_item  ">
          <Image imageUrl={mm} />
        </SwiperSlide>
        {/* <SwiperSlide className="slide_item three">           
        
         <Slidesmain imagewatch={woman} contain/>
</SwiperSlide> */}
        <SwiperSlide className="slide_item ">
          <Image imageUrl={s} />
        </SwiperSlide>

        <SwiperSlide className="slide_item ">
          <Image imageUrl={m2} />
        </SwiperSlide>
        <SwiperSlide className="slide_item ">
          <Image imageUrl={ww1} />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Swipermouse;
