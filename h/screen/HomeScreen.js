import React, { Component } from 'react';
import { View, Text, Image,TouchableOpacity,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Permissions, Notifications } from 'expo';
// import Snackbar from 'react-native-snackbar';
import {Constants} from 'expo';
export default class HomeScreen extends Component {

  static navigationOptions = {
    headerMode:'none', 
  };
  constructor(props) { 
    super(props);    
    this.state = {
    };
  }
  _token = async () => { 
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );   
      const user = await AsyncStorage.getItem('user');

      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
      }
    
    
      if (finalStatus !== 'granted') {
        return;
      }
      let token = await Notifications.getExpoPushTokenAsync();
      
      fetch('https://depstar2.000webhostapp.com/token.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollid:'17DCE001', //user,
          token: token
        }),
      })
      .catch(error => {
          console.error(error);
        });
     
    }
  componentDidMount(){
  this._token();
  }
  render() {
    const {navigate} =this.props.navigation
    return (
      
<View style={{flex:1, paddingTop:Constants.statusBarHeight}}>

</View>
//end of main view
    );
  }
}