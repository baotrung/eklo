"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui/atoms/button";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./detail-section.module.scss";

const swiperLides = [
  {
    id: 0,
    src: "/images/workshop/slide-0.png",
  },
  {
    id: 1,
    src: "/images/workshop/slide-1.png",
  },
  {
    id: 2,
    src: "/images/workshop/slide-2.png",
  },
];

export const DetailSection = () => {
  const t = useTranslations("services.coaching_page.detail_section");
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <div className={styles.detail}>
        <p className={styles.paragraph}>
          Những tư vấn trực tiếp với chị Minh Hằng - founder của EKLO, người sẽ
          đồng hành cùng bạn trong suốt quá trình coaching sẽ cùng bạn giải
          quyết những nút thắt trong quá trình tìm việc tại nước ngoài. Coaching
          1:1 sẽ giúp bạn tự tin hơn khi đối mặt với những thách thức của việc
          tìm việc bằng chính những gì làm nên con người bạn, cũng như vững tin
          vào những lựa chọn của bản thân vì bạn rất đặc biệt.
          <br />
          <br />
          Mỗi buổi tư vấn được xây dựng dựa trên trình tự sau đây :
          <br />
          <br />
          <ul className={classNames("unstyled-list", styles.list)}>
            <li>🌟 Cùng tìm hiểu về bạn và nhu cầu của bạn.</li>
            <li>
              🌟 Tìm hiểu về quá trình học tập, những kinh nghiệm mà bạn đã có,
              về những điểm mạnh để cùng tìm ra phiên bản tốt nhất bên trong
              bạn.
            </li>
            <li>🌟 Trau dồi những kĩ năng ứng tuyển (CV/LM/Phỏng vấn).</li>
            <li>
              🌟 Chia sẻ những lo lắng, cùng xây dựng và củng cố sự tự tin cho
              bạn.
            </li>
          </ul>
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
        {swiperLides.map(({ id, src }) => (
          <SwiperSlide className={styles.slide} key={id}>
            <Image src={src} alt={`slide-${id}`} fill sizes="100%" />
          </SwiperSlide>
        ))}
      </Swiper>
    </MaxWidthContainer>
  );
};
