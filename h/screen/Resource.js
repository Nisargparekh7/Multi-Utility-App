import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Resource extends Component {
  static navigationOptions = {
    header: null, 
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Resource </Text>
      </View>
    );
  }
}
