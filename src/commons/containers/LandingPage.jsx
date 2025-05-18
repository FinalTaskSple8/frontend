import { Hero } from "@/commons/components";
import React from "react";

const LandingPage = () => {
  const DUMMY_BANNER =
    "https://i.imgur.com/WPaF942.jpeg";

  return (
    <div className="landing-page">
      <Hero banner={DUMMY_BANNER} />
    </div>
  );
};

export default LandingPage;
