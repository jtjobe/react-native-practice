/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, Button, StyleSheet, View } from 'react-native';
import { ExerciseList }     from './app/components/ExerciseList/ExerciseList' 
import { CurrentExercise }  from './app/components/CurrentExercise/CurrentExercise' 

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <CurrentExercise />
        <ExerciseList />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);