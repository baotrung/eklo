import { HeroSection } from "./components/HeroSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </div>
  );
}
