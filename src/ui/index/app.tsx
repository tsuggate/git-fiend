import * as React from "react";
import {SFC} from "react";
import {Any} from "../constants";
import {ToolsContainer} from "../tools/tools-container";
import {WorkspaceContainer} from "../workspace/workspace-container";
import "./app.less";


interface AppProps {

}

const App: SFC<AppProps> = (props: AppProps) => (
   <div className="App">
      <ToolsContainer />
      <WorkspaceContainer />
   </div>
);

export default App;