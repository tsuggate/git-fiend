import {MapViewProps} from "../map-view/map-view-reducer";
import {ModifiedFilesProps} from "../modified-files/modified-files-reducer";
import {ChangesProps} from "../changes/changes-reducer";


export interface Store {
   mapView: MapViewProps;
   modifiedFiles: ModifiedFilesProps;
   changes: ChangesProps;
}
