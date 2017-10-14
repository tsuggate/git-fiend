import {MapViewAction} from './map-view-actions';
import {Commit} from "nodegit";


export interface MapViewProps {
   commits: Commit[];
}

const initialState: MapViewProps = {
   commits: []
};

export function mapViewReducer(s: MapViewProps = initialState, action: MapViewAction): MapViewProps {
   switch (action.type) {
      case 'LOAD_COMMITS':
         return {...s, commits: action.commits};
      default:
         return s;
   }
}

