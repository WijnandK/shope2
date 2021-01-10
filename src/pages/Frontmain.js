import React, { Fragment, useState } from "react";
import Slidesbuild from "../components/Slidesbuilder/Slidesbuild";
import Mainback from "../components/Mainbacks/Mainback";

const Frontmain = (props) => {
  const [index, setIndex] = useState(0);

  const setNewTitle = (i) => {
    setIndex(i);
  };

  return (
    <Fragment>
      <Slidesbuild setIndexback={setNewTitle} />
      <Mainback caseIndex={index} />
    </Fragment>
  );
};

export default Frontmain;
