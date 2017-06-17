import {Workspace, WorkspaceProps} from "./workspace";
import {connect} from "react-redux";
import {State} from "../index/app-reducer";


const mapStateToProps = (state: State): WorkspaceProps => {
   return state.workspace;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
   placeVNode: () => {
      console.log(ownProps);
   }
});

export const WorkspaceContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Workspace);
