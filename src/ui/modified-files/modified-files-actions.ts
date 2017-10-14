import {ConvenientPatch, Oid} from "nodegit";


export type ModifiedFilesAction = LoadModifiedFiles

export interface LoadModifiedFiles {
   type: 'LOAD_MODIFIED_FILES';
   patches: ConvenientPatch[];
   commitId: Oid;
}
