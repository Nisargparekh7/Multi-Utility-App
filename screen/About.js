import React, { Component } from 'react';
import { View, Text ,Image,ScrollView} from 'react-native';
import{Card,Header} from "react-native-elements";
export default class About extends Component {
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
    
<View style={{flex :1}}>
<Header
centerComponent={{ text: 'About', style: { color: '#fff' } }}
outerContainerStyles={{ backgroundColor: 'red' }}
/>
<ScrollView contentContainerStyle={{paddingBottom:30}}>
  
    <Card containerStyle={{borderRadius:2}} >
        <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontWeight:"bold",paddingBottom:5}}>Our Team</Text>
            <View style={{height:5,width:20,borderRadius:3,backgroundColor:'red'}} />
            </View>
            <View style={{flexDirection:'row',paddingTop:50,backgroundColor:"white"}}>
                <View style={{paddingRight:20,paddingLeft:20,alignItems:'center',justifyContent:'center'}}>
                 <Image
                source={require('../assets/m.jpg')}
                style={{ height: 70, width: 70, borderRadius:100,borderColor:"red",borderWidth:2
                }}
                 />
                 <Text style={{paddingTop:10,fontWeight:'bold'}}> Satvik Padhiyar</Text>
                 
                 <Text style={{paddingTop:10}}> Developer</Text>

            </View>
             <View style={{paddingLeft:20,paddingRight:20,alignItems:'center',justifyContent:'center'}}>
                 <Image
                source={require('../assets/nisarg.jpg')}
                style={{ height: 70, width: 70, borderRadius:100,borderColor:"red",borderWidth:2
                }}
                 />
                  <Text style={{paddingTop:10,fontWeight:'bold'}}>Nisarg Parekh </Text>
                  
                 <Text style={{paddingTop:10}}> UX Developer </Text>
                </View>

            </View>
<View>
    <Text style={{fontWeight:'bold',justifyContent:'center',alignItems:'center',paddingLeft:110,paddingTop:30}} > Guided by </Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',paddingTop:5}}>
 <View style={{height:5,width:20,borderRadius:3,backgroundColor:'red'}} />
      </View>      

             <View style={{flexDirection:'row',paddingTop:50,backgroundColor:"white"}}>
            
            
            <View style={{paddingRight:30,paddingLeft:30,alignItems:'center',justifyContent:'center'}}>
            <Image
                source={require('../assets/amitsir.jpg')}
                style={{ height: 70, width: 70, borderRadius:150,borderColor:"red",borderWidth:2
                }}
         />
             <Text style={{paddingTop:10}}>Amit Ganatra </Text>
             
             <Text style={{paddingTop:10,fontSize:10}}>DEAN - FTE{'\n'} Principal-{'\n'}DEPSTAR</Text>

            </View>
            <View style={{paddingRight:30,alignItems:'center',justifyContent:'center',paddingLeft:30,backgroundColor:'white'}}>
            <Image
                source={require('../assets/p1.jpg')}
                style={{ height: 70, width: 70, borderRadius:150,borderColor:"red",borderWidth:2
                }}
         />
             <Text>Parth Goel </Text>

                 <Text style={{paddingTop:10,fontSize:10}}> Assistant{'\n'} Proferssor{'\n'} DEPSTAR</Text>
            </View>





       </View>

    </Card>
    <Card>

<View style={{justifyContent:'center',alignItems:'center',paddingTop:5}}>
<Text style={{fontWeight:'bold',paddingTop:10,paddingBottom:5}} > Mission </Text>
        <View style={{height:5,width:20,borderRadius:3,backgroundColor:'red',paddingTop:5}} />
      
      <View>
<Text style={{justifyContent:'center',alignItems:'center',paddingTop:10}}> 
"To prepare world-class technocrats and researchers and facilitate enhanced deployment of technology for betterment of lives."
</Text>

</View>
    </View>
    </Card>

                   <Card >

<View style={{justifyContent:'center',alignItems:'center',paddingTop:5}}>
<Text style={{fontWeight:'bold',paddingTop:10,paddingBottom:5}} > Vision </Text>
        <View style={{height:5,width:20,borderRadius:3,backgroundColor:'red',paddingTop:5}} />
      
      <View>
<Text style={{justifyContent:'center',alignItems:'center',paddingTop:10}}> 
To become a leading institute for creation and dissemination of knowledge in the frontiers of technology. 
</Text>

</View>
    </View>
    </Card>


  </ScrollView>
</View>    
    
    
    
    
    
    
    
    
    );
  }
}
