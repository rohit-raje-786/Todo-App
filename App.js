import React, { useRef, useCallback,Component,useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet,View,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Constants from 'expo-constants';
import Header from "./components/header";
import TodoItem from "./components/todoitem"
import AddTodo from "./components/addtodo"




export default function App()  {
  const [todo,setTodo]=useState([
    {text:'buy a coffee',key:1},
    {text:'create an app',key:2},
    {text:'play on switch',key:3},
  ]);
 
 const presshandler=(key)=>{
   setTodo((previousTodo)=>{
    return previousTodo.filter(todo=>todo.key!=key)
   })
 }
 const submithandler=(text)=>{
   if(text.length>3){
      setTodo((previousTodo)=>{
  return[
    {text:text,key:Math.random()},
    ...previousTodo
  ]
  });
   }else{
    Alert.alert('OOPS!','todos must be 3 chars long')
   }

 }
    return (
   
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <AddTodo submithandler={submithandler}/>
      <View style={styles.list}>
      <FlatList data={todo} renderItem={({item})=>(
        <TodoItem item={item} presshandler={presshandler}/>
      )}/>
 
      </View>
      </View>
      </View>
       </TouchableWithoutFeedback>
   
    
  );
  
  
}

const styles = StyleSheet.create({
  container:{
    
    flex: 1,
    backgroundColor:'#fff'
  },
 content:{
   flex: 1,
   padding:40
 },
 list:{
   flex: 1,
   marginTop:20
 }
});


