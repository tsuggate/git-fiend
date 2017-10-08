import {MapViewState} from "./map-view-data";


export type MapViewAction = any;


const initialState: MapViewState = {
   commits: [{
      hash: '55advc',
      author: 'Toby',
      date: 1507435040154,
      message: 'more code',
      branch: 'dev2'
   }]
};

export function mapViewReducer(s: MapViewState = initialState, action: MapViewAction): MapViewState {
   switch (action.type) {
      default:
         return s;
   }
}

