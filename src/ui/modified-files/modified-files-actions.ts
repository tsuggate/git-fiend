import {Commit, ConvenientPatch, Oid} from "nodegit";
import {SelectCommit} from "../commit-list/commit-list-actions";


export type ModifiedFilesAction = LoadModifiedFiles | SelectCommit | CloseChangesView;

export interface LoadModifiedFiles {
   type: 'LOAD_MODIFIED_FILES';
   patches: ConvenientPatch[];
   commitId: Oid;
   commit: Commit;
}

// export interface LoadModifiedFilesCommit {
//    type: 'LOAD_MODIFIED_FILES_COMMIT';
//    commitId: Oid;
// }

export interface CloseChangesView {
   type: 'CLOSE_CHANGES_VIEW';
}
