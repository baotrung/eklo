import { FC } from "react";
import styles from "./Footer.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Footer: FC = () => {
  const t_ = useTranslations("footer");

  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contacts}>
          <div>{t_("follow_us")}</div>
          <a
            className={styles.bold}
            href="https://www.facebook.com/EkloCoaching"
          >
            {t_("facebook")}
          </a>
          <a
            className={styles.bold}
            href="https://www.instagram.com/eklocoaching/"
          >
            {t_("instagram")}
          </a>

          <div>{t_("contact")}</div>
          <div className={styles.bold}>eklocoaching@gmail.com</div>
        </div>
        <div className={styles.others}>
          <Link href="legal-notice">{t_("legal_notice")}</Link>
          <Link href="usage-condition">{t_("usage_condition")}</Link>
          <Link href="#">{t_("map")}</Link>
          <Link href="#">{t_("donate")}</Link>
        </div>
      </div>
    </div>
  );
};
