import {connect} from "react-redux";
import {ToolsState} from "./tools-data";
import {Tools, ToolsProps} from "./tools";
import {ComponentClass} from "react";


const mapStateToProps = (state: {tools: ToolsProps}): ToolsState => {
   return state.tools;
};

export const ToolsContainer: ComponentClass<ToolsProps> = connect(
   mapStateToProps, {}
)(Tools);