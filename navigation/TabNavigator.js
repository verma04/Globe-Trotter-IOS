import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../component/Auth/Login.js'
const RootStack = createStackNavigator();

import SplashScreen from '../component/Auth/SplashScreen';
import SignInScreen from '../component/Auth/SignInScreen';
import SignUpScreen from '../component/Auth/SignUpScreen';
import OnboardingScreen from "../component/Auth/OnboardingScreen.js";

const AuthNavigator = () => {
  return (

    
<RootStack.Navigator  screenOptions={{
 

 headerShown: false,

  }}>
    <RootStack.Screen 
    options={{
      headerShown: false,
    
    }}
    
    name="OnboardingScreen" 
    
    component={OnboardingScreen}/>
<RootStack.Screen
  options={{
    headerShown: false,
    title:"",
    tabBarStyle: { display: "none" }, 
  }}
name="SplashScreen" component={SplashScreen}/>

        <RootStack.Screen 
          options={{
            gesturesEnabled: false,
            title:"",
            headerBackTitle: "s",
            tabBarStyle: { display: "none" }, 
          }}
        
        name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
  
      </RootStack.Navigator>
  );
};

export default AuthNavigator;