import * as React from "react";
import {SFC} from "react";
import {VNodeI} from "../schema/schema";
import './vnode.less';


interface VNodeProps {
   node: VNodeI;
   index: number;
}

export const VNode: SFC<VNodeProps> = ({node, index}: VNodeProps) => (
   <div className="VNode" key={index} style={{left: node.position.x, top: node.position.y}}>
      {node.id}
   </div>
);