import {Commit, Oid} from "nodegit";
import {ModifiedFilesAction} from "./modified-files-actions";
import {getPatchesForCommit, getRepo} from "../../data/query-repo";
import {dispatch, ModifiedFilesProps} from "../store/store";


const initialState: ModifiedFilesProps = {
   commitId: null,
   commit: null,
   patches: []
};

export function modifiedFilesReducer(s = initialState, action: ModifiedFilesAction): ModifiedFilesProps {
   switch (action.type) {
      case 'LOAD_MODIFIED_FILES':
         return {...s, patches: action.patches, commitId: action.commitId, commit: action.commit};
      case 'SELECT_COMMIT':
         loadModifiedFilesForCommit(action.commit).catch(e => console.log(e));
         return s;
      case 'CLOSE_CHANGES_VIEW':
         return {...s, commitId: null, commit: null};
      default:
         return s;
   }
}

async function loadModifiedFilesForCommit(commit: Commit) {
   const repo = getRepo();

   if (repo) {
      const patches = await getPatchesForCommit(commit);

      dispatch({
         type: 'LOAD_MODIFIED_FILES',
         commit,
         commitId: commit.id(),
         patches
      });
   }
}
