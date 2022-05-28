import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

const RootStack = createStackNavigator();



import Splash from "./Splash";

const SplashNaviagtor  = () => {
  return (

    
<RootStack.Navigator  screenOptions={{
 

 headerShown: false,

  }}>
    <RootStack.Screen 
    options={{
      headerShown: false,
    
    }}
    
    name="Splash" 
    
    component={Splash}/>


 
      </RootStack.Navigator>
  );
};

export default SplashNaviagtor;