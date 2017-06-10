import * as React from "react";
import {ComponentClass, SFC} from "react";
import {ToolsState} from "./tools-data";
import {connect} from "react-redux";

type ToolsProps = ToolsState;

const Tools: SFC<ToolsProps> = (props: ToolsProps) => (
   <div>
      <p>{JSON.stringify(props)}</p>
   </div>
);

const mapStateToProps = (state: ToolsProps): ToolsState => {
   console.log(state);

   return state;
};

export const ToolsContainer: ComponentClass<ToolsProps> = connect(
   mapStateToProps, {}
)(Tools);
