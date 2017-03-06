
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Image,
 Dimensions,
 TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
import FirstScreen from './FirstScreen';
const wins = Dimensions.get('window');
export default class Screenfile extends Component{
constructor(props) {
        super(props);
        this.state = {
            nametext: this.props.data.nametext,
            emailtext: this.props.data.emailtext,
            phonenumber : this.props.data.phonenumber,
            date: this.props.data.date,
            avatarSource : this.props.data.source,
            value: this.props.data.value === 0 ? 'Female' : 'Male',
        };
    }
 render() { 
return(
<ScrollView style={{backgroundColor:'#21abcd'}}> 
    <TouchableHighlight style={{height:30,marginTop:30,marginRight:330,borderRadius:10,}}
        onPress={() => this.props.navigator.pop()}
    >
    <Text style={{fontSize:25,backgroundColor:'#0095b6',paddingLeft:5,paddingRight:5,color:'white',borderRadius:10,}}>
      Back
    </Text>
    </TouchableHighlight> 
    <View style={{flex:1}}>
    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
    <Image
      source={this.props.data.avatarSource} style={{width :180, height: 180,borderRadius:70}}
    />
    </TouchableOpacity>
      <Text style={{marginRight:30,marginTop:70,marginRight:30,fontSize:25,color:'white',backgroundColor:'transparent'}}>
        Name              {this.state.nametext}
      </Text>
      <Text style={{marginRight:30,marginRight:30,marginTop:15,fontSize:25,color:'white',backgroundColor:'transparent'}}>
       Email              {this.state.emailtext}
      </Text>
      <Text style={{marginRight:30,marginRight:30,marginTop:15,fontSize:25,color:'white',backgroundColor:'transparent'}}>
       Phone             {this.state.phonenumber}
      </Text>
      <Text style={{marginRight:30,marginRight:30,marginTop:15,fontSize:25,color:'white',backgroundColor:'transparent'}}>
       Dateofbirth     {this.state.date}
      </Text>
      <Text style={{marginRight:30,marginRight:30,marginTop:15,fontSize:25,color:'white',backgroundColor:'transparent'}}>
        Gender            {this.state.value}
      </Text>
  </View>  
</ScrollView>
   
      )
}
}

  const styles = StyleSheet.create({

    newstab: {
       width: wins.width,
      justifyContent: 'center',
      alignItems: 'center',
      height: wins.height,
      backgroundColor: 'gainsboro',
    },
   
  })