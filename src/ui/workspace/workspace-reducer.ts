import {WorkspaceProps} from "./workspace";
import {NodeId, NodePosition} from "../schema/schema";


export type WorkspaceAction = Drop;

export interface Drop {
   type: 'DROP';
   id: NodeId;
   position: NodePosition;
}

const initialState: WorkspaceProps = {
   nodes: [{
      id: "set",
      position: {x: 508, y: 200}
   }],
   placeVNode: () => {}
};

export function workspaceReducer(s: WorkspaceProps = initialState, action: WorkspaceAction): WorkspaceProps {
   switch (action.type) {
      case 'DROP':
         return {...s, nodes: [...s.nodes, {id: action.id, position: action.position}]};
      default:
         return s;
   }
}
