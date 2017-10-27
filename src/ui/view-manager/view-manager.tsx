import * as React from "react";
import {StoreState} from "../store/store";
import {connect} from "react-redux";
import './view-manager.less';
import {MapViewContainer} from "../map-view/map-view";
import {ModifiedFilesContainer} from "../modified-files/modified-files";
import {ChangesContainer} from "../changes/changes";
import {logCommit} from "../../data/query-repo";


export class ViewManager extends React.PureComponent<StoreState, {}> {
   render() {
      console.log(this.props.modifiedFiles);

      if (this.props.modifiedFiles.commit !== null) {
         logCommit(this.props.modifiedFiles.commit);

         return (
            <div className="ViewManager">
               <ModifiedFilesContainer />
               <ChangesContainer />
            </div>
         );
      }
      else {
         return (
            <div className="ViewManager">
               <MapViewContainer />
               <ModifiedFilesContainer />
            </div>
         );
      }


   }
}

const mapStoreToProps = (state: StoreState): StoreState => {
   return state;
};

export const ViewManagerContainer = connect(
   mapStoreToProps
)(ViewManager);
