import {ConvenientPatch} from "nodegit";
import {ChangesForCommit} from "./changes-reducer";
import {SelectPatch} from "../modified-files/modified-files-actions";


export type ChangesActions =  LoadChanges | SelectPatch;

// export interface RequestChanges {
//    type: 'REQUEST_CHANGES';
//    patch: ConvenientPatch;
// }

export interface LoadChanges {
   type: 'LOAD_CHANGES';
   changes: ChangesForCommit[];
}
