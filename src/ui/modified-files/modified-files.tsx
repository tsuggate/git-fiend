import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {ModifiedFilesAction} from "./modified-files-actions";
import {ConvenientPatch} from "nodegit";
import './modified-files.less';
import {dispatch, ModifiedFilesProps, StoreState} from "../store/store";


export class ModifiedFiles extends React.PureComponent<ModifiedFilesProps, {}> {
   render() {
      const files = this.props.patches.map(this.createModifiedFileElement);
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
            </div>
         </div>
      );
   }

   createModifiedFileElement = (patch: ConvenientPatch, key: number) => {
      let classes = 'diffFile';

      console.log(this.props.selectedPatch === patch);
      if (this.props.selectedPatch === patch) {
         classes += ' selected';
      }

      return (
         <div className={classes} key={key} onClick={async () => {await onClickModifiedFile(patch)}}>
            {patch.newFile().path()} ({getPatchTypeString(patch)})
         </div>
      );
   };
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
   dispatch({type: 'SELECT_PATCH', patch});
}

// function createModifiedFileElement(patch: ConvenientPatch, key: number) {
//    return (
//       <div className="diffFile" key={key} onClick={async () => {await onClickModifiedFile(patch)}}>
//          {patch.newFile().path()} ({getPatchTypeString(patch)})
//       </div>
//    );
// }

const mapStoreToProps = (state: StoreState): ModifiedFilesProps => {
   return state.modifiedFiles;
};

const mapDispatchToProps = (dispatch: Dispatch<ModifiedFilesAction>, ownProps: {}) => ({

});

export const ModifiedFilesContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(ModifiedFiles);
