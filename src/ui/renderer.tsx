import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {toolsReducer} from "./tools/tools-reducer";
import App from "./index/app";
import {State, State2} from "./index/app-reducer";
import {workspaceReducer} from "./workspace/workspace-reducer";
import {mapViewReducer} from "./map-view/map-view-reducer";
import {loadCommits} from '../data/query-repo';


const indexReducer = combineReducers<State2>({
   mapView: mapViewReducer
});

const store = createStore(indexReducer);

loadCommits(10).then(commits => {
   store.dispatch({type: 'LOAD_COMMITS', commits});
});

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
