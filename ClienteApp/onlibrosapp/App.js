import { StatusBar } from 'expo-status-bar';
import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component{
  render(){
    return (
      <View style={{flex:1 ,backgroundColor:'blue', justifyContent:'center',alignItems:'center'}}>
        <View style={{width:50, height:50 ,backgroundColor:'red' }} >
          <Text>estoy dentro del cuadro rojo</Text>
        </View>
      </View>

    );
  }
}



const styles = StyleSheet.create({
//
});

export default App;
