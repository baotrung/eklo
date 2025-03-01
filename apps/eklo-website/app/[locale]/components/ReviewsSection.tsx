"use client";

import kimImg from "@/assets/images/reviewers/img-kim.png";
import lanImg from "@/assets/images/reviewers/img-lan.png";
import linhImg from "@/assets/images/reviewers/img-linh.png";
import minhImg from "@/assets/images/reviewers/img-minh.png";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./ReviewsSection.module.scss";

// TODO: fetch this from server
const reviews = [
  {
    id: 0,
    reviewer: "Lan",
    avatar: lanImg,
    content: "review_1",
  },
  {
    id: 1,
    reviewer: "Kim",
    avatar: kimImg,
    content: "review_2",
  },
  {
    id: 2,
    reviewer: "Linh",
    avatar: linhImg,
    content: "review_3",
  },
  {
    id: 3,
    reviewer: "Minh",
    avatar: minhImg,
    content: "review_4",
  },
];

export const ReviewsSection: FC = () => {
  const t = useTranslations("home_page.reviews_section");
  return (
    <section id="ReviewsSection">
      <MaxWidthContainer
        containerClassName={styles.container}
        wrapperClassname={styles.wrapper}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletActiveClass: styles["pagination-bullet-active"],
              bulletClass: styles["pagination-bullet"],
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={styles.review}>
                  <Image src={review.avatar} alt="avatar" />
                  <div className={styles["review-detail"]}>
                    <p className={styles["reviewer-name"]}>{review.reviewer}</p>
                    <p>{t(review.content)}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MaxWidthContainer>
    </section>
  );
};
