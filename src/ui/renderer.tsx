import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import Index from "./index/index";
import {getCommits, loadModifiedFiles, openRepo} from '../data/query-repo';
import {getStore} from "./store/store";
import {renderMainWindowMenu} from "./global-menu";
import {pathToThisRepo} from "./constants";
// import installExtension, {REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} from 'electron-devtools-installer';
import {setupReactDevToolsPath} from "../util/setup-dev-tools";


const store = getStore();
loadInitialState().catch(e => console.log(e));

render(
   <Provider store={store}>
      <Index />
   </Provider>,
   document.getElementById('root')
);

async function loadInitialState() {
   // installExtension(REACT_DEVELOPER_TOOLS)
   //    .then((name) => console.log(`Added Extension:  ${name}`))
   //    .catch((err) => console.log('An error occurred: ', err));
   //
   // installExtension(REDUX_DEVTOOLS)
   //    .then((name) => console.log(`Added Extension:  ${name}`))
   //    .catch((err) => console.log('An error occurred: ', err));

   setupReactDevToolsPath();
   renderMainWindowMenu();

   const repo = await openRepo(pathToThisRepo);
   const commits = await getCommits(repo, 10);

   store.dispatch({type: 'LOAD_COMMITS', commits});

   // const modifiedFiles = await loadModifiedFiles(repo);

   // store.dispatch({type: 'LOAD_MODIFIED_FILES', ...modifiedFiles});
}

