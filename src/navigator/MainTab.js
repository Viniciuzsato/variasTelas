import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import TabAboutScreen from "../pages/TabAboutScreen"
import TabHomeScreen from "../pages/TabHomeScreen"


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="tabHome" component={TabHomeScreen}/>
        <Tab.Screen name="tabAbout" component={TabAboutScreen}/>
    </Tab.Navigator>
)