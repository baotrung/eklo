import { DetailSection } from "./components/detail-section";
import { HeroSection } from "./components/hero-section";
import styles from "./page.module.scss";

export default function WorkshopPage() {
  return (
    <div className={styles.workshop}>
      <HeroSection />
      <DetailSection />
    </div>
  );
}
