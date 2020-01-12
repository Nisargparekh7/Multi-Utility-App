import React, { Component } from 'react';
import { View, Text ,Image,ScrollView,TouchableOpacity} from 'react-native';
import{Card,Header,Button,Divider} from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
const i=1;
export default class About extends Component {
    
  static navigationOptions = {
   header: null, 

  };
  
  constructor(props) {
    super(props);
    this.state = {
        productCount:1,        
     final: 22.98
    
    };
  }
  addProduct(){
     this.setState({'productCount':this.state.productCount + 1})
    // this.total()
  }
  removeProduct(){
    this.setState({'productCount':this.state.productCount - 1})
    //this.total1()
 }
 
//  total(){
//      this.setState({'final':this.state.productCount*11.49  })
//  }

//  total1(){
//     this.setState({'final':this.state.final/11.49  })
// }


  render() {
    return (
    

<View style={{flex :1}}>
<Header
//centerComponent={{ text: 'About', style: { color: '#fff' } }}
outerContainerStyles={{ backgroundColor: 'white' }}
/>
<ScrollView contentContainerStyle={{paddingBottom:30}}>
  
    <Card containerStyle={{borderRadius:2,backgroundColor:'white'}} >
     
 <View style={{flexDirection:'row'}}>
    <View>
       <Text>hello wolrd</Text>
       <Text style={{color:'green'}}> $ 11.49</Text>
            <View style={{paddingTop:20,flexDirection:'row'}}>
               <TouchableOpacity>
                <Icon style={{left:7}} name="remove" color='#808080' size={24} onPress={()=>this.removeProduct()} /></TouchableOpacity>
                <Text style={{left:5}}>{this.state.productCount}</Text>
                <TouchableOpacity>
               
                <Icon style={{left:7}} name="add" color='#808080' size={24}  onPress={()=>this.addProduct()}/>

           </TouchableOpacity>
            </View>
       </View>
    <View>
       <Image 
            source={require('../assets/m.jpg')}
                style={{ height: 100, width: 100, left:120 }}

       />
    </View>
</View>
          </Card>
          
    <Card containerStyle={{borderRadius:2,backgroundColor:'white'}} >
     
     <View style={{flexDirection:'row'}}>
        <View>
           <Text>hello wolrd</Text>
           <Text style={{color:'green'}}> $ 11.49</Text>
                <View style={{paddingTop:20,flexDirection:'row'}}>
                   <TouchableOpacity>
                    <Icon style={{left:7}} name="remove" color='#808080' size={24} onPress={()=>this.removeProduct()} /></TouchableOpacity>
                    <Text style={{left:5}}>{i}</Text>
                    <TouchableOpacity>
                   
                    <Icon style={{left:7}} name="add" color='#808080' size={24} onPress={()=>this.addProduct() }/>
               </TouchableOpacity>
                </View>
           </View>
        <View>
           <Image 
                source={require('../assets/m.jpg')}
                    style={{ height: 100, width: 100, left:120 }}
    
           />
        </View>
    </View>
              </Card>



 </ScrollView>
 
        <View style={{paddingBottom:10}}>
        <View  style={{flexDirection:'row'}}>
        <Text style={{left:10}}>
            TotalAmount 
        </Text>
        <Text style={{left:200,color:'green'}}>
     ${ this.state.final}      </Text>
        

        </View>


            <View style={{paddingBottom:10}}>
        <Divider style={{ backgroundColor:'#d3d3d3',width:'90%',alignSelf:'center',}} />
</View>
        <Button
      
      backgroundColor="green"
            title ='CHECKOUT'
          //  textStyle={{color:"black" ,paddingRight:'80%'}}
             buttonStyle={{borderRadius:25}}
            //SSSrightIcon={{name: 'info',color:"#808080"}}
        //    onPress={()=>this.props.navigation.navigate('About')}
            
            />
        </View>
 </View>
    
    
    );
  }
}
