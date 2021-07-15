import React,{useState} from 'react';
import { Text,StyleSheet,View,Button,TextInput } from 'react-native';


export default function AddTodo({submithandler}){
  const [text,setText]=useState('')
  const changehandler=(val)=>{
setText(val)
  }
return(
  <>
  <View style={styles.header}>
  <TextInput style={styles.input} placeholder='add todos...' onChangeText={changehandler}/>
  <Button onPress={()=>{submithandler(text);
  setText('')}} title='add todo' color='coral' />
  </View>
  </>
)
}

const styles=StyleSheet.create({
input:{
  marginBottom:10,
  paddingHorizontal:8,
  paddingVertical:6,
  borderBottomWidth:1,
  borderBottomColor:'#ddd'
}
})