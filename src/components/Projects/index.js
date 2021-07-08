import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import NextIcon from "../../images/next.svg";
import { Api } from "../../api/BaseEndpoint";
import testImage from "../../images/testImage.png";
import "./projects.scss";

SwiperCore.use([Navigation]);

const RecentProjects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    gsap.from(".projects-header", {
      opacity: 0.3,
      y: 10,
      scrollTrigger: {
        scrub: true,
        trigger: ".projects",
        start: "top 70%",
        end: "center center",
      },
    });
    async function fetchData() {
      await Api.get("/projects")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <section className="projects" id="project">
      <div className="projects-header">
        <div>
          <h2>Latest Projects</h2>
        </div>
        <div className="slider-nav">
          <div className="nav-button prev">
            <img src={NextIcon} alt="" />
          </div>
          <div className="nav-button next">
            <img src={NextIcon} alt="" />
          </div>
        </div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        spaceBetween={30}
        scrollbar={{ draggable: true }}
        speed={1000}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
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
            <div>
              <img src={el.image} alt="" />
            </div>
            <div className="div">
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <div className="buttons">
                <a
                  className={el.gitRepository ? "" : "error"}
                  href={el.gitRepository}
                >
                  Github Repo
                </a>
                <a
                  className={el.demoURL ? "" : "error"}
                  target="_blank"
                  rel="noreferrer"
                  href={el.demoURL}
                >
                  Demo{" "}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecentProjects;
