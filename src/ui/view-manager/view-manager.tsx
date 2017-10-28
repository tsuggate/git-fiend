import * as React from "react";
import {StoreState} from "../store/store";
import {connect} from "react-redux";
import './view-manager.less';
import {CommitListContainer} from "../commit-list/commit-list";
import {ModifiedFilesContainer} from "../modified-files/modified-files";
import {ChangesContainer} from "../changes/changes";


export class ViewManager extends React.PureComponent<StoreState, {}> {
   render() {
      return (
         <div className="ViewManager">
            <CommitListContainer />
            <ModifiedFilesContainer />
            <ChangesContainer />
         </div>
      );
   }
}

const mapStoreToProps = (state: StoreState): StoreState => {
   return state;
};

export const ViewManagerContainer = connect(
   mapStoreToProps
)(ViewManager);
