import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToDo } from '../actions/todo';
import { StyleSheet, TextInput, View, Button} from 'react-native';

function HookAddToDoContainer() {
    const listOfToDos = useSelector(state => state.todos.todoList)
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo'
                onChangeText={changeHandler} />

            <Button
                onPress={() => dispatch(addToDo(text))}
                title='Add todo'
                color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

export default HookAddToDoContainer;
