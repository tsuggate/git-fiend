import {MapViewProps} from "../map-view/map-view-reducer";
import {ModifiedFilesProps} from "../modified-files/modified-files-reducer";


export interface Store {
   mapView: MapViewProps;
   modifiedFiles: ModifiedFilesProps;
}
