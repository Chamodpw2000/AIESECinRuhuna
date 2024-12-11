import React from 'react'
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import c5 from "../assets/images/c5.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Slide = () => {
  return (
    <div>
      <div className='pt-5 mx-5'
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
<Swiper
  spaceBetween={25}
  modules={[Autoplay]}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  breakpoints={{
    // Small screens (up to 640px)
    640: {
      slidesPerView: 1,
    },
    // Medium screens (up to 768px)
    768: {
      slidesPerView: 2,
    },
    // Large screens (1024px and above)
    1024: {
      slidesPerView: 3,
    },
  }}
>
          <SwiperSlide>
            <img src={c1} alt="img1" style={{ height: "100%", width: "100%", borderRadius: "20px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c2} alt="img2" style={{ height: "100%", width: "100%", borderRadius: "20px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c3} alt="img3" style={{ height: "100%", width: "100%", borderRadius: "20px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c4} alt="img4" style={{ height: "100%", width: "100%", borderRadius: "20px" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={c5} alt="img5" style={{ height: "100%", width: "100%", borderRadius: "20px" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slide;
