import {ChangesProps, changesReducer} from "../changes/changes-reducer";
import {ModifiedFilesProps, modifiedFilesReducer} from "../modified-files/modified-files-reducer";
import {MapViewProps, mapViewReducer} from "../map-view/map-view-reducer";
import {combineReducers, createStore} from "redux";


export interface StoreState {
   mapView: MapViewProps;
   modifiedFiles: ModifiedFilesProps;
   changes: ChangesProps;
}

const indexReducer = combineReducers<StoreState>({
   mapView: mapViewReducer,
   modifiedFiles: modifiedFilesReducer,
   changes: changesReducer
});

const store = createStore(indexReducer);

export function getStore() {
   return store;
}

export const dispatch = store.dispatch;
