import {connect} from "react-redux";
import {ToolsState} from "./tools-data";
import {Tools, ToolsProps} from "./tools";
import {ComponentClass} from "react";
import {State} from "../index/app-reducer";


const mapStateToProps = (state: State): ToolsState => {
   return state.tools;
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export const ToolsContainer: ComponentClass<ToolsProps> = connect(
   mapStateToProps,
   mapDispatchToProps
)(Tools);