import {ChangesProps, changesReducer} from "../changes/changes-reducer";
import {modifiedFilesReducer} from "../modified-files/modified-files-reducer";
import {mapViewReducer} from "../map-view/map-view-reducer";
import {combineReducers, createStore} from "redux";
import {Commit, ConvenientPatch, Oid} from "nodegit";


export interface MapViewProps {
   commits: Commit[];
   selectedCommit: Commit | null;
}

export interface ModifiedFilesProps {
   commitId: Oid | null;
   commit: Commit | null;
   patches: ConvenientPatch[];
}

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
