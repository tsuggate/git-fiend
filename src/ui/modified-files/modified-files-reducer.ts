import {Commit, ConvenientPatch, Oid} from "nodegit";
import {ModifiedFilesAction} from "./modified-files-actions";
import {getPatchesForCommit, getRepo} from "../../data/query-repo";
import {dispatch} from "../store/store";


export interface ModifiedFilesProps {
   commitId: Oid | null;
   commit: Commit | null;
   patches: ConvenientPatch[];
}

const initialState: ModifiedFilesProps = {
   commitId: null,
   commit: null,
   patches: []
};

export function modifiedFilesReducer(s = initialState, action: ModifiedFilesAction): ModifiedFilesProps {
   switch (action.type) {
      case 'LOAD_MODIFIED_FILES':
         return {...s, patches: action.patches, commitId: action.commitId, commit: action.commit};
      case 'LOAD_MODIFIED_FILES_COMMIT':
         loadModifiedFilesForCommit(action.commitId).catch(e => console.log(e));
         return s;
      case 'CLOSE_CHANGES_VIEW':
         return {...s, commitId: null, commit: null};
      default:
         return s;
   }
}

async function loadModifiedFilesForCommit(commitId: Oid) {
   const repo = getRepo();

   if (repo) {
      const commit = await repo.getCommit(commitId);
      const patches = await getPatchesForCommit(commit);

      dispatch({
         type: 'LOAD_MODIFIED_FILES',
         commit,
         commitId,
         patches
      });
   }
}
