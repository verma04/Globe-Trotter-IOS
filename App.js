import    React  , {createContext  ,useCallback, useState, useEffect, useMemo, useReducer} from 'react';
import { Platform, SafeAreaView} from 'react-native';
import {ThemeProvider} from './ThemeContext';
import { Appearance, useColorScheme } from 'react-native-appearance';
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
import * as SplashScreen from 'expo-splash-screen';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import * as SecureStore from 'expo-secure-store';
import AuthNavigator from './navigation/TabNavigator'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import AsyncStorage from '@react-native-async-storage/async-storage';;
import { MainStackNavigator , ContactStackNavigator  } from "./navigation/StackNavigator";
import Login from './component/Auth/Login'
 import { RootSiblingParent } from 'react-native-root-siblings';
 import { buildAxiosFetch } from '@lifeomic/axios-fetch'
 import axios from 'axios'
 import OfflineNotice from './OfflineNotice'
 import NetInfo from '@react-native-community/netinfo';
 
 import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-root-toast';
// const httpLink = createHttpLink({
//   uri: 'https://66f2-2405-201-7003-80e8-a0b4-c86-6fd3-db9d.ngrok.io/graphql/',
// });
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = AsyncStorage.getItem('userToken');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()
// });

import DrawerNavigator from "./navigation/DrawerNavigator";
import { AuthContext } from './context/context';
import { dark } from './theme/colors';
import { colors } from 'react-native-elements';
import SplashNaviagtor from './component/SplashScreen/SplashNaviagtor';









const Stack = createNativeStackNavigator();





   function App() {

    const colorScheme = useColorScheme();

  


    const [appIsReady, setAppIsReady] = useState(false);

    const [splash, setsplash] = useState(false);
  
 

    
  

  
 
  const gqlAxios = axios.create()
  gqlAxios.interceptors.response.use(
    function (response) {
       console.log(response)
  },
    function (error) {
      console.log(error)
    }
  )
const client = new GraphQLClient({
 url: 'https://artofwearing.com/graphql',


})


const [isDarkTheme, setIsDarkTheme] = React.useState(true);



const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    splashbg:"##051C2C",
    header:"white",
    background: '#ffffff',
    splashColor:"#151e2f",
    text: '#0c1b2a',
    primaryColor:'rgba(220, 220, 220, 1)'   ,
    secondaryColor:'rgba(200, 200, 200, 1)',
    COLORS: ['#eee', '#ddd', '#eee'],
    icon:"black",
    brandColor:"#0c1b2a",
  borderColor:"#ffffff",
    darklogo:'https://globe-trotte.fra1.digitaloceanspaces.com/20220223-nh05j-bulk'
  }
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    splashbg:"#051C2C",
    background: '#333333',
    splashColor:"#ffffff",
    header:"#0c1b2a",
    COLORS:["#282828" ,"#282828" , "#282828"],
    icon:"white",
    primaryColor:'#0c1b2a',
    secondaryColor:'#0c1b2a',
    brandColor:"#fea20a",
    borderColor:"#0c1b2a",
    text: '#ffffff',
    darklogo:"https://globe-trotte.fra1.digitaloceanspaces.com/20220223-ew7f6-bulk"
  }
}



  const [netInfo, setNetInfo] = useState('');
  const [state, dispatch] =useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

 
  useEffect(() => {
    // Subscribe to network state updates



  

  

   
    if(colorScheme === "dark") {
      setIsDarkTheme(true)
    }
   
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        state.isConnected
      );
    });


    const bootstrapAsync = async () => {

      const colorScheme = Appearance.getColorScheme();
      console.log(colorScheme , "sdsd")
      if (colorScheme === 'dark') {
        setIsDarkTheme(true)
      }
      let userToken;
  
      try {
        userToken = await AsyncStorage.getItem('userToken');
     
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        throw e
      }
  
      // After restoring token, we may need to validate it in production apps
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    bootstrapAsync();
    

   
    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };


  }, []);


  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const authContext = useMemo(
    () => ({
      signIn: async(foundUser) => {

      

        // setUserToken('fgkj');
        // setIsLoading(false);
        const userToken = JSON.stringify(foundUser);
        
 
        
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch(e) {
           throw e
        }

        
        // // console.log('user token: ', userToken);
        // let toast =  Toast.show(`Welcome ${foundUser.fullname} `, {
        //   duration: Toast.durations.LONG,
        //   position:Toast.positions.BOTTOM,
        //   shadow: true,
        //   animation: true,
        //   hideOnPress: true,
      
        // });
        // setTimeout(function hideToast() {
        //   Toast.hide(toast);
      //  }, 2500);
        dispatch({  type: 'RESTORE_TOKEN',   token: userToken });
      },

      toggleTheme: async() => {
        
        
        
        try {
          await AsyncStorage.setItem('theme', false);
            

        } catch(e) {
           throw e
        }

        
     
      },
      signOut: async() => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch(e) {
        throw e
        }
        dispatch({ type: 'SIGN_OUT' });
      },
        signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },

      toggleTheme: async () => {
    
    
    
         setIsDarkTheme( isDarkTheme => !isDarkTheme );
        
      }
    }),
    []
  );


 const data = !isDarkTheme ? "#fff": "#0c1b2a"

  const container = {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: data,
  color:"#313131",
  
  }



  const font = require('./assets/BasisGrotesquePro-Bold.otf')
const BasisGrotesque   = require('./assets/BasisGrotesquePro-Regular.otf')
const BasisGrotesqueBold   = require('./assets/BasisGrotesquePro-Bold.otf')
const Cushingstd   = require('./assets/cushingstd-bold.otf')
    let [fontsLoaded] = useFonts({
      font,
      BasisGrotesque,
      BasisGrotesqueBold,
      Cushingstd
    });
  

 
  

    if(!fontsLoaded) {
      return (
        null
      )
    }

  



 
  return (
<>
  
        <PaperProvider  theme={theme}>
  
        <ThemeProvider>

          
  
       <AuthContext.Provider value={authContext}>
     
    
         
       <RootSiblingParent> 
      
     
       


       <ClientContext.Provider value={client}>
       <StatusBar   style="light" />
<NavigationContainer  theme={theme}>
  

{  state.userToken == null ? (
   
   <AuthNavigator/> 
)
:
(

  <SafeAreaView  style={container}>
 <DrawerNavigator/> 
     
 </SafeAreaView>
 
)
}

  </NavigationContainer>
            </ClientContext.Provider>
  
    
     
     </RootSiblingParent>
   

   
     
       </AuthContext.Provider>
   
 

   

   </ThemeProvider>
   </PaperProvider>
    
    </>



   
   
  );
}




export default App;