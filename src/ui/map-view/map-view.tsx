import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {Store} from "../index/app-reducer";
import {MapViewAction} from './map-view-actions';
import {Commit} from 'nodegit';
import './map-view.less';
import * as moment from 'moment';
import {MapViewProps} from "./map-view-reducer";
import {getStore} from "../store/store";



export class MapView extends React.PureComponent<MapViewProps, {}> {
   render() {
      const commits = this.props.commits.map(createCommitElement);

      return (
         <div className="MapView">
            <div className="title">History</div>
            {commits}
         </div>
      );
   }
}

function createCommitElement(commit: Commit, key: number) {
   const date = moment(new Date(commit.date())).fromNow();
   const name = (commit.author() as any).name();

   const onClick = () => {
      getStore().dispatch({
         type: 'LOAD_MODIFIED_FILES_COMMIT',
         commitId: commit.id()
      });
   };

   return (
      <div className="commit" key={key} onClick={onClick}>
         <div className="message">{commit.message()}</div>
         <div className="author">{date} by {name}</div>
      </div>
   );
}

const mapStoreToProps = (state: Store): MapViewProps => {
   return state.mapView;
};

const mapDispatchToProps = (dispatch: Dispatch<MapViewAction>, ownProps: {}) => ({

});

export const MapViewContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(MapView);
