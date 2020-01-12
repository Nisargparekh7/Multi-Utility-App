import React, { Component } from 'react';
import { View,AsyncStorage} from 'react-native';
import{Card,Header,Button,Divider} from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Setting extends Component {
  static navigationOptions = {
    header: null, 
  };
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible:true,
    };
  }
  _sgout= async () => {
     await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header
centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
outerContainerStyles={{ backgroundColor: 'red' }}
/>
        <View style={{justifyContent:'center'}}>


    <View  style={{backgroundColor:'white', justifyContent: 'center',paddingTop:20
    }}>
             <Button  
             
            backgroundColor="white"
            title ='About'
            textStyle={{color:"black" ,paddingRight:'80%'}}
             buttonStyle={{paddingBottom:25}}
            rightIcon={{name: 'info',color:"#808080"}}
            onPress={()=>this.props.navigation.navigate('About')}
            
             />
           <Divider style={{ backgroundColor:'#d3d3d3',width:'90%',alignSelf:'center'}} />
            <Button  
            title='Logout'
            onPress={this._sgout}
            textStyle={{color:"black",paddingRight:'80%'}}
            backgroundColor='white'
            buttonStyle={{paddingBottom:30}}
            rightIcon={{name: 'touch-app',color:"#808080"}}
             />
</View>
</View>
    </View>

    );
  }
}
