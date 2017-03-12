import React, {Component} from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';

export default class currentExercise extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentExercise, nextExercise } = this.props;

    return (
      <View>
        <Text>Current Exercise: { currentExercise.name }</Text>        
      </View>
    );
  }
}