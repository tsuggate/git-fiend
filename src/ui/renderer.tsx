import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import App from "./index/app";
import {Store} from "./index/app-reducer";
import {mapViewReducer} from "./map-view/map-view-reducer";
import {getCommits, loadModifiedFiles, openRepo} from '../data/query-repo';
import {modifiedFilesReducer} from "./modified-files/modified-files-reducer";


const indexReducer = combineReducers<Store>({
   mapView: mapViewReducer,
   modifiedFiles: modifiedFilesReducer
});

const store = createStore(indexReducer);


loadInitialState().catch(e => console.log(e));

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);


async function loadInitialState() {
   const repo = await openRepo();
   const commits = await getCommits(repo, 10);

   store.dispatch({type: 'LOAD_COMMITS', commits});

   const modifiedFiles = await loadModifiedFiles(repo);

   store.dispatch({type: 'LOAD_MODIFIED_FILES', ...modifiedFiles});
}

export function getStore() {
   return store;
}