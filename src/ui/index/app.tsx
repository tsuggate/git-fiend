import "./app.less";
import * as React from "react";
import {SFC} from "react";
import {MapViewContainer} from "../map-view/map-view";
import {ModifiedFilesContainer} from "../modified-files/modified-files";


interface AppProps {

}

const App: SFC<AppProps> = (props: AppProps) => (
   <div className="App">
      <MapViewContainer />
      <ModifiedFilesContainer />
   </div>
);

export default App;
