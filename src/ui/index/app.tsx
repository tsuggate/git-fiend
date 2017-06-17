import "./app.less";
import * as React from "react";
import {SFC} from "react";
import {WorkspaceContainer} from "../workspace/workspace";
import {ToolsContainer} from "../tools/tools";


interface AppProps {

}

const App: SFC<AppProps> = (props: AppProps) => (
   <div className="App">
      <ToolsContainer />
      <WorkspaceContainer />
   </div>
);

export default App;