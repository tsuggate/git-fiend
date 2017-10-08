import {ToolsState} from "../tools/tools-data";
import {WorkspaceProps} from "../workspace/workspace";
import {MapViewState} from "../map-view/map-view-data";


export interface State {
   tools: ToolsState;
   workspace: WorkspaceProps;
}

export interface State2 {
   mapView: MapViewState;
}
