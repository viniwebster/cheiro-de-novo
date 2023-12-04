import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import banner from "../../assets/banners/banner1.png";
import banner1_460w from "../../assets/banners/banner1-460w.png";
import banner2 from "../../assets/banners/banner2.png";
import banner2_460w from "../../assets/banners/banner2-460w.png";
import banner3 from "../../assets/banners/banner3.png";
import banner3_460w from "../../assets/banners/banner3-460w.png";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slide1 = styled.div`
height: 500px;
background: no-repeat center url(${banner});
background-size: cover;

@media screen and (max-width: 500px){
  height: 400px;
  background: no-repeat center url(${banner1_460w});
  background-size: cover;
}
`;

const Slide2 = styled.div`
height: 500px;
background: no-repeat center url(${banner2});
background-size: cover;

@media screen and (max-width: 500px){
  height: 400px;
  background: no-repeat center url(${banner2_460w});
  background-size: cover;
}
`;

const Slide3 = styled.div`
height: 500px;
background: no-repeat center url(${banner3});
background-size: cover;

@media screen and (max-width: 500px){
  height: 400px;
  background: no-repeat center url(${banner3_460w});
  background-size: cover;
}
`;


const BannerSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      navigation={{ enabled: true }}
      pagination={{ clickable: true, type: "bullets" }}
    >
      <SwiperSlide>
        <Slide1 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide2 />
      </SwiperSlide>
      <SwiperSlide>
        <Slide3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper;
