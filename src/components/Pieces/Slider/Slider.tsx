"use client";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { App, Site } from "@/Models";
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { AppBox, SiteBox } from "../..";
import { SwiperSlide } from "swiper/react";
export function Slider({ SlidesJSON }: { SlidesJSON: string }) {
  const Slides: (App | Site)[] = JSON.parse(SlidesJSON);
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation
        pagination={{
          clickable: true,
          renderBullet(index, className) {
            return `<span key="${index}" class='${className}'></span>`;
          },
        }}
        loop={true}
        className="swiper h-[600px] w-[100dvw]"
        modules={[Pagination, Navigation]}
      >
        {Slides.map((Slide, index) => {
          const App: App = Slide as App;
          const Site: Site = Slide as Site;
          if (Site?.Deploy)
            return (
              <SwiperSlide key={index}>
                <SiteBox Site={Site} />
              </SwiperSlide>
            );
          if (App?.Release)
            return (
              <SwiperSlide key={index}>
                <AppBox App={App} />
              </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
}
