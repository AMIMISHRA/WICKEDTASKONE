import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
 Dimensions,
 TouchableOpacity,
TouchableHighlight,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import routes from './constroutes';
import radio_props from './radio_props';
import Screenfile from './Newscreen';
import DatePicker from 'react-native-datepicker';
import PopupDialog from 'react-native-popup-dialog';
var ImagePicker = require('react-native-image-picker');
var options = {
          title: 'Select Avatar',
          customButtons: [
            {name: 'fb', title: 'Choose Photo from Facebook'},
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images'
          }
              };
export default class FirstScreen extends Component{
constructor(props) {
    super(props);
    this.state = {
           value: 0,nametext: '',emailtext:'',phonenumber: '',date:"",avatarSource:''};
     }
onSubmitPressed() {
          this.props.navigator.push({
          name: "Secure Page",
          component: Screenfile,
          passProps: {nametext: this.state.nametext, emailtext: this.state.emailtext,phonenumber: this.state.phonenumber,date: this.state.date,
          value:this.state.value,avatarSource: this.state.avatarSource},
          });
          }   
imagepicker(){
           console.log('avatarSource: ',this.state.avatarSource)
             ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
              let source = { uri: response.uri };
              console.log('=========> source: ',source)
              this.setState({
                avatarSource: source
              });
           }
           });    
          }        
phonenumber(){
            var phonenumberregex = /^\(?([0-9]{3})\)??([0-9]{3})?([0-9]{4})$/;
            if (this.state.phonenumber.match(phonenumberregex)) 
              { 
                return true
              }else{
                 return false
              }
             }

validateEmail(){
            var emailregex = /^[A-Za-z0-9_\-\.]{1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;    
           if (this.state.emailtext.match(emailregex)){
            return true


           } else {

            return false
           }
            
          
          }

checkvalue() {
          if (this.state.nametext == '') {
                   Alert.alert(
                    'Alert','Type name'
                  )
                   return false
            } else
          if (this.state.emailtex == '') {    
            Alert.alert(
                'Title','Type Email'
              )
            return false
          } else
          if (this.state.phonenumber == '') {
            Alert.alert(
                'Title','Type phonenumber'
              )
            return false
          } else
            if(!this.validateEmail()) {
              Alert.alert(
                    'Title','Type a valid email'
                  )
                return false
            }else
            if(!this.phonenumber()){
               Alert.alert(
                    'Title','Type a valid phonenumber'
                  )
                return false
            }
             else {
              this.onSubmitPressed()
            }
    
  }

  render() {
      var icon = this.state.avatarSource === '' ? require('./add.user-2-xxl.png') : this.state.avatarSource;
        
  return(
   <ScrollView style={{backgroundColor:'#21abcd'}}> 
     <View style={{alignItems:'center',marginTop:40,height: width/2.5}}>
      <TouchableOpacity style={{alignItems:'center',justifyContent:'center',height: width/2.5}}
         onPress={() => this.imagepicker()} > 
        <Image source={icon} style = {{width :140,height:140,borderRadius:10,backgroundColor:'transparent'}}/>
      </TouchableOpacity>
     </View>
     <View style={{height:40,marginTop:80,justifyContent:'space-between'}}>
       <TextInput
          style={{height: 40,marginLeft:30,marginRight:30,color:'white',borderRadius:7.5,paddingLeft: 5, borderColor: 'white',borderWidth: 1}}
          placeholder="Name"
          placeholderTextColor= 'white'
          returnKeyType="next"
          underlineColorAndroid="transparent"
          onChangeText={(nametext) => this.setState({nametext})}
          value={this.state.nametext}
          onSubmitEditing={(event) => { 
          this.refs.SecondInput.focus()}}
       />
     </View>
     <View style={{height:40,marginTop:15}}>
      <TextInput
         style={{height: 40,marginLeft:30,marginRight:30,color:'white',borderRadius:7.5,paddingLeft: 5, borderColor: 'white',borderWidth: 1}}
         keyboardType="email-address"
         placeholder="Email"
         placeholderTextColor='white'
         returnKeyType="next"
         ref='SecondInput'
         underlineColorAndroid="transparent"
         onChangeText={(emailtext) => {
         this.setState({emailtext});
          }}
         value={this.state.emailtext}
         onSubmitEditing={(event) => { 
         this.refs.phoneInput.focus()}}
      />
     </View>
     <View style={{height: 40,marginTop:15,}}>
      <TextInput
         style={{height: 40,marginLeft:30,marginRight:30,color:'white',borderRadius:7.5,paddingLeft: 5, borderColor: 'white',borderWidth: 1}}
         keyboardType="phone-pad"
         placeholder="Phone"
         returnKeyType="next"
         placeholderTextColor= 'white'
         underlineColorAndroid="transparent"
         onChangeText={(phonenumber) => this.setState({phonenumber})}
         value={this.state.phonenumber}
         ref='phoneInput'
      />
     </View>
     <View   style={{flex:1, height:40,marginTop:15}}>
      <DatePicker
        style={{ flex: 1,height:40,marginLeft:30,width: width - 60,}}
        date={this.state.date}
        mode="date"
        placeholderTextColor= 'white'
        placeholder="DOB"
        showIcon={false}
        format="YYYY-MM-DD"
        minDate="1950-01-01"
        maxDate="2017-0-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
        dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
          },
        dateInput: {
          borderColor: 'white',
          borderRadius:7.5,
          alignItems: 'flex-start',
          paddingLeft:5,
        },
        dateText: {
          color: 'white'
        }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
     />
     </View>
     <View style={{height:40,marginTop:15}}>
      <RadioForm style={{marginLeft:30,marginRight:30,justifyContent:'space-around',borderColor: 'white'}}
        radio_props={radio_props}
        initial={0}
        formHorizontal={true}
        labelHorizontal={true}
        labelColor={'white'}
        buttonColor={'white'}
        onPress={(value) => {this.setState({value:value})}}
        buttonSize={15}
        animation={false}
      />
    </View>
    <View  style={{height:40,marginTop:50}}>
      <TouchableHighlight
         style={{marginLeft:30,marginRight:30, height:40,borderRadius:7.5,alignItems:'center',paddingTop:2,backgroundColor:'#0095b6'}}
         onPress={ () => {this.checkvalue()}} >
         <Text style={{fontSize:25,color: 'white'}}>Submit</Text>
      </TouchableHighlight>
    </View>
   </ScrollView>
      )
}
}
