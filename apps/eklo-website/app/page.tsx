import styles from "./page.module.css";
import { EkloButton } from "eklo-ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>header</header>
      <main className={styles.main}>
        <EkloButton variant="outlined" color="primary" label="Eklo" />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
