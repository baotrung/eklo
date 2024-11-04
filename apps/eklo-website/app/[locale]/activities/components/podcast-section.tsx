import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import { useTranslations } from "next-intl";
import { PodcastLogo } from "./logo/podcast-logo";
import styles from "./podcast-section.module.scss";

export const PodcastSection = () => {
  const t = useTranslations("activities_page");
  return (
    <MaxWidthContainer
      containerClassName={styles.container}
      wrapperClassname={styles.wrapper}
    >
      <PodcastLogo className={styles["logo-podcast"]} />
      <h3 className={styles.title}>Podcast Trà đá cùng Eklo</h3>
      <p className={styles.description}>{t("podcast_description")}</p>
      <iframe
        className={styles["spotify-embeded"]}
        src="https://open.spotify.com/embed/show/6hylZ6zQcHnQeOVehCoFXD?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </MaxWidthContainer>
  );
};
