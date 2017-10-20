import "./app.less";
import * as React from "react";
import {SFC} from "react";
import {MapViewContainer} from "../map-view/map-view";
import {ModifiedFilesContainer} from "../modified-files/modified-files";
import {ChangesContainer} from "../changes/changes";


const App: SFC<{}> = () => (
   <div className="App">
      <MapViewContainer />
      <ModifiedFilesContainer />
      <ChangesContainer />
   </div>
);

export default App;
