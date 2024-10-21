import starRed from "@/assets/star-red.svg";
import MaxWidthWrapper from "@/components/MaxWitdthWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./BeyondYourBest.module.css";

export default function BeyondYourBest() {
  const t = useTranslations("homePage.beyondYourBest");
  return (
    <section className={styles.container}>
      <MaxWidthWrapper>
        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.headingText}>
              Beyond <br /> your best
            </span>

            <Image
              src={starRed}
              alt="star-red"
              className={styles.headingIcon}
            />
          </div>
          <div>
            <p className={styles.description}>{t("description_1")}</p>
            <p className={styles.description}>{t("description_2")}</p>
            <ul className={styles.services}>
              <li>Workshop</li>
              <li>Coaching</li>
              <li>Public Speaking/ Soft Skill</li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
