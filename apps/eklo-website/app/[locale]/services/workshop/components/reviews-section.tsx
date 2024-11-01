"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { Modal, useModal } from "eklo-ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./reviews-section.module.scss";

const reviews = [
  {
    id: 0,
    title: "Review #1",
    subtitle: "Atelier CV",
    imageUrl: "/images/workshop/review-0.png",
  },
  {
    id: 1,
    title: "Review #2",
    subtitle: "Atelier CV & LM",
    imageUrl: "/images/workshop/review-1.png",
  },
  {
    id: 2,
    title: "Review #3",
    subtitle: "Atelier CV",
    imageUrl: "/images/workshop/review-2.png",
  },
];

export const ReviewsSection = () => {
  const t = useTranslations("services.workshop_page.reviews_section");
  const reviewModal = useModal<string>();

  return (
    <>
      <MaxWidthContainer
        containerClassName={styles.container}
        wrapperClassname={styles.wrapper}
      >
        <h3 className={styles.title}>{t("title")}</h3>
        <h3 className={styles.subtitle}>{t("subtitle")}</h3>
        <div className={styles["review-list"]}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={review.imageUrl}
                  alt="img review"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.detail}>
                <div className={styles.title}>{review.title}</div>
                <div className={styles.subtitle}>{review.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthContainer>
      {/* modals */}
      <Modal isOpen={reviewModal.isOpen}></Modal>
    </>
  );
};