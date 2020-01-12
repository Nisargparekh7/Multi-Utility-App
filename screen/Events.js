import React, { Component } from 'react';
import { View,Text,StyleSheet,Dimensions } from 'react-native';
import {Constants} from 'expo';
import{Card,ListItem} from "react-native-elements";
export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = () => ({
    title: '    Message           ',
    headerTintColor: '#fff',
     headerStyle: {
      
      backgroundColor: '#2196f3'
 
    },
  });
 

  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', 'NO-Data');
    return (
      <View  style={styles.container}>
        <View style={{paddingTop:10}}>
        <Card >
        <ListItem
        title={data.title}
        titleStyle={{fontSize:20,}}   
        subtitle={`${data.TIme} `}
        chevronColor="white"
        chevron
    />
    <Text style={{padding:20}}>From: {data.faculty}</Text>
    
    <Text style={{paddingLeft:20}}>{data.message}</Text>
      </Card>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,    
      paddingTop:Constants.statusBarHeight,
      backgroundColor:'white',  
  },
  
});

