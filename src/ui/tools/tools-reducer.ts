import {ToolsState} from "./tools-data";


export type ToolsAction = Pickup;

export interface Pickup {
   type: 'PICKUP';
}

const initialState: ToolsState = {
   tools: [{id: 'set'}, {id: 'change'}]
};

export function toolsReducer(s: ToolsState = initialState, action: ToolsAction): ToolsState {
   switch (action.type) {
      case 'PICKUP':
         return s;
      default:
         return s;
   }
}
