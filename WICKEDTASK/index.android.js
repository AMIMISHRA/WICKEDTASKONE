/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';
import Screenfile from './Newscreen';
import FirstScreen from './FirstScreen';
import routes from './constroutes';
export default class WICKEDTASK extends Component {
  

  renderfile(){
    return(
               <Screenfile/>
      )
  }

  pushViews(route,navigator){
   if (route.index === 0)
      {
       return(
             <FirstScreen navigator={navigator}/>
            )
       }
      if(route.name === 'Secure Page')
      {

        
         return(
            
            <Screenfile navigator={navigator} data={route.passProps}/>
         )
      }
     }
 
 
  render() {
    return(
        <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
           {
            return(

              this.pushViews(route,navigator)
              )
          } 
        }
       

      />
       
    
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WICKEDTASK', () => WICKEDTASK);
