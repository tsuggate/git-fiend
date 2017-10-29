import {ChangesProps, changesReducer} from "../changes/changes-reducer";
import {modifiedFilesReducer} from "../modified-files/modified-files-reducer";
import {commitListReducer} from "../commit-list/commit-list-reducer";
import {combineReducers, createStore} from "redux";
import {Commit, ConvenientPatch, Oid} from "nodegit";


export interface CommitListProps {
   commits: Commit[];
   selectedCommit: Commit | null;
}

export interface ModifiedFilesProps {
   commit: Commit | null;
   patches: ConvenientPatch[];
   selectedPatch: ConvenientPatch | null;
}

export interface StoreState {
   commitList: CommitListProps;
   modifiedFiles: ModifiedFilesProps;
   changes: ChangesProps;
}

const indexReducer = combineReducers<StoreState>({
   commitList: commitListReducer,
   modifiedFiles: modifiedFilesReducer,
   changes: changesReducer
});

const store = createStore(
   indexReducer,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
   console.log(store.getState());
});

export function getStore() {
   return store;
}

export const dispatch = store.dispatch;
