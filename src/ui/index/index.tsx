import "./index.less";
import * as React from "react";
import {SFC} from "react";
import {MapViewContainer} from "../map-view/map-view";
import {ModifiedFilesContainer} from "../modified-files/modified-files";
import {ViewManagerContainer} from "../view-manager/view-manager";


const Index: SFC<{}> = () => (
   <div className="Index">
      <ViewManagerContainer />
   </div>
);

export default Index;
