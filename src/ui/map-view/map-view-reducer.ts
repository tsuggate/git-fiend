import {MapViewAction} from './map-view-actions';
import {MapViewProps} from "../store/store";


const initialState: MapViewProps = {
   commits: [],
   selectedCommit: null
};

export function mapViewReducer(s = initialState, action: MapViewAction): MapViewProps {
   switch (action.type) {
      case 'LOAD_COMMITS':
         return {...s, commits: action.commits};
      case 'SELECT_COMMIT':
         return {...s, selectedCommit: action.commit};
      default:
         return s;
   }
}

