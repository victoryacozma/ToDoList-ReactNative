/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Lists from './Lists';
import ToDoList from './screens/ToDoList'
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import configureStore from './store';
import React from 'react';

const store = configureStore();

const ReduxTutorial = () =>
    <Provider store = {store}>
        <App/>
    </Provider>

AppRegistry.registerComponent(appName, () =>  ReduxTutorial);