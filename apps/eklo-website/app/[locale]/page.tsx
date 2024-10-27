import BeyondYourBest from "./components/BeyondYourBest";
import { HeroSection } from "./components/HeroSection";
import { OurStory } from "./components/OurStorie";

export default function Home() {
  return (
    <div className="LandingPage">
      <HeroSection />
      <BeyondYourBest />
      <OurStory />
    </div>
  );
}
