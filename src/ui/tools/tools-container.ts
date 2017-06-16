import {connect} from 'react-redux';
import {Tools, ToolsProps} from './tools';
import {State} from '../index/app-reducer';


const mapStateToProps = (state: State): ToolsProps => {
   return state.tools;
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export const ToolsContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Tools);