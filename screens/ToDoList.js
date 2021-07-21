import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header'
import ToDoItem from '../components/ToDoItem'
import AddToDo from '../components/AddToDo'
import HookAddToDoContainer from '../components/HookAddToDoContainer';
import HookDeleteToDoContainer from '../components/HookDeleteToDoContainer';
import { useDispatch, useSelector } from 'react-redux'


export default function ToDoList() {

    const todos = useSelector(state => state.todos.todoList)

    // const [todos, setTodos] = useState([
    //     { text: 'buy coffee', key: '1' },
    //     { text: 'create an app', key: '2' },
    //     { text: 'play on the switch', key: '3' }
    // ]);


    // //deletefunction
    // const pressHandler = (key) => {
    //     setTodos((prevTodos) => {
    //         return prevTodos.filter(todo => todo.key != key)
    //     })
    // }

    // //add new todo
    // const submitHandler = (text) => {

    //     if(text.length > 3) {
    //         setTodos((prevTodos) => {
    //             return [
    //                 {text: text, key: Math.random().toString() },
    //                 ...prevTodos
    //             ];
    //         })
    //     }
    //     else{
    //         //changing smth here
    //         Alert.alert('OOPS', 'todos should be over 3 chars long', [
    //             {text: 'Understood', onPress: () => console.log('alert closed')}
    //         ])
    //     }
        
    // }


    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
            console.log('Dissmissed keyboard')

        }}>
        <View style={styles.container}>
            <Header/> 
            <View style={styles.content}>
                {/* <AddToDo submitHandler = {submitHandler}/> */}
                <HookAddToDoContainer/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            // <ToDoItem item = {item} pressHandler = {pressHandler}/>
                            <HookDeleteToDoContainer item = {item}/>
                        )}
                    />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
       // backgroundColor : 'pink',
        padding: 40,
    },
    list: {
        flex: 1,
        marginTop: 20,
        //backgroundColor : 'yellow',
    },
}); 