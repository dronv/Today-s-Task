import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
const Task=(props)=>{
  
  return(
    <View style={styles.item} >
   <View style={styles.taskItem}>
   <Text style={styles.taskText}>{props.taskname}</Text>
   </View>
   </View>
  
  );
}
const styles= StyleSheet.create({
  item:{
  borderRadius:15,
  height:60,
  padding:15,
  justifyContent:'space-between',
  marginBottom:20,
  backgroundColor:'#FFFF'
  },
taskItem:{
  flexDirection:'row',
  alignItems:'center',
  flexWrap:'wrap',
},
taskText:{
  maxWidth:'100%'
},


  });
  export default Task;