import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home'
import ToDoList from '../screens/ToDoList'

const screens = {
    Home:{
        screen: Home
    },
    ToDoList: {
        screen: ToDoList
    }
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;