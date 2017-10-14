import {ConvenientPatch, Oid} from "nodegit";
import {ModifiedFilesAction} from "./modified-files-actions";


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
      default:
         return s;
   }
}
