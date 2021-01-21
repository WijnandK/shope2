import React, { Fragment, useState } from "react";
import Slidesbuild from "../components/SlideBuilder/Slidesbuild"

import Mainback from "../components/Mainbacks/Mainback";
 import Backslide from "../components/Backslides/Backslide"
const Frontmain = (props) => {
  const [index, setIndex] = useState(0);

  const setNewTitle = (i) => {
    setIndex(i);
  };

  return (
    <Fragment>
        <Backslide caseIndex={index}/>
      <Slidesbuild setIndexback={setNewTitle} />
      <Mainback caseIndex={index} />
          

    </Fragment>
  );
};

export default Frontmain;
