import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';

export default class Result extends Component {
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
      <View style={{flex:1}}>
      <Dialog 
    visible={this.state.dialogVisible} 
    title="Under Developement"
    onTouchOutside={() => this.setState({dialogVisible: false})} >
    <View>
       <Text>Comming Soon........7</Text>
    </View>
</Dialog>
{//bdmfbdsm
}

      </View>
    );
  }
}
