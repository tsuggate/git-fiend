import {ToolsAction} from "../tools/tools-reducer";
import {ToolsState} from "../tools/tools-data";


// export type IndexAction = DoNothing | ToolsAction;
//
// export interface DoNothing {
//    type: 'NOTHING';
// }
//
export interface State {
   tools: ToolsState;
}
//
// export function indexReducer(s: State, action: IndexAction): State {
//    switch (action.type) {
//       case 'NOTHING':
//          return s;
//       default:
//          return s;
//    }
// }
//
