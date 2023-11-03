import styled from "styled-components"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import banner from "../../assets/banners/banner1.png"
import banner2 from "../../assets/banners/banner2.png"
import banner3 from "../../assets/banners/banner3.png"
import 'swiper/css';

const StyledImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`

const BannerSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay: 5000}}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><StyledImg src={banner} alt=''/></SwiperSlide>
      <SwiperSlide><StyledImg src={banner2} alt=''/></SwiperSlide>
      <SwiperSlide><StyledImg src={banner3} alt=''/></SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper