import * as React from "react";
import {ModifiedFilesProps} from "./modified-files-reducer";
import {Store} from "../index/app-reducer";
import {connect, Dispatch} from "react-redux";
import {ModifiedFilesAction} from "./modified-files-actions";
import {ConvenientPatch} from "nodegit";
import './modified-files.less';
import {getFileChangesForPatch} from '../../data/query-repo';


export class ModifiedFiles extends React.PureComponent<ModifiedFilesProps, {}> {
   render() {
      const files = this.props.patches.map(createModifiedFileElement);

      return (
         <div className="ModifiedFiles">
            {files}
         </div>
      );
   }
}

function getPatchTypeString(patch: ConvenientPatch): string {
   if (patch.isAdded()) {
      return 'added';
   }
   else if (patch.isDeleted()) {
      return 'deleted';
   }
   else if (patch.isModified()) {
      return 'modified';
   }
   else {
      return '???';
   }
}

async function onClickModifiedFile(patch: ConvenientPatch) {
   const changes = await getFileChangesForPatch(patch);
   console.log(JSON.stringify(changes, null, 3));
}

function createModifiedFileElement(patch: ConvenientPatch, key: number) {
   return (
      <div className="diffFile" key={key} onClick={async () => {await onClickModifiedFile(patch)}}>
         {patch.newFile().path()} ({getPatchTypeString(patch)})
      </div>
   );
}

const mapStoreToProps = (state: Store): ModifiedFilesProps => {
   return state.modifiedFiles;
};

const mapDispatchToProps = (dispatch: Dispatch<ModifiedFilesAction>, ownProps: {}) => ({

});

export const ModifiedFilesContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(ModifiedFiles);
