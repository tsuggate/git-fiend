import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {CommitListAction} from './commit-list-actions';
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

      if (this.props.selectedCommit && this.props.selectedCommit.id().equal(commit.id())) {
         classes += ' selected';
      }

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

const mapStoreToProps = (state: StoreState): CommitListProps => {
   return state.commitList;
};

const mapDispatchToProps = (dispatch: Dispatch<CommitListAction>, ownProps: {}) => ({

});

export const CommitListContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(CommitList);
