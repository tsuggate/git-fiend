import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
// import {indexReducer} from "./index/index-reducer";
import App from "./index/index";
import {toolsReducer} from "./tools/tools-reducer";
import {State} from "./index/index-reducer";


const indexReducer = combineReducers<State>({tools: toolsReducer});
const store = createStore(indexReducer);

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
