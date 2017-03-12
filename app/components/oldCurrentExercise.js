import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

export class CurrentExercise extends Component {
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
      <View style={styles.currentExercise}>
        <Text>CurrentExercise</Text>
        <Text>Current: { currentExercise.name }</Text>
        <Button onPress={ this.handleChange } title="Next" />
      </View>
    )
  }
}














// Stuff that needs to be moved to other files is below!

const exercises = [
  {
    id: 1, // consider key uniqueness problem if an exercise is in a routine more than once
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