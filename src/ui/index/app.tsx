import "./app.less";
import * as React from "react";
import {SFC} from "react";
import {WorkspaceContainer} from "../workspace/workspace";
import {ToolsContainer} from "../tools/tools";
import {MapViewContainer} from "../map-view/map-view";


interface AppProps {

}

const App: SFC<AppProps> = (props: AppProps) => (
   <div className="App">
      <MapViewContainer />
   </div>
);

export default App;
