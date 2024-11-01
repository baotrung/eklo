import { DetailSection } from "./components/detail-section";
import { ReviewsSection } from "./components/reviews-section";
import styles from "./page.module.scss";

export default function WorkshopPage() {
  return (
    <div className={styles.coaching}>
      <DetailSection />
      <ReviewsSection />
    </div>
  );
}
