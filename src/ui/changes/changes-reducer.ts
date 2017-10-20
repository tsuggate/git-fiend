import {ChangesActions} from "./changes-actions";
import {ChangesForCommit, getFileChangesForPatch} from "../../data/query-repo";
import {ConvenientPatch} from "nodegit";


export interface ChangesProps {
   changes: ChangesForCommit[];
}

const initialState: ChangesProps = {
   changes: []
};

export function changesReducer(s = initialState, action: ChangesActions): ChangesProps {
   switch (action.type) {
      case 'REQUEST_CHANGES':
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
   console.log(JSON.stringify(changes, null, 3));


}