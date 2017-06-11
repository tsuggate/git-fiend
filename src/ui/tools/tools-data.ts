import {NodeId} from "../schema/schema";


export interface ToolData {
   id: NodeId;
}

export interface ToolsState {
   tools: ToolData[];
}
