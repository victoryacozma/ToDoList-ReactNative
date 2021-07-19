import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';



export default function AddToDo({submitHandler}){

    const[text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const onClickHandler = () => {
        submitHandler(text);
    }

    return(
        <View>
            <TextInput
            style = {styles.input}
            placeholder = 'new todo'
            onChangeText = {changeHandler}/>

            <Button 
                onPress = {onClickHandler}
                title = 'Add todo'
                color = 'coral'/>
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