import * as React from "react";
import './changes.less';
import {Store} from "../index/app-reducer";
import {connect, Dispatch} from "react-redux";
import {ChangesActions} from "./changes-actions";
import {ChangesProps} from "./changes-reducer";


export class Changes extends React.PureComponent<ChangesProps, {}> {
   render() {
      return (
         <div className="Changes">

         </div>
      );
   }
}

const mapStoreToProps = (state: Store): ChangesProps => {
   return state.changes;
};

const mapDispatchToProps = (dispatch: Dispatch<ChangesActions>, ownProps: {}) => ({

});

export const ChangesContainer = connect(
   mapStoreToProps,
   mapDispatchToProps
)(Changes);
