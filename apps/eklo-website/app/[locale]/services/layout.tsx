import { HeroSection } from "./components/hero-section";
import { OtherActivitesSection } from "./components/other-activities-section";
interface Props {
  children: React.ReactNode;
}

export default function ServicesLayout({ children }: Props) {
  return (
    <>
      <HeroSection />
      {children}
      <OtherActivitesSection />
    </>
  );
}
