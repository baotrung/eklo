import starRed from "@/assets/star-red.svg";
import MaxWidthWrapper from "@/components/MaxWitdthWrapper";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./BeyondYourBest.module.scss";

export default function BeyondYourBest() {
  const t = useTranslations("home_page.beyond_your_best");
  return (
    <section id="beyond-your-best" className={styles.container}>
      <MaxWidthWrapper className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>{t("slogan")}</h2>

          <Image src={starRed} alt="star-red" className={styles.icon} />
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{t("description_1")}</p>
          <p className={styles.description}>{t("description_2")}</p>
          <ul className={classNames("unstyled-list", styles.services)}>
            <li>
              <h3>Workshop</h3>
            </li>
            <li>
              <h3>Coaching</h3>
            </li>
            <li>
              <h3>Public Speaking/ Soft Skill</h3>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
