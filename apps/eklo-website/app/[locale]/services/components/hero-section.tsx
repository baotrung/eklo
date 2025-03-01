"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo } from "react";
import { useService } from "../hooks/useService";
import styles from "./hero-section.module.scss";

export const HeroSection = () => {
  const { serviceName } = useService();
  const title = useMemo(() => {
    switch (serviceName) {
      case "coaching":
        return "Coaching 1:1";
      case "workshop":
        return "Workshop";
      case "public-speaking":
        return "Public Speaking";
      default:
        return "";
    }
  }, [serviceName]);

  const t = useTranslations(
    `services.${serviceName.replaceAll("-", "_")}_page`,
  );
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <div className={styles.heading}>
        <h3 className={styles.title}>{title}</h3>
        <div className={classNames(styles["img-star"])}>
          <Image src={`/images/star-yellow.svg`} alt="pattern workshop" fill />
        </div>
      </div>
      <div className={styles["presentation-wrap"]}>
        <div className={classNames(styles["img-pattern"], styles.decor)}>
          <Image
            src="/images/pattern-workshop.svg"
            alt="pattern workshop"
            fill
          />
        </div>
        <p>{t("presentation")}</p>
      </div>
    </MaxWidthContainer>
  );
};
