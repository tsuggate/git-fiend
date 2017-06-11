import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {toolsReducer} from "./tools/tools-reducer";
import App from "./index/app";
import {State} from "./index/app-reducer";


const indexReducer = combineReducers<State>({tools: toolsReducer});
const store = createStore(indexReducer);

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
