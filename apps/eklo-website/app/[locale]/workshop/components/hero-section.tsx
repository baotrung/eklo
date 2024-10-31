import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./hero-section.module.scss";

export const HeroSection = () => {
  const t = useTranslations("workshop_page");
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <div className={styles.heading}>
        <h2 className={styles.title}>Workshop</h2>
        <div className={classNames(styles["img-star"])}>
          <Image src="/images/star-yellow.svg" alt="pattern workshop" fill />
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
