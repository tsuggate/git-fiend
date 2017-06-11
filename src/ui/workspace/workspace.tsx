import * as React from "react";
import {SFC} from "react";
import './workspace.less';
import {VNodeI} from "../schema/schema";
import {VNode} from "../vnode/vnode";


export interface WorkspaceProps {
   nodes: VNodeI[];
   placeVNode: () => void
}

export const Workspace: SFC<WorkspaceProps> = (props: WorkspaceProps) => (
   <div className="Workspace"
        onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
      {drawNodes(props.nodes)}
   </div>
);

// TODO: Make into component
function drawNodes(nodes: VNodeI[]) {
   return nodes.map((n, i) =>
      <VNode node={n} index={i} key={i} />
   );
}

function onDrop(e: React.DragEvent<HTMLDivElement>) {
   e.preventDefault();
   console.log(e.clientX, e.clientY);


   // const data = e.dataTransfer.getData('targetId');
   //
   // const target = e.target as HTMLDivElement;
   // const element = document.getElementById(data);
   //
   // if (element) {
   //    const copy = element.cloneNode(true) as HTMLDivElement;
   //    copy.id = element.id + +new Date();
   //    target.appendChild(copy);
   // }
}
