/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, Button, StyleSheet, View } from 'react-native';

class CurrentExerciseBox extends Component {
  constructor(props) {
    super(props)
    // Beware of this pattern, as it effectively "forks" the props and can lead to bugs. Instead of syncing props to state, you often want to lift the state up.
    this.state = { 
      currentExerciseIndex: 0,
      currentExercise: exercises[0]
    };
    this.handleChange = this.handleChange.bind(this);
    this.getNextExercise = this.getNextExercise.bind(this);
  }

  handleChange(e) {
    // could things could get out of sync here? since not using prevState?
    var nextExercise = this.getNextExercise(this.state);

    this.setState((prevState, props) => ({
      currentExerciseIndex: nextExercise.index,
      currentExercise: nextExercise.exercise
    }));
  }

  getNextExercise(state) {
    var nextExerciseIndex = state.currentExerciseIndex + 1;

    if (nextExerciseIndex >= exercises.length) {
      nextExerciseIndex = 0;
    }

    return {
      index: nextExerciseIndex,
      exercise: exercises[nextExerciseIndex]
    }
  }

  render() {
    let currentExercise = this.state.currentExercise;

    return (
      <View>
        <Text>CurrentExerciseBox</Text>
        <Text>Current: { currentExercise.name }</Text>
        <Button onPress={ this.handleChange } title="Next" />
      </View>
    )
  }
}

class ExerciseList extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var exerciseList = exercises.map(function(item, index) {
      return (
        <ExerciseListItem key={ item.id } exercise={ item } />
      )
    });

    return (
      <View>
        { exerciseList }
      </View>
    )
  }
}

class ExerciseListItem extends Component {
  render() {
    return (
      <View style={ styles.listItemRow }>
        <Text>{this.props.exercise.name}  |  {this.props.exercise.metrics.reps}</Text>
      </View>
    );
  }
}

const exercises = [
  {
    id: 1,
    name: 'Jumping Jacks',
    metrics: {
      reps: 40
    }
  },
  {
    id: 2,
    name: 'Squats',
    metrics: {
      reps: 30
    }
  },
  {
    id: 3,
    name: 'Push Ups',
    metrics: {
      reps: 20
    }
  }
]

const styles = StyleSheet.create({
  currentExercise: {
    marginTop: 50
  },
  exerciseList: {
    marginTop: 300,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black'
  },
  listItemRow: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderBottomWidth: 0,
    padding: 10,
  }
});


class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <View style={styles.currentExercise}>
          <CurrentExerciseBox />
        </View>
        <View style={styles.exerciseList}>
          <ExerciseList/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);