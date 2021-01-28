import React, { Fragment, useState, useEffect } from "react";
import Slidesbuild from "../components/SlideBuilder/Slidesbuild"

import Mainback from "../components/Mainbacks/Mainback";
 import Backslide from "../components/Backslides/Backslide"
 import Desktopslide from "../components/Backslides/Desktopslide"
import Mainbtns from "../components/Mainbacks/Mainbtns"

const width2 = window.innerWidth
 const Frontmain = (props) => {
  console.log(width2)
        
  const [width, seewidth] = useState()
  const [index, setIndex] = useState(0);
  const [isFade, setFade] = useState(true);
  const setWindowSlide = useEffect(() => {
    
  })
  const setNewTitle = (i) => {
    setIndex(i);
    setFade(!isFade)
  };
  let slider = <Backslide caseIndex={index} />
  if (width2 > 1100) {
    slider = <Desktopslide caseIndex={index}/>
  }
  return (
    <Fragment>
        {slider}
      <Slidesbuild setIndexback={setNewTitle} />
      <Mainback caseIndex={index} />
      <Mainbtns type={index}/>

    </Fragment>
  );
};

export default Frontmain;
