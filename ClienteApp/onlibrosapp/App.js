import { StatusBar } from 'expo-status-bar';
import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = ()=><Text>esto es el ejemplo de un componente en una constante</Text>;

class Cat extends Component {
  render(){
    return(<Text>hola soy una funcion que dice Cat</Text>) ;
  }
};

class FuntionHola extends Component{
  render() {
    return(
      <Text>soy el ejemplo de como se usar una funcion en componente</Text>
    );
  }
}

export default function App() {
    return (
        <View style = { styles.container } >
        <Text > Open up App.js to start working on your app!holaa soy andres.como estam todsss < /Text>
        <Text>esto es el componente Texto</Text>
        <StatusBar style = "auto" />
        <Texto />
        <Cat/>
        <FuntionHola/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
