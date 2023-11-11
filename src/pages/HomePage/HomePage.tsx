import BestProducts from "../../components/BestProducts/BestProducts"
import Infos from "../../components/Infos/Infos"
import BannerSwiper from "../../components/Swiper/Swiper"
import Title from "../../components/Title/Title"
import LandingPage from "../LandingPage/LandingPage"

const HomePage = () => {
  return(
    <>
      <LandingPage />
      <BannerSwiper />
      <Title text="Destaques"/>
      <BestProducts />
      <Infos />
    </>
  )
}

export default HomePage