import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import TabAboutScreen from "../pages/TabAboutScreen"
import TabHomeScreen from "../pages/TabHomeScreen"


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: () => {
                let imgSource = null;

                switch(route.name) {
                    case 'TabHome':
                        imgSource = require('../assets/home.png');
                    break;
                    case 'TabAbout':
                        imgSource = require('../assets/interface.png');
                    break;
                }

                return <Image source={imgSource} style={{width:24, height:24}}/>
            }
        })}
    >
        <Tab.Screen name="TabHome" component={TabHomeScreen}/>
        <Tab.Screen name="TabAbout" component={TabAboutScreen}/>
    </Tab.Navigator>
);