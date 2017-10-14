import {ConvenientPatch, Oid} from "nodegit";
import {ModifiedFilesAction} from "./modified-files-actions";
import {getPatchesForCommit, getRepo} from "../../data/query-repo";
import {getStore} from "../renderer";


export interface ModifiedFilesProps {
   commitId: Oid | null;
   patches: ConvenientPatch[];
}

const initialState: ModifiedFilesProps = {
   commitId: null,
   patches: []
};

export function modifiedFilesReducer(s = initialState, action: ModifiedFilesAction): ModifiedFilesProps {
   switch (action.type) {
      case 'LOAD_MODIFIED_FILES':
         return {...s, patches: action.patches, commitId: action.commitId};
      case 'LOAD_MODIFIED_FILES_COMMIT':
         loadModifiedFilesForCommit(action.commitId).catch(e => console.log(e));
         return s;
      default:
         return s;
   }
}

async function loadModifiedFilesForCommit(commitId: Oid) {
   const repo = getRepo();

   if (repo) {
      const commit = await repo.getCommit(commitId);

      const patches = await getPatchesForCommit(commit);

      getStore().dispatch({
         type: 'LOAD_MODIFIED_FILES',
         commitId,
         patches
      });
   }
}
