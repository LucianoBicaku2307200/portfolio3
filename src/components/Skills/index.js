import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import NextIcon from "../../images/next.svg";
import { Api } from "../../api/BaseEndpoint";
import "./skills.scss";

SwiperCore.use([Navigation]);

const Skills = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await Api.get("/skills")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="text" data-scroll data-scroll-speed="-0.5">
        <h2>My Skills</h2>
        <p>
          So we are glad to invite you all into our club to dance on the best
          music to all time best noise..
        </p>
      </div>

      <Swiper
        className="slider"
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        spaceBetween={30}
        scrollbar={{ draggable: true }}
        speed={1000}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((el) => (
          <SwiperSlide className="slider-item" key={el._id}>
            <>
              <div>
                <img src={el.image} alt="" />
              </div>
              <div>
                <h4>{el.title}</h4>
                <p>{el.description}</p>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-nav">
        <div className="nav-button prev">
          <img src={NextIcon} alt="" />
        </div>
        <div className="nav-button next">
          <img src={NextIcon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
