import BeyondYourBest from "./components/BeyondYourBest";
import { HeroSection } from "./components/HeroSection";
import { OurStory } from "./components/OurStorie";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <BeyondYourBest />
      <OurStory />
    </div>
  );
}
