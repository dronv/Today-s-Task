import React,{useState}from 'react';
import {TextInput,Text, View,StyleSheet,KeyboardAvoidingView,TouchableOpacity, Alert,TouchableWithoutFeedback} from 'react-native';
import Task from './Task.js';
import { Entypo } from 'react-native-vector-icons';

 const CreateTask=()=>{
  const [task,setTask] = useState('');
  const [taskitem,setTaskitem]=useState([]);
  const handleAddTask=()=>{
    if(task === '')
    {
      Alert.alert('Cannot assign empty task');
    }
    else{
       setTaskitem([...taskitem,task]);
       setTask(null);  
      }
    }

  const DeleteTask=(index)=>{
   let itemsList= [...taskitem];
   itemsList.splice(index,1);
   setTaskitem(itemsList);
  }  
  
    return(
<View style={styles.container}>
   <Text style={styles.title}> Today's Task</Text>
   <KeyboardAvoidingView 
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
style={styles.taskinput}>
  <TextInput style={styles.input} placeholder='Add New Task' value={task} onChangeText={text=>setTask(text)}/>
  <TouchableWithoutFeedback onPress={()=> handleAddTask()}> 
  <Entypo name="circle-with-plus" size={50} color="green" />
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
   {
     taskitem.map((item,index)=>{
     return (
       <TouchableOpacity onLongPress={(index)=>DeleteTask(index)} 
       key={index} > 
      <Task taskname={item} />
     </TouchableOpacity>
     );
     }
     )
   }
</View>
    );
    }
   
const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start', 
    margin:10,
    marginTop:45,
  },
  title:{
    justifyContent:'flex-start',
    fontWeight:'bold',
    fontSize:40,
    marginBottom:30
  },
  taskinput:{
    position:'absolute',
    bottom:60,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    backgroundColor:'#FFFF',
    height:50,
    width:250,
    borderRadius:50,
    fontSize:20,
    borderWidth:1,
    padding:15,
  }
  });
export default CreateTask;