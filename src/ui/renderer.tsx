import "./root.less";
import * as React from "react";
import {render} from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {indexReducer} from "./index/index-reducer";
import App from "./index/index";


const store = createStore(indexReducer);

render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
