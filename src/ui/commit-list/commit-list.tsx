import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {MapViewAction} from './commit-list-actions';
import {Commit} from 'nodegit';
import './commit-list.less';
import * as moment from 'moment';
import {getStore, CommitListProps, StoreState} from "../store/store";


export class CommitList extends React.PureComponent<CommitListProps, {}> {
   render() {
      const commits = this.props.commits.map(this.createCommitElement);

      return (
         <div className="CommitList">
            <div className="title">History</div>
            {commits}
         </div>
      );
   }

   createCommitElement = (commit: Commit, key: number) => {
      const date = moment(new Date(commit.date())).fromNow();
      const name = (commit.author() as any).name();
      let classes = 'commit';

      // console.log(commit.id().tostrS(), this.props.selectedCommit ? this.props.selectedCommit.id().tostrS() : 'null');

      if (this.props.selectedCommit && this.props.selectedCommit.id().equal(commit.id())) {
         classes += ' selected';
      }

      // const onClick = () => {
      //    getStore().dispatch({
      //       type: 'SELECT_COMMIT',
      //       commit
      //    });
      // };

      return (
         <div className={classes} key={key} onClick={() => {this.selectCommit(commit)}}>
            <div className="message">{commit.message()}</div>
            <div className="author">{date} by {name}</div>
         </div>
      );
   };

   selectCommit = (commit: Commit) => {
      getStore().dispatch({
         type: 'SELECT_COMMIT',
         commit
      });
   };
}

// function createCommitElement(commit: Commit, key: number) {
//    const date = moment(new Date(commit.date())).fromNow();
//    const name = (commit.author() as any).name();
//    let classes = 'commit';
//
//
//    const onClick = () => {
//       getStore().dispatch({
//          type: 'SELECT_COMMIT',
//          commit
//       });
//    };
//
//    return (
//       <div className={classes} key={key} onClick={onClick}>
//          <div className="message">{commit.message()}</div>
//          <div className="author">{date} by {name}</div>
//       </div>
//    );
// }

const mapStoreToProps = (state: StoreState): CommitListProps => {
   return state.mapView;
};

const mapDispatchToProps = (dispatch: Dispatch<MapViewAction>, ownProps: {}) => ({

});

export const CommitListContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(CommitList);
