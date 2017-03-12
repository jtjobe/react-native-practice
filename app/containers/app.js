import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import { Text, Button, StyleSheet, View } from 'react-native';
// import { ExerciseList }     from '../components/ExerciseList/ExerciseList' 
// import { CurrentExercise }  from '../components/CurrentExercise/CurrentExercise' 

import * as reducers from '../reducers';
import ExerciseApp from './exerciseApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ExerciseApp />
      </Provider>

      // <View>
      //   <CurrentExercise />        
      //   <ExerciseList />
      // </View>
    );
  }
}