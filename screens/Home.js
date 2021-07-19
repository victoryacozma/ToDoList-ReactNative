import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';

export default function Home({navigation}){

    const pressHandler = () => {
        navigation.navigate('ToDoList');
    }

    return(
        <View style = {styles.container}> 
            <Text >Home page</Text>
            <Button title = 'go to to do list' onPress = {pressHandler}/> 
        </View>
    )
}

const styles = StyleSheet.create({
   
      container: {
       padding: 38
      }

});