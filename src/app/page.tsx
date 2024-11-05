import { Fragment } from "react";
import Hero from "./components/hero";
import MobileOfficeVanFeatures from "./components/mobileOfficeVanFeatures";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <MobileOfficeVanFeatures />
    </Fragment>
  );
}
