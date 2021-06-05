import  React from 'react';
import {View,StyleSheet} from 'react-native';
import CreateTask from './components/CreateTask';
export default function App() {
  return (
    <View style={styles.container}>
<CreateTask/>
</View>
    );
   
}
const styles= StyleSheet.create({
container:{
  justifyContent:'center',
  flex:1,
  backgroundColor:'#d3d3d3',
}
});