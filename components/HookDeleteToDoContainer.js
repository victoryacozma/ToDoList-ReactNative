import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToDo } from '../actions/todo';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

function HookDeleteToDoContainer({item}) {
    const listOfToDos = useSelector(state => state.todos.todoList)
    const dispatch = useDispatch();
    
    return (
        <TouchableOpacity onPress = {() => dispatch(deleteToDo(item.key))}>
            
            <Text style = {styles.item}> {item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });

export default HookDeleteToDoContainer
