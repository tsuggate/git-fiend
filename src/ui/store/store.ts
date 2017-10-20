import {changesReducer} from "../changes/changes-reducer";
import {modifiedFilesReducer} from "../modified-files/modified-files-reducer";
import {mapViewReducer} from "../map-view/map-view-reducer";
import {combineReducers, createStore} from "redux";
import {Store} from "../index/app-reducer";


const indexReducer = combineReducers<Store>({
   mapView: mapViewReducer,
   modifiedFiles: modifiedFilesReducer,
   changes: changesReducer
});

const store = createStore(indexReducer);

export function getStore() {
   return store;
}

export const dispatch = store.dispatch;
