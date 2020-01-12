import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

export default class Remainder extends Component {
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
      <View style={{flex:1,backgroundColor:'white', justifyContent: 'center',
      alignItems: 'center'}}>
        <Image
                source={require('../assets/dailog5.gif')}
                style={{ height: 200, width: 250, marginLeft:60 }}
              />
      </View>
    );
  }
}
