import React, { Component } from 'react';
import { View, Text,StyleSheet,Linking,Dimensions } from 'react-native';
import{Card,ListItem} from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ViewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  static navigationOptions = () => ({
    title: 'Student Data           ',
     headerStyle: {
    width : Dimensions.get('window').width,
    
      backgroundColor: '#2196f3'
 
    },
      headerTintColor: '#fff'
  });
  mail=(url)=>{
   Linking.canOpenURL(url).then(supported => {
   if (!supported) {
    console.log('Can\'t handle url: ' + url);
   } else {
    return Linking.openURL(url);
   }
 }).catch(err => console.error('An error occurred', err)); 
  }
  callNumber = (url) =>{
   Linking.canOpenURL(url).then(supported => {
   if (!supported) {
    console.log('Can\'t handle url: ' + url);
   } else {
    return Linking.openURL(url);
   }
 }).catch(err => console.error('An error occurred', err));
}

  render() {
         const { navigation } = this.props;
        const data = navigation.getParam('data', 'NO-Data');

    return (
      <View style={styles.container}>
      <Card>
    <ListItem
    title={data.StudentName}
    titleStyle={{fontSize:15,}}   
    subtitle={data.RollId}
    chevronColor="white"
        chevron
    />
      <ListItem
      leftIcon={{ name:'call',size:20,color:'black' }}
      title='Call Student '
      subtitle={data.phone}
      subtitleStyle={{paddingLeft:70}} 
      onPress={()=> this.callNumber(`tel:+91${data.phone}`)}
     titleStyle={{paddingLeft:60}} 
         
        chevronColor="white"
        chevron
      />
       <ListItem
      leftIcon={{ name:'call',size:20,color:'black' }}
      title='Call Father'
      subtitle={data.fphone}
      subtitleStyle={{paddingLeft:70}}
      onPress={()=> this.callNumber(`tel:+91${data.fphone}`)}
     titleStyle={{paddingLeft:60}}    
        chevronColor="white"
        chevron
      />
       <ListItem
      leftIcon={{ name:'call',size:20,color:'black' }}
      title='Call Mother'
      subtitle={data.mphone}
      subtitleStyle={{paddingLeft:70}}
      onPress={()=> this.callNumber(`tel:+91${data.mphone}`)}
     titleStyle={{paddingLeft:60}}    
        chevronColor="white"
        chevron
      />
       <ListItem
      leftIcon={{ name:'mail',size:20,color:'black' }}
      title='Mail Student'
      onPress={()=>{ 
  this.mail(`mailto:${data.pemail}`);}}
     titleStyle={{paddingLeft:60}}    
        chevronColor="white"
        chevron
      />
       <ListItem
      leftIcon={{ name:'mail',size:20,color:'black' }}
      title='Mail Father'
      onPress={()=>{ 
  this.mail(`mailto:${data.femail}`);}}
     titleStyle={{paddingLeft:60}}    
        chevronColor="white"
        chevron
      />
      <View style={{flexDirection:'row'}}><Icon name="location-city" style={{fontSize:20,padding:10}}/>
      <Text style={{fontSize:15,padding:10}}>{data.tadd} </Text>
      </View>
         
      </Card>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     flex: 1,
     marginTop: 15,
     backgroundColor:'white'

    
  },


});