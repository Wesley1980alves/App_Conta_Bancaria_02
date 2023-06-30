import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";



export default function Home(){
    
        return(
            <View style={estilos.container}>
                <Text>Bem Vindo usuario logado
                </Text>
            </View>
        )
    }


const estilos =StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
    }
});