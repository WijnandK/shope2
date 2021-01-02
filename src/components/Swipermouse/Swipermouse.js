/* eslint-disable no-restricted-globals */
import React, { useState  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "swiper/components/mousewheel/mousewheel.scss";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
} from "swiper";
import Slidesmain from "../Slidesmain/Slidesmain";
 
import w from "../../static/images/w.jpg";
import b from "../../static/images/b.webp";
import Buttons from "../Button/Buttons";
 

 import man from "../../static/images/man.jpg";
import m2 from "../../static/images/m2.jpg";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const Swipermouse = () => {
  const [activeIndex, setActiveIndex] = useState();
  
 
  return (
    <main>
      <div className="wrapping">
        <Swiper
          onSwiper={(swiper) => (window.swiper = swiper)}
          direction="vertical"
          spaceBetween={0}
          speed={850}
          sensitivity={1}
          mousewheel={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex.toString())}
          // onSwiper={(swiper) => console.log("")}
          // scrollbar={{ draggable: true }}
          // pagination={{ clickable: true }}
          style={{ height: "100vh", marginTop: "0px" }}
        >
          <SwiperSlide className="slide_item reverse three">
            <div className={`slide_meta_button ${parseInt(activeIndex) > 0 ? "isFlipping" : ""}`}>
            
           <div className="front">
             <Buttons  text="New  digital  watches"/>
              </div> 
                 <div className="back">
            <Buttons  />
              </div> 
            </div>
            <Slidesmain imagewatch={m2} contain />
            <div className="slide_inside">
              <div className="slide_line reverse " />

              <div className="slide_text reverse">
                Refined selection of defined quality...
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="slide_item three">           
        
         <Slidesmain imagewatch={woman} contain/>
</SwiperSlide> */}
          <SwiperSlide className="slide_item  ff">
            <div className={`slide_meta_button ${parseInt(activeIndex)    ? "isFlipping" : ""}`}>
                  <div className="front">
      <Buttons  /> 
              </div> 
                  <div className="back">
       <Buttons text="Vintage and cool"/>
              </div> 
            </div>
            <Slidesmain imagewatch={man} />
            <div className="slide_inside ">
              <div className="slide_line " />
              <div className="slide_text  ">
                Specially customized for your personal style preferences
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide_item  reverse two">
            <div className={`slide_meta_button ${!parseInt(activeIndex)    ? "isFlipping" : ""}  ${parseInt(activeIndex) === 3   ? "isFlipping" : ""}`}>
                    <div className="front">
              <Buttons text="The newest inventory"/> 
              </div> 
                    <div className="back">
          <Buttons text="The newest inventory"/>
              </div> 
            </div>
            <Slidesmain imagewatch={b} />

            <div className="slide_inside">
              <div className="slide_line reverse" />
              <div className="slide_text reverse">
                The most populair trends? We have them...
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide_item   one">
            <div className={`slide_meta_button ${parseInt(activeIndex)   ? "isFlipping" : ""}`}>
                         <div className="front">
      <Buttons />
              </div>                  
                   <div className="back">
       <Buttons />
              </div> 
            </div>
            <Slidesmain imagewatch={w} />
            <div className="slide_inside">
              <div className="slide_line " />
              <div className="slide_text">
                Take a look at the cool products we selected
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default Swipermouse;
