'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import CurrentExercise  from '../components/currentExercise' 
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

@connect(state => ({
  state: state.counter
}))

class ExerciseApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <CurrentExercise 
        currentExercix={state.currentExercise}
        {...actions} />        
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(ExerciseApp);
