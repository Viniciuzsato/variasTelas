import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen'
import AboutScreen from "../pages/AboutScreen";

const MainStack = createStackNavigator();

export default() => (
    <MainStack.Navigator screenOptions={{
        headerTitleAlign: 'center'
        
    }}>
        <MainStack.Screen name="Home" component={HomeScreen}/>
        <MainStack.Screen name="About" component={AboutScreen}/>
    </MainStack.Navigator>
)