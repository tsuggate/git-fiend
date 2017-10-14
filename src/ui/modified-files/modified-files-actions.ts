import {DiffFile, Oid} from "nodegit";


export type ModifiedFilesAction = LoadModifiedFiles

export interface LoadModifiedFiles {
   type: 'LOAD_MODIFIED_FILES';
   diffFiles: DiffFile[];
   commitId: Oid;
}
