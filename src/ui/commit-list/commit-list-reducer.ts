import {MapViewAction} from './commit-list-actions';
import {CommitListProps} from "../store/store";


const initialState: CommitListProps = {
   commits: [],
   selectedCommit: null
};

export function mapViewReducer(s = initialState, action: MapViewAction): CommitListProps {
   switch (action.type) {
      case 'LOAD_COMMITS':
         return {...s, commits: action.commits};
      case 'SELECT_COMMIT':
         return {...s, selectedCommit: action.commit};
      default:
         return s;
   }
}

