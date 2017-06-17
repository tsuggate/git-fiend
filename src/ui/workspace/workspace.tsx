import * as React from "react";
import "./workspace.less";
import {VNodeI} from "../schema/schema";
import {VNode} from "../vnode/vnode";
import {State} from "../index/app-reducer";
import {connect, Dispatch} from "react-redux";
import {WorkspaceAction} from "./workspace-reducer";


export interface WorkspaceProps {
   nodes: VNodeI[];
   placeVNode: () => void
}

export class Workspace extends React.PureComponent<WorkspaceProps, {}> {
   render() {
      return <div className="Workspace"
           onDragOver={(e) => e.preventDefault()} onDrop={this.onDrop}>
         {this.drawNodes()}
      </div>
   }

   drawNodes = () => {
      return this.props.nodes.map((n, i) =>
         <VNode node={n} index={i} key={i} />
      );
   };

   onDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      console.log(e.clientX, e.clientY);

      this.props.placeVNode();
   };
}

const mapStateToProps = (state: State): WorkspaceProps => {
   return state.workspace;
};

const mapDispatchToProps = (dispatch: Dispatch<WorkspaceAction>, ownProps: {}) => ({
   placeVNode: () => {
      console.log(ownProps);
   }
});

export const WorkspaceContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Workspace);
