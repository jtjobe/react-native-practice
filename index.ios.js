/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <LittleThings name='Bob' />
        <LittleThings name='BobA' />
        <LittleThings name='BobB' />
        <LittleThings name='BobC' />
        <LittleThings name='BobD' />
        <LittleThings name='BobE' />
      </View>
    );
  }
}

class LittleThings extends Component {
  render () {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
