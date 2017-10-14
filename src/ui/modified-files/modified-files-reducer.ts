import {DiffFile, Oid} from "nodegit";
import {ModifiedFilesAction} from "./modified-files-actions";


export interface ModifiedFilesProps {
   commitId: Oid | null;
   diffFiles: DiffFile[];
}

const initialState: ModifiedFilesProps = {
   commitId: null,
   diffFiles: []
};

export function modifiedFilesReducer(s = initialState, action: ModifiedFilesAction): ModifiedFilesProps {
   switch (action.type) {
      case 'LOAD_MODIFIED_FILES':
         return {...s, diffFiles: action.diffFiles, commitId: action.commitId};
      default:
         return s;
   }
}
