import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Card from "../utilities/Card";

import styles from "../../css/Slider.module.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Caroussel({ plans, billing }) {
  const handleClick = (name) => {
    toast.success(`Plan ${name} selected!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={3}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        pagination={{ el: ".pagination", clickable: true }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
          clickable: true,
        }}
        className="swiper__container"
      >
        {plans.map(({ name, price, description, perks }) => (
          <SwiperSlide key={name} s>
            {({ isActive }) => (
              <Card
                classCSS={`${styles.card__plan} ${
                  isActive ? `${styles.slide__active}` : ""
                }`}
              >
                <div className={styles.card__plan__wrapper__content}>
                  <div>
                    <span className={styles.card__plan__price}>
                      {billing.toLowerCase() === "monthly"
                        ? price[0]
                        : price[1]}
                    </span>
                    <span className={styles.card__plan__billing}>
                      &nbsp;/{billing.toLowerCase()}
                    </span>
                  </div>
                  <span className={styles.card__plan__name}>{name}</span>
                  <p className={styles.card__plan__description}>
                    {description}
                  </p>
                  <ul className={styles.card__plan__listPerks}>
                    {perks.map((perk) => (
                      <li key={perk} className={styles.card__plan__perk}>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className={`btn-default ${styles.card__plan__btn}`}
                  onClick={() => handleClick(name)}
                >
                  Choose Plan
                </button>
              </Card>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-controller flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="pagination flex items-center justify-around gap-1" />
        </div>
      </div>
    </>
  );
}

Caroussel.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
      description: PropTypes.string,
      perks: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  billing: PropTypes.string.isRequired,
};
