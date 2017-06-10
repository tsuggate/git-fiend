import * as React from 'react';
import {SFC} from "react";
import {ToolsContainer} from "../tools/tools";

interface AppProps {

}

const a: any = null;

const App: SFC<AppProps> = (props: AppProps) => (
   <div>
      <ToolsContainer tools={a} />
      <p>Hello</p>
   </div>
);

export default App;