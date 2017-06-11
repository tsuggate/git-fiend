import * as React from "react";
import {SFC} from "react";
import {ToolData} from "./tools-data";
import './tools.less';


export interface ToolsProps {
   tools: ToolData[];
}

export const Tools: SFC<ToolsProps> = (props: ToolsProps) => (
   <div className="Tools">
      <div className="tool">{buildTools(props.tools)}</div>
   </div>
);

function buildTools(tools: ToolData[]) {
   return tools.map((t, i) => <div key={i} draggable>{t.id}</div>);
}
