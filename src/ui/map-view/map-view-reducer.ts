import {MapViewState} from "./map-view-data";
import {MapViewAction} from './map-view-actions';


// export type MapViewAction = any;


const initialState: MapViewState = {
   commits: []
};

export function mapViewReducer(s: MapViewState = initialState, action: MapViewAction): MapViewState {
   switch (action.type) {
      case 'LOAD_COMMITS':
         console.log('LOAD_COMMITS');
         return {...s, commits: action.commits};
      default:
         return s;
   }
}

