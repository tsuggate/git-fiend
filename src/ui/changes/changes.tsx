import * as React from "react";
import './changes.less';
import {connect, Dispatch} from "react-redux";
import {ChangesActions} from "./changes-actions";
import {ChangesForCommit, ChangesProps} from "./changes-reducer";
import {dispatch, StoreState} from "../store/store";


export class Changes extends React.PureComponent<ChangesProps, {}> {
   render() {
      const changes = createChanges(this.props.changes);

      return (
         <div className="Changes">
            {changes}
            <div onClick={this.onClickClose}>X</div>
         </div>
      );
   }

   onClickClose = () => {
      dispatch({type: 'CLOSE_CHANGES_VIEW'});
   }
}

function createChanges(changes: ChangesForCommit[]) {
   return changes.map(createChangesForFile);
}

function createChangesForFile(changes: ChangesForCommit, key: number) {
   const lines = changes.lines.map((line, key) => {
      return (
         <div key={key}>
            {line.origin}{line.content}
         </div>
      );
   });

   return (
      <div className="changesForFile" key={key}>
         {lines}
      </div>
   );
}

const mapStoreToProps = (state: StoreState): ChangesProps => {
   return state.changes;
};

const mapDispatchToProps = (dispatch: Dispatch<ChangesActions>, ownProps: {}) => ({

});

export const ChangesContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(Changes);
