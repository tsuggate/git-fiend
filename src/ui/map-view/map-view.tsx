import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {State2} from "../index/app-reducer";
import {MapViewAction} from './map-view-actions';
import {Commit} from 'nodegit';
import './map-view.less';
import * as moment from 'moment';


export interface MapViewProps {
   commits: Commit[];
}

export class MapView extends React.PureComponent<MapViewProps, {}> {
   render() {
      const commits = this.props.commits.map(createCommitElement);

      return (
         <div className="MapView">
            <h3>History</h3>
            {commits}
         </div>
      );
   }
}

function createCommitElement(commit: Commit, key: number) {
   const date = moment(new Date(commit.date())).fromNow();
   const name = (commit.author() as any).name();

   return <div className="commit" key={key}>
      <div className="message">{commit.message()}</div>
      <div className="author">{date} by {name}</div>
   </div>;
}

const mapStateToProps = (state: State2): MapViewProps => {
   return state.mapView;
};

const mapDispatchToProps = (dispatch: Dispatch<MapViewAction>, ownProps: {}) => ({

});

export const MapViewContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(MapView);
