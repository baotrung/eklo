"use client";

import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useService } from "../hooks/useService";
import styles from "./other-activities-section.module.scss";

const ALL_SERVICES = ["coaching", "workshop", "public-speaking"];

export const OtherActivitesSection = () => {
  const { serviceName } = useService();
  const services = ALL_SERVICES.filter((s) => s !== serviceName);

  const t = useTranslations("services.other_activities");
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <h3 className={styles.title}>{t("title")}</h3>
      <div className={styles.services}>
        {services.map((service) => (
          <div key={service} className={styles["service-card"]}>
            <div className={styles["service-name"]}>{t(service)}</div>
            <Link href={`/services/${service}`}>
              <Button className={styles.btn} color="secondary">
                {t("know_more")}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </MaxWidthContainer>
  );
};
