import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../components/Header'
import ToDoItem from '../components/ToDoItem'
import AddToDo from '../components/AddToDo'
import Sandbox from '../components/Sandbox'


export default function App() {

    const [todos, setTodos] = useState([
        { text: 'buy coffee', key: '1' },
        { text: 'create an app', key: '2' },
        { text: 'play on the switch', key: '3' }
    ]);

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        })
    }

    const submitHandler = (text) => {

        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text, key: Math.random().toString() },
                    ...prevTodos
                ];
            })
        }
        else{
            Alert.alert('OOPS', 'todos should be over 3 chars long', [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ])
        }
        
    }


    return (
        //Sandbox
        //<Sandbox></Sandbox>
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
            console.log('Dissmissed keyboard')

        }}>
        <View style={styles.container}>
            <Header/> 
            <View style={styles.content}>
                <AddToDo submitHandler = {submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <ToDoItem item = {item} pressHandler = {pressHandler}/>
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