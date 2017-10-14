import * as React from "react";
import {ModifiedFilesProps} from "./modified-files-reducer";
import {Store} from "../index/app-reducer";
import {connect, Dispatch} from "react-redux";
import {ModifiedFilesAction} from "./modified-files-actions";
import {DiffFile} from "nodegit";


export class ModifiedFiles extends React.PureComponent<ModifiedFilesProps, {}> {
   render() {
      const files = this.props.diffFiles.map(createModifiedFileElement);

      return (
         <div className="ModifiedFiles">
            {files}
         </div>
      );
   }
}

function createModifiedFileElement(diffFile: DiffFile, key: number) {
   return (
      <div className="diffFile" key={key}>
         {diffFile.path()}
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
