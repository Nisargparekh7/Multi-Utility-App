import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screen/LoginScreen';
import Dashboard from './screen/Dashboard';
import Contacts from './screen/Contacts';
import ViewContact from './screen/ViewContact';
export default class App extends React.Component {
  render() {
    return (
       <AppStackNavigator/>
    );
  }
}
const AppStackNavigator = createStackNavigator({
   
   // LoginScreen:LoginScreen, 
     
   Dashboard:Dashboard
  // Contacts:Contacts,
      //ViewContact:ViewContact,
},{
  mode: 'modal',
  headerMode: 'none',
})
 