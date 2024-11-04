import { HeroSection } from "./components/hero-section";
import { LibrarySection } from "./components/library-section";
import { PodcastSection } from "./components/podcast-section";
import { ToiKeChuyenSection } from "./components/toi-ke-chuyen-section";

export default function ActivitiesPage() {
  return (
    <>
      <HeroSection />
      <ToiKeChuyenSection />
      <LibrarySection />
      <PodcastSection />
    </>
  );
}
