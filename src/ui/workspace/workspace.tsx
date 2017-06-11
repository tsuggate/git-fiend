import * as React from "react";
import {SFC} from "react";
import './workspace.less';


export interface WorkspaceProps {

}

export const Workspace: SFC<{}> = (props: WorkspaceProps) => (
   <div className="Workspace"
        onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      Workspace!
   </div>
);

function onDrop(e: React.DragEvent<HTMLDivElement>) {
   e.preventDefault();
   const data = e.dataTransfer.getData('targetId');

   const target = e.target as HTMLDivElement;

   const element = document.getElementById(data);

   if (element) {
      const copy = element.cloneNode(true) as HTMLDivElement;
      copy.id = element.id + +new Date();
      target.appendChild(copy);
   }
}
