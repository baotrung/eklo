import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { StarSvg } from "@/components/star-svg";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./hero-section.module.scss";

export const HeroSection = () => {
  const t = useTranslations("activities_page");
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <div className={styles.heading}>
        <h3 className={styles.title}>{t("title")}</h3>
        <StarSvg className={classNames(styles["img-star"])} />
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
