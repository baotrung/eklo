import logoPodcast from "@/assets/logo-podcast.svg";
import logoThuVien from "@/assets/logo-thuvien.svg";
import logoKeChuyen from "@/assets/logo-toikechuyen.svg";
import MaxWidthWrapper from "@/components/MaxWitdthWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./ActivitiesSection.module.scss";

const activities = [
  {
    name: "toi_ke_chuyen",
    link: "",
    logo: logoKeChuyen,
  },
  {
    name: "thu_vien",
    link: "",
    logo: logoThuVien,
  },
  {
    name: "podcast",
    link: "",
    logo: logoPodcast,
  },
];

export const ActivitiesSection = () => {
  const t = useTranslations("home_page.activities_section");
  return (
    <section className={styles.section}>
      <MaxWidthWrapper className={styles.wrapper}>
        <h3 className={styles.title}>{t("title")}</h3>
        <div className={styles.activities}>
          {activities.map((a) => (
            <div key={a.name} className={styles.activity}>
              <div className={styles.logo}>
                <Image src={a.logo} alt="logo" />
              </div>
              <div>{t(a.name)}</div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
