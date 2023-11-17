import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import banner from "../../assets/banners/banner1.png";
import banner1_460vw from "../../assets/banners/banner1-460w.png";
import banner2 from "../../assets/banners/banner2.png";
import banner2_460w from "../../assets/banners/banner2-460w.png";
import banner3 from "../../assets/banners/banner3.png";
import banner3_460w from "../../assets/banners/banner3-460w.png";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const StyledImg = styled.img`
width: 100%;
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
        <StyledImg
          src={banner}
          alt=""
          srcSet={`${banner1_460vw} 500w, ${banner} 1200w`}
          sizes="(max-width: 500px) 100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImg 
          src={banner2} 
          alt="" 
          srcSet={`${banner2_460w} 500w, ${banner2} 1200w`}
          sizes="(max-width: 500px) 100%"
          />
      </SwiperSlide>
      <SwiperSlide>
      <StyledImg 
          src={banner3} 
          alt="" 
          srcSet={`${banner3_460w} 500w, ${banner3} 1200w`}
          sizes="(max-width: 500px) 100%"
          />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper;
