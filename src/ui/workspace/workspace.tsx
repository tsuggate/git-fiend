import * as React from "react";
import {SFC} from "react";
import './workspace.less';
import {VNode} from "../schema/schema";


export interface WorkspaceProps {
   nodes: VNode[];
}

export const Workspace: SFC<WorkspaceProps> = (props: WorkspaceProps) => (
   <div className="Workspace"
        onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
   </div>
);

function onDrop(e: React.DragEvent<HTMLDivElement>) {
   e.preventDefault();
   console.log(e.clientX, e.clientY);


   const data = e.dataTransfer.getData('targetId');

   // const target = e.target as HTMLDivElement;
   // const element = document.getElementById(data);
   //
   // if (element) {
   //    const copy = element.cloneNode(true) as HTMLDivElement;
   //    copy.id = element.id + +new Date();
   //    target.appendChild(copy);
   // }
}
