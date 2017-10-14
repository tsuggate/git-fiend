import {ToolsState} from "../tools/tools-data";
import {WorkspaceProps} from "../workspace/workspace";
import {MapViewProps} from "../map-view/map-view-reducer";
import {ModifiedFilesProps} from "../modified-files/modified-files-reducer";


export interface State {
   tools: ToolsState;
   workspace: WorkspaceProps;
}


export interface Store {
   mapView: MapViewProps;
   modifiedFiles: ModifiedFilesProps;
}
