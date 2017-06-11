import {ToolId} from "../tools/tools-data";


export type NodeId = ToolId;

export interface NodePosition {
   x: number;
   y: number;
}

export interface VNode {
   id: NodeId;
   position: NodePosition;
}