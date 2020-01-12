import React, { Component } from 'react';
import { View, Text ,Image} from 'react-native';

export default class Attendance extends Component {
  static navigationOptions = {
    header: null, 
  };
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible:true,
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
     
     <Text
                style={{
                  fontWeight: 'bold',
                  paddingTop: 200,
                  paddingLeft:80,
                  fontSize: 18,
                  color: 'rgba(0,0,0,0.8)',
                }}>
                
                </Text>
                <Image
                source={require('../assets/dailog5.gif')}
                style={{ height: 200, width: 250, marginLeft: 60}}
              />

      </View>
    );
  }
}
