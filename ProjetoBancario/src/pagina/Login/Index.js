import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet,KeyboardAvoidingView,View,Text,TextInput,TouchableOpacity ,Image, ImageBackground} from "react-native";
import * as Animatable from 'react-native-animatable';
import { State } from "react-native-gesture-handler";



export default function Login(){
    const navigation = useNavigation();

    const [senha,setSenha] = useState("");
    const [matricula,setMatricula] = useState("");

    const handleLogin = (Usenavigation) => {
        const matriculasValidas = ["2220", "2022"];
        const senhasValidas = ["wesley", "dennis"];
    
        const index = matriculasValidas.indexOf(matricula.trim());
    
        if (index !== -1 && senha.trim() === senhasValidas[index]) {
          navigation.navigate("Menu");
        } else {
          Alert.alert("Erro", "Matrícula ou senha incorretos.");
          setSenha(""); 
        }
      };
    
      const handleLogout = (navigation) => {
        navigation.navigate("Login");
      };
    return(
    
        <ImageBackground source={require('../../../issets/imagem/imgBanco.jpg')}
        style={estilos.container}>
              
        <View style={estilos.container} >
            <Animatable.View animation="fadeInRight" delay={800}   style={estilos.container2}>
            <Text style={estilos.mensagem}>Seja Bem Vindo (a) </Text>  
            <Text style={estilos.mensagem}> Banco Airline </Text> 
            <Text style={estilos.mensagem1}>O Banco que cuida de tudo pra você </Text> 
           
            </Animatable.View > 
          
            <View style={estilos.container3} >
        
                <Text style={estilos.nomeEntrar}> </Text>
                <TextInput 
                placeholder="Digite Nome Para Entrar " 
                style={estilos.textoNome}
                value={matricula}
                onChange={e => setMatricula(e.target.value)}/>
                



                <Text style={estilos.nomeEntrar}></Text>
                <TextInput 
                secureTextEntry={true}
                placeholder="Digite Sua Senha  " 
                value={senha}
                onChange={e=> setSenha (e.target.value)}
                style={estilos.textoNome}
                />

                <TouchableOpacity style={estilos.botao}
                    onPress={()=> navigation.navigate('Home')}>
                    <Text style={estilos.botaoAcessar} >Entrar</Text>
                </TouchableOpacity>
                

                <TouchableOpacity style={estilos.botaoR}>
                    <Text style={estilos.botaoRegistrar}> Não possue Conta ?  Cadastre-se !</Text>
                </TouchableOpacity>
                


            </View>
       


       
        
         
        </View>

      
        </ImageBackground>
        
         
    )
}

 const estilos= StyleSheet.create({

    container:{
        flex:1,
       

    },
    container2:{
        
        marginTop:'15%',
        marginBottom:'8%',
        paddingStart:'15%', 
     
    
    },
    container3:{
        flex:1,
        paddingEnd:'14%',
        paddingStart:'14%',
        marginTop:'50%',

    

    },

    mensagem:{
        color:'#000',
        fontWeight:'bold',
        fontSize:35,
        

    },
    mensagem1:{
        
        paddingEnd:'7%',
        paddingStart:'8%',
        marginTop:5,
        fontSize:20,

    },

    nomeEntrar:{
        color:'#000',
        fontSize:20,
        fontWeight:'bold',

        
    },

    botao:{
      //  width:300,
       // height:50,
       // borderRadius:5,
        //marginTop:100,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:'center',
        width:"100%",
        borderRadius:5,
        paddingVertical:8,
        marginTop:15,
        backgroundColor:"#20b2aa",

        
    },


    botaoAcessar:{
        color:"#fff",
        fontWeight:'bold',
      
        fontSize:25,
     
        

    },
    botaoRegistrar:{
        fontWeight:'bold',
        color:'#000',
        marginTop:20,
        fontSize:15,
        
        

    },
 

    textoNome:{
        marginTop:20,
        width:300,  
        //backgroundColor:'#20b2aa',
        borderRadius:5,
        fontWeight:'bold',
        fontSize:20,    
        padding:10,
        color:'#fff',
        borderBottomWidth:4,
        height:40,
        marginBottom:12,
        fontSize:20,
        

    }
    




 })









