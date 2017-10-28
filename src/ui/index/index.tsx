import "./index.less";
import * as React from "react";
import {SFC} from "react";
import {ViewManagerContainer} from "../view-manager/view-manager";


const Index: SFC<{}> = () => (
   <div className="Index">
      <ViewManagerContainer />
   </div>
);

export default Index;
