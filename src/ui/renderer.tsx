import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./index/app";
import {getCommits, loadModifiedFiles, openRepo} from '../data/query-repo';
import {getStore} from "./store/store";


// const indexReducer = combineReducers<Store>({
//    mapView: mapViewReducer,
//    modifiedFiles: modifiedFilesReducer,
//    changes: changesReducer
// });
//
// const store = createStore(indexReducer);

const store = getStore();
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

// export function getStore() {
//    return store;
// }
