import { Fragment } from "react";
import Hero from "./components/hero";
import MobileOfficeVanFeatures from "./components/mobileOfficeVanFeatures";
import { WhyChooseUs } from "./components/whyChooseUs";
import { LandingContactUsForm } from "./components/LandingContactUsForm";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <WhyChooseUs />
      <MobileOfficeVanFeatures />
      <LandingContactUsForm />
    </Fragment>
  );
}
