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
   return tools.map((t, i) =>
      <div key={i} id={`tool${i}`} onDragStart={onDragStart} draggable>
         {t.id}
      </div>
   );
}

function onDragStart(e: React.DragEvent<HTMLDivElement>) {
   const target = e.target as HTMLDivElement;

   e.dataTransfer.setData('targetId', target.id);
}
