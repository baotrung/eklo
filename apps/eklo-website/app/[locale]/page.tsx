import { ActivitiesSection } from "./components/ActivitiesSection";
import BeyondYourBest from "./components/BeyondYourBest";
import { HeroSection } from "./components/HeroSection";
import { OurStory } from "./components/OurStorie";
import { ReviewsSection } from "./components/ReviewsSection";

export default function HomePage() {
  return (
    <div className="LandingPage">
      <HeroSection />
      <BeyondYourBest />
      <ActivitiesSection />
      <ReviewsSection />
      <OurStory />
    </div>
  );
}
