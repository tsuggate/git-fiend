import {ChangesActions} from "./changes-actions";
import {getFileChangesForPatch} from "../../data/query-repo";
import {ConvenientPatch} from "nodegit";
import {dispatch} from "../store/store";


export interface ChangesForCommit {
   oldFile: string;
   newFile: string;
   lines: LineChanges[];
}

export interface LineChanges {
   origin: string;
   content: string;
}

export interface ChangesProps {
   changes: ChangesForCommit[];
}

const initialState: ChangesProps = {
   changes: []
};

export function changesReducer(s = initialState, action: ChangesActions): ChangesProps {
   switch (action.type) {
      case 'SELECT_PATCH':
         loadChangesForPatch(action.patch).catch(e => console.log(e));
         return s;
      case 'LOAD_CHANGES':
         return {...s, changes: action.changes};
      default:
         return s;
   }
}

async function loadChangesForPatch(patch: ConvenientPatch) {
   const changes = await getFileChangesForPatch(patch);

   dispatch({
      type: 'LOAD_CHANGES',
      changes
   });
}