import * as React from "react";
import {connect, Dispatch} from "react-redux";
import {State2} from "../index/app-reducer";
import {MapViewAction} from "./map-view-reducer";

export interface MapViewProps {

}

export class MapView extends React.PureComponent<{}, {}> {
   render() {
      return (
         <div className="MapView">
            <h1>MapView</h1>
         </div>
      );
   }
}

const mapStateToProps = (state: State2): MapViewProps => {
   return state;
};

const mapDispatchToProps = (dispatch: Dispatch<MapViewAction>, ownProps: {}) => ({

});

export const MapViewContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(MapView);
