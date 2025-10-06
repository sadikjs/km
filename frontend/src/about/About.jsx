import Picture from "./components/Picture.jsx";
import Content from "./components/Content.jsx";
import Info from "./components/Info.jsx";
import Education from "./components/Education.jsx";
import { useState } from "react";
function AboutPage() {

  return (
    <div className="w-full flex flex-row justify-center items-center gap-x-4">
      <div className="w-4/5 flex flex-col justify-center items-center gap-y-2">
            <Picture />
            <Content />
            <Info/>
            <Education/>
      </div>
    </div>
  );
}

export default AboutPage