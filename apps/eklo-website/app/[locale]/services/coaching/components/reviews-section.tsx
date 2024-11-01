"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { Modal, useModal } from "eklo-ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback } from "react";
import styles from "./reviews-section.module.scss";

const reviews = [
  {
    id: 0,
    title: "Review #1",
    subtitle: "By Minh Phương",
    imageUrl: "/images/coaching/review-1.png",
  },
  {
    id: 1,
    title: "Review #2",
    subtitle: "By Lâm",
    imageUrl: "/images/coaching/review-2.png",
  },
  {
    id: 2,
    title: "By Bảo Tú",
    subtitle: "Atelier CV",
    imageUrl: "/images/coaching/review-3.png",
  },
];

export const ReviewsSection = () => {
  const t = useTranslations("services.coaching_page.reviews_section");
  const {
    isOpen,
    state: modalState,
    closeModal,
    openModal,
  } = useModal<string>();

  const handleOpenReview = useCallback(
    ({ imageUrl }: { imageUrl: string }) => {
      openModal(imageUrl);
    },
    [openModal]
  );

  return (
    <>
      <MaxWidthContainer
        containerClassName={styles.container}
        wrapperClassname={styles.wrapper}
      >
        <h3 className={styles.title}>{t("title")}</h3>
        <div className={styles["review-list"]}>
          {reviews.map((review) => (
            <div
              key={review.id}
              className={styles.card}
              onClick={() => handleOpenReview(review)}
            >
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
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "80vh",
          }}
        >
          <Image
            src={modalState ?? ""}
            alt="review-img"
            fill
            sizes="100"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </Modal>
    </>
  );
};
