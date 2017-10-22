import * as React from "react";
import {ModifiedFilesProps} from "./modified-files-reducer";
import {connect, Dispatch} from "react-redux";
import {ModifiedFilesAction} from "./modified-files-actions";
import {ConvenientPatch} from "nodegit";
import './modified-files.less';
import {dispatch, StoreState} from "../store/store";
import {ChangesContainer} from "../changes/changes";


export class ModifiedFiles extends React.PureComponent<ModifiedFilesProps, {}> {
   render() {
      const files = this.props.patches.map(createModifiedFileElement);
      const message = this.props.commit ? this.props.commit.message() : '';

      return (
         <div className="ModifiedFiles">

            <div className="CommitInfo">
               {message}
            </div>

            <div className="listAndChanges">
               <div>
                  {files}
               </div>
               <ChangesContainer />
            </div>
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
   dispatch({type: 'REQUEST_CHANGES', patch});
}

function createModifiedFileElement(patch: ConvenientPatch, key: number) {
   return (
      <div className="diffFile" key={key} onClick={async () => {await onClickModifiedFile(patch)}}>
         {patch.newFile().path()} ({getPatchTypeString(patch)})
      </div>
   );
}

const mapStoreToProps = (state: StoreState): ModifiedFilesProps => {
   return state.modifiedFiles;
};

const mapDispatchToProps = (dispatch: Dispatch<ModifiedFilesAction>, ownProps: {}) => ({

});

export const ModifiedFilesContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(ModifiedFiles);
