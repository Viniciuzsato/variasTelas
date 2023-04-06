import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTab from "./src/navigator/MainTab";

function App() {
  return(
    <NavigationContainer>
      <MainTab/>
    </NavigationContainer>
  )
}

export default App;