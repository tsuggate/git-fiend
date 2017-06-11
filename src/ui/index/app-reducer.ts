import {ToolsState} from "../tools/tools-data";
import {WorkspaceProps} from "../workspace/workspace";


export interface State {
   tools: ToolsState;
   workspace: WorkspaceProps;
}
