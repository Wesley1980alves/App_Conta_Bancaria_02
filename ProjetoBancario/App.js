import React from "react";
import { StatusBar } from "react-native";
 
import { NavigationContainer } from "@react-navigation/native";
import Rotas from "./src/rotas/Index";

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={"#38A69D"} barStyle={"light-content"}/>
      

    <Rotas/>

    </NavigationContainer>
  )
}










/*
import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, ImageBackground ,Image, TextInput, TouchableOpacity} from "react-native";
import { StatusBar } from "react-native";


/*
export default class App extends Component{
  render(){
    return(
      
      <View style={estilos.container}>
        <Text style={estilos.telaInicial}>Sistema Conta bancaria</Text>
        <Text style={estilos.telaInicial}>Desenvolvido por wesley e Dennis</Text>
        <Text style={estilos.telaInicial}>Cefet_mg</Text>
        <Image source={require('./issets/imagem/logotipo.png')}
        style={estilos.logotipo}/>

        <TextInput style={estilos.dadosLogin}placeholder="Digite nome "/>
        <TextInput  style={estilos.dadosLogin}placeholder="Digite senha "
        secureTextEntry={true}/>

        <TouchableOpacity style={estilos.botaoInicial}>
          <Text style={estilos.botaoEntrar}>Entrar</Text>
        </TouchableOpacity>
      



      </View>
    )
  }
} 





const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#000',
    
    
  },
  fonte: {
    fontSize: 50,
  },
logotipo:{
  
  height:300,
  borderRadius:25,
},
dadosLogin:{
marginTop:20,
width:300,
backgroundColor:'#00ced1',
borderRadius:5,
fontWeight:'bold',
fontSize:20,
padding:10,
color:'#000',


},

telaInicial:{
  marginTop:20,
  fontSize:20,
  
},
botaoInicial:{
  width:300,
  height:50,
  backgroundColor:"#fff",
  borderRadius:5,
  marginTop:20,
  alignItems:"center",
  justifyContent:"center",
  

},
botaoEntrar:{
  fontSize:30,
  color:'#000',


}



});*/