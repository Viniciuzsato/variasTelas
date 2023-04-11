import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import TabAboutScreen from "../pages/TabAboutScreen";
import TabHomeScreen from "../pages/TabHomeScreen";
import TabConfigScreen from "../pages/TabConfigScreen";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator 
        tabBar={(props) => <CustomTabBar {...props} />}
        initialRouteName="TabHome"
        screenOptions={{headerShown:false}}
    >
        <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{tabBarLabel:'About'}}/>
        <Tab.Screen name="TabHome" component={TabHomeScreen} options={{tabBarLabel:'Home'}}/>
        <Tab.Screen name="TabConfig" component={TabConfigScreen} options={{tabBarLabel:'Config'}}/>
    </Tab.Navigator>
);