import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<span>Categories are loading......</span>}>
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
