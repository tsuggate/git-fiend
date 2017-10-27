import {Commit, ConvenientPatch, Oid} from "nodegit";


export type ModifiedFilesAction = LoadModifiedFiles | LoadModifiedFilesCommit | CloseChangesView;

export interface LoadModifiedFiles {
   type: 'LOAD_MODIFIED_FILES';
   patches: ConvenientPatch[];
   commitId: Oid;
   commit: Commit;
}

export interface LoadModifiedFilesCommit {
   type: 'LOAD_MODIFIED_FILES_COMMIT';
   commitId: Oid;
}

export interface CloseChangesView {
   type: 'CLOSE_CHANGES_VIEW';
}
