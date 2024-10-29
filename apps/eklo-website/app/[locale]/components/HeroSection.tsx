import landingAvatarImage from "@/assets/landing-avatar.png";
import { Link } from "@/i18n/routing";
import { Button } from "eklo-ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
  const t = useTranslations("home_page");

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={landingAvatarImage}
            alt="Workshop participants"
            className={styles.circleImage}
            priority
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TÌM VIỆC TUỔI 30+</h1>
          <p className={styles.subtitle}>{"Thứ 7 ___ 19-10-2024"}</p>
          <Link href="https://www.billetweb.fr/workshop-tim-viec-30">
            <Button color="tertiary" fontSize="lg" title="join">
              {t("join_now")}
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <svg
          className={styles.arrow}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
