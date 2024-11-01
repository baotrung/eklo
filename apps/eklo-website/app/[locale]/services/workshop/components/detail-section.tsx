"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { Button } from "eklo-ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./detail-section.module.scss";

export const DetailSection = () => {
  const t = useTranslations("services.workshop_page.detail_section");
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <div className={styles.detail}>
        <p className={styles.paragraph}>
          Mỗi chương trình workshop sẽ thường kéo dài 1 ngày, từ 6-7 tiếng, bao
          gồm: 1 buổi về CV/Lettre de motivation và 1 buổi về Phỏng vấn. <br />
          <br />
          Đến với buổi Workshop của EKLO, bạn sẽ học được gì ?
          <br /> <br />
          🌟 Tìm hiểu về các cách tìm việc và làm sao đọc hiểu thông tin tuyển
          dụng cho hiệu quả.
          <br />
          🌟 Trau dồi những kĩ năng quan trọng trong việc ứng tuyển (viết
          CV/LM/Phỏng vấn) để có thể thể hiện được tốt nhất khả năng của bản
          thân, đồng thời lại tạo ra sự khác biệt riêng.
          <br />
          🌟 Chia sẻ những lo lắng, khó khăn của bản thân từ đó cùng xây dựng và
          củng cố tinh thần tự tin. <br />
          🌟 Tìm hiểu về Networking cơ bản. <br />
          <br />
          Thông qua việc chia sẻ và trao đổi trong một nhóm nhỏ, dưới sự hướng
          dẫn của EKLO, bạn sẽ tìm thấy cho mình những câu trả lời có giá trị,
          định hướng cho bạn trong quá trình tìm việc sau này. Mô hình nhóm nhỏ
          của Workshop cũng giúp bạn nâng cao kỹ năng giao tiếp, lắng nghe và
          giải quyết vấn đề, cũng như là cơ hội để bạn làm quen với những bạn
          trẻ có định hướng và cá tính khác.
        </p>
        <Button color="secondary">{t("join")}</Button>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: styles["pagination-bullet-active"],
          bulletClass: styles["pagination-bullet"],
        }}
        className={styles.slider}
        style={{
          paddingBottom: "3rem",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <Image
              src={`/images/workshop/slide-${index}.png`}
              alt={`slide-${index}`}
              fill
              sizes="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MaxWidthContainer>
  );
};
