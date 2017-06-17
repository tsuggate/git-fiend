import "./tools.less";
import * as React from "react";
import {ToolData} from "./tools-data";
import {State} from "../index/app-reducer";
import {connect, Dispatch} from "react-redux";
import {ToolsAction} from "./tools-reducer";


export interface ToolsProps {
   tools: ToolData[];
}

export class Tools extends React.PureComponent<ToolsProps, {}> {
   render() {
      return (
         <div className="Tools">
            <div className="tool">{this.buildTools()}</div>
         </div>
      );
   }

   buildTools = () => {
      const {tools} = this.props;

      return tools.map((t, i) =>
         <div key={i} id={`tool${i}`} onDragStart={this.onDragStart} draggable>
            {t.id}
         </div>
      );
   };

   onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;

      e.dataTransfer.setData('targetId', target.id);
   };
}

const mapStateToProps = (state: State): ToolsProps => {
   return state.tools;
};

const mapDispatchToProps = (dispatch: Dispatch<ToolsAction>, ownProps: {}) => ({

});

export const ToolsContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Tools);