import imageUrl from "@/assets/img-founder.png";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./OurStorie.module.scss";

export const OurStory = () => {
  const t_ = useTranslations("home_page.our_storie");
  return (
    <div className={classNames(styles.OurStory)}>
      <div className={styles.wrapper}>
        <div className={styles["image-lg"]}>
          <Image src={imageUrl} alt="img-founder.png" />
        </div>
        <div className={styles.content}>
          <h2>{t_("title")}</h2>
          <Image
            src={imageUrl}
            alt="img-founder.png"
            className={styles["image-sm"]}
          />
          <p> {t_("p1")} </p>
        </div>
      </div>
    </div>
  );
};
