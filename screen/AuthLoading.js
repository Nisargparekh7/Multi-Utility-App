import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import { SplashScreen } from 'expo';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = 
    await AsyncStorage.getItem('user_type');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    
        if(userToken==='student'){
              this.props.navigation.navigate('Student');
              SplashScreen.hide();

          }else if(userToken==='faculty'){
              this.props.navigation.navigate('Faculty');
             SplashScreen.hide();
         
            }else
            { SplashScreen.hide();
              this.props.navigation.navigate('Auth');
              
            }
      
    
    SplashScreen.hide();
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}