import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import Index from "./index/index";
import {getCommits, loadModifiedFiles, openRepo} from '../data/query-repo';
import {getStore} from "./store/store";


const store = getStore();
loadInitialState().catch(e => console.log(e));

render(
   <Provider store={store}>
      <Index />
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
