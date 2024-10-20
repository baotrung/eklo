import { HeroSection } from "./components/HeroSection";
import styles from "./page.module.css";
import { Button, HeaderBar } from "eklo-ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <footer className={styles.footer}></footer>
    </div>
  );
}
