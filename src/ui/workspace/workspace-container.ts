import {Workspace, WorkspaceProps} from "./workspace";
import {ComponentClass} from "react";
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

export const WorkspaceContainer: ComponentClass<WorkspaceProps> = connect(
   mapStateToProps,
   mapDispatchToProps
)(Workspace);

