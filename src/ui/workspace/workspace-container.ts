import {Workspace, WorkspaceProps} from "./workspace";
import {ComponentClass} from "react";
import {connect} from "react-redux";


const mapStateToProps = (state: {}): WorkspaceProps => {
   return state;
};

export const WorkspaceContainer: ComponentClass<WorkspaceProps> = connect(
   mapStateToProps
)(Workspace);
