import React, { Component } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

export class ExerciseList extends Component {
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
      <View style={styles.exerciseList}>
        { exerciseList }
      </View>
    )
  }
}

export class ExerciseListItem extends Component {
  render() {
    return (
      <View style={ styles.listItemRow }>
        <Text>{this.props.exercise.name}  |  {this.props.exercise.metrics.reps}</Text>
      </View>
    );
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