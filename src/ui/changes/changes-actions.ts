import {ConvenientPatch} from "nodegit";
import {ChangesForCommit} from "../../data/query-repo";


export type ChangesActions = RequestChanges | LoadChanges;

export interface RequestChanges {
   type: 'REQUEST_CHANGES';
   patch: ConvenientPatch;
}

export interface LoadChanges {
   type: 'LOAD_CHANGES';
   changes: ChangesForCommit[];
}