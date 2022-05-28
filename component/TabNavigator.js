import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Main"
       
      
      component={MainStackNavigator} />
      <Tab.Screen
   options={{headerShown: false}}
      name="Contact" component={ContactStackNavigator}
      
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;