import * as React from "react";
import {VNodeI} from "../schema/schema";
import "./vnode.less";


interface VNodeProps {
   node: VNodeI;
   index: number;
}

export class VNode extends React.PureComponent<VNodeProps, {}> {
   render() {
      const {node, index} = this.props;

      return (
         <div className="VNode" key={index} style={{left: node.position.x, top: node.position.y}}>
            {node.id}
         </div>
      );
   }
}
