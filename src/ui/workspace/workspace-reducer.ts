import {WorkspaceProps} from "./workspace";


export type WorkspaceAction = Drop;

export interface Drop {
   type: 'DROP';
}

const initialState: WorkspaceProps = {
   nodes: []
};

export function workspaceReducer(s: WorkspaceProps = initialState, action: WorkspaceAction): WorkspaceProps {
   switch (action.type) {
      default:
         return s;
   }
}
