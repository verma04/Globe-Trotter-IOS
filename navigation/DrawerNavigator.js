


import React from "react";
import { Ionicons } from '@expo/vector-icons';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import{ AuthContext } from '../App';
import { DrawerContent } from './DrawerContent'
import {
  useTheme,


} from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import Svg, {
   Circle,
   Ellipse,
   G,
 
   TSpan,
   TextPath,
   Path,
   Polygon,
   Polyline,
   Line,
   Rect,
   Use,
 
   Symbol,
   Defs,
   LinearGradient,
   RadialGradient,
   Stop,
   ClipPath,
   Pattern,
   Mask,
 } from 'react-native-svg';
import { createStackNavigator  } from "@react-navigation/stack";
// import { ContactStackNavigator } from "./StackNavigator";
// import TabNavigator from "./TabNavigator";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from "../component/HomeScreen/HomeScreen";
import { RecommendationsStackNavigator ,WishlistStackNavigator,   MontlySpotlightStackNavigator, JournalStackNavigator, MainStackNavigator , AccountStackNavigator , CalenderStackNavigator , SearchStackNavigator , ClubSpotlightStackNavigator}  from './StackNavigator'
import { View, Text, Image,StatusBar,  ImageBackground, StyleSheet  , Switch , Appearance } from 'react-native';
import { AntDesign  , FontAwesome5 ,Feather ,MaterialIcons , FontAwesome , MaterialCommunityIcons } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewItems from "../component/screens/ViewItems/ViewItems";
import Search from "../component/search/Search";
import WishList from "../component/Wishlist/WishList";
import ActionBarImage from "../component/shared/ActionBarImage";
import { useNavigation } from '@react-navigation/native';
import ViewPdf from "../component/screens/ViewItems/ViewPdf";


var width = Dimensions.get('window').width ;
import { Dimensions } from "react-native";
const Tab = createBottomTabNavigator();

const  DrawerNavigator  = ({ route}) => {


   
     
   const navigation = useNavigation(); 

 
   const { colors } = useTheme();
   const paperTheme = useTheme();
  return (
     <>

   
    <Tab.Navigator
   backhandler="Home"
    backBehavior="Home"
    initialRouteName="Home"
    screenOptions={{
  
 
      headerStyle: {
         fontFamily: "font",
      
         width:width,
         fontFamily: "font",
         backgroundColor:"#031A2A"
        },
         headerTitleStyle: {
           fontFamily: "font",
           fontFamily: "font",
           backgroundColor:"#031A2A"
          
         },
         tabBarLabelStyle: {
            fontSize: 15,
            
            fontFamily:"BasisGrotesque"
            
          },
      tabBarStyle: {
        
         activeTintColor: colors.header,
         inactiveTintColor: 'lightgray',
       
         inactiveTintColor: 'lightgray',
         activeBackgroundColor: colors.header,
         inactiveBackgroundColor: colors.header,
         backgroundColor:colors.header,
       
         paddingTop:10,
       height: 55,
    width:width,
       elevation:0,
       zIndex: 8,
       
   
   
       
     },
    
    
      }}
      tabBarOptions={{
         activeTintColor: colors.brandColor,
         inactiveTintColor: 'lightgray',
      
         inactiveTintColor: 'lightgray',
     
         inactiveBackgroundColor: colors.header,
        
       
         
         
      }}



  
      
    
    >

       












<Tab.Screen name="offers" component={MainStackNavigator}
      
 
    
 
   

      options={{
         headerShown: false,

      backBehavior:"Home",
         title:'',
        tabBarIcon: (tabInfo) => (
      
      <>
         {tabInfo.focused ?
            (

               <>
              
              <Svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M28.2411 0.00278802C25.3869 0.162452 19.7139 0.74361 16.2117 2.85672C15.9701 3.00253 15.8331 3.26179 15.8331 3.53286V22.2136C15.8331 22.8066 16.4909 23.1813 17.0456 22.9062C20.6488 21.1185 25.8598 20.6308 28.4364 20.4973C29.3161 20.4516 30 19.7565 30 18.9233V1.5789C30.0005 0.669682 29.2005 -0.0506046 28.2411 0.00278802ZM13.7883 2.85672C10.2866 0.74361 4.61362 0.162966 1.75941 0.00278802C0.800014 -0.0506046 0 0.669682 0 1.5789V18.9238C0 19.7575 0.683866 20.4527 1.56357 20.4978C4.14122 20.6313 9.35485 21.1196 12.958 22.9082C13.5112 23.1829 14.1669 22.8086 14.1669 22.2172V3.52362C14.1669 3.25204 14.0305 3.00304 13.7883 2.85672Z" fill="#FEA20B"/>
</Svg>
           
           </>
            )
            :
            (
               <Svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path d="M28.2411 0.00278802C25.3869 0.162452 19.7139 0.74361 16.2117 2.85672C15.9701 3.00253 15.8331 3.26179 15.8331 3.53286V22.2136C15.8331 22.8066 16.4909 23.1813 17.0456 22.9062C20.6488 21.1185 25.8598 20.6308 28.4364 20.4973C29.3161 20.4516 30 19.7565 30 18.9233V1.5789C30.0005 0.669682 29.2005 -0.0506046 28.2411 0.00278802ZM13.7883 2.85672C10.2866 0.74361 4.61362 0.162966 1.75941 0.00278802C0.800014 -0.0506046 0 0.669682 0 1.5789V18.9238C0 19.7575 0.683866 20.4527 1.56357 20.4978C4.14122 20.6313 9.35485 21.1196 12.958 22.9082C13.5112 23.1829 14.1669 22.8086 14.1669 22.2172V3.52362C14.1669 3.25204 14.0305 3.00304 13.7883 2.85672Z" fill="#50606B"/>
               </Svg>
            )
    
    }
  </>       
        ),
      }}
            />

<Tab.Screen name="Search"  component={SearchStackNavigator} 
 options={{
   headerShown: false,

   title:'',
   tabBarIcon: (tabInfo) => (

    
      <>
         {tabInfo.focused ?
            (

               <>
           
                  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M9.40774 0C4.22055 0 0 4.22055 0 9.40774C0 14.5949 4.22055 18.8155 9.40774 18.8155C11.4951 18.8151 13.5222 18.1163 15.1665 16.8304L20.336 22L21.9988 20.3372L16.8293 15.1676C18.1158 13.5232 18.815 11.4956 18.8155 9.40774C18.8155 4.22055 14.5949 0 9.40774 0Z" fill="#FEA20B" fill-opacity="0.15"/>
                  </Svg>
               
           
           
           </>
            )
            :
            (
               <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path d="M9.40774 0C4.22055 0 0 4.22055 0 9.40774C0 14.5949 4.22055 18.8155 9.40774 18.8155C11.4951 18.8151 13.5222 18.1163 15.1665 16.8304L20.336 22L21.9988 20.3372L16.8293 15.1676C18.1158 13.5232 18.815 11.4956 18.8155 9.40774C18.8155 4.22055 14.5949 0 9.40774 0Z" fill="#50606B" fill-opacity="0.15"/>
               </Svg>
            )
    
    }
  </>   
   ),
}}
     
   />

<Tab.Screen name="Home" component={MyStack}
      
      options={{
         headerShown: false,
         title:'',
         label:<Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>MyAccount</Text>,
      
        tabBarIcon: (tabInfo) => (
           <>

{tabInfo.focused ?



        (
         <>
        
        <Svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-opacity="0.25" d="M17.7557 0C17.8456 0.215092 17.9715 0.430184 18.0435 0.645276C19.4287 5.09051 20.7959 9.51782 22.1631 13.9631C22.5049 15.0744 22.9007 16.1677 23.1705 17.297C23.3144 17.9064 23.6562 18.1573 24.2139 18.3366C27.6679 19.5017 31.1219 20.6847 34.5579 21.8677C34.7917 21.9394 34.9716 22.1365 35.1875 22.2799C34.9716 22.4413 34.7917 22.6922 34.5579 22.7818C30.888 24.0365 27.1822 25.2375 23.5123 26.5101C23.0086 26.6893 22.4689 27.1016 22.1631 27.5497C20.8139 29.4855 19.5546 31.4751 18.2594 33.4468C17.6657 34.343 17.5578 34.343 16.9821 33.4647C15.6509 31.4393 14.3376 29.4138 12.9884 27.4063C12.7366 27.0478 12.3228 26.7252 11.9091 26.5818C8.22121 25.2912 4.49738 24.0724 0.791539 22.7997C0.503706 22.7101 0.269843 22.495 0 22.3337C0.251853 22.1545 0.467728 21.9215 0.73757 21.8318C4.15558 20.6488 7.57359 19.4837 11.0096 18.3545C11.6212 18.1573 11.8911 17.8347 12.089 17.2253C13.744 11.7584 15.435 6.29144 17.126 0.824519C17.234 0.53773 17.3779 0.268865 17.4858 0C17.5758 0 17.6657 0 17.7557 0ZM4.31748 22.1365C4.33547 22.1724 4.33547 22.2082 4.35346 22.2441C8.74291 22.2441 13.1323 22.2441 17.5038 22.2441C17.5038 16.4545 17.5038 10.6829 17.5038 4.92919C17.3059 5.09051 17.234 5.26975 17.162 5.46692C15.9027 9.62536 14.5895 13.7838 13.4022 17.9602C13.1324 18.9281 12.6466 19.3403 11.7292 19.6271C9.2646 20.4158 6.80004 21.2941 4.31748 22.1365ZM30.96 22.262C30.96 22.2262 30.96 22.1724 30.96 22.1365C28.2256 21.2045 25.4732 20.2724 22.7388 19.3583C22.5409 19.2866 22.235 19.2686 22.0911 19.3762C20.8499 20.2724 19.6446 21.2224 18.2774 22.262C22.6488 22.262 26.8044 22.262 30.96 22.262ZM17.5218 22.8177C16.2086 23.8573 15.0212 24.8431 13.744 25.8469C14.9673 27.7469 16.1726 29.611 17.5218 31.6902C17.5218 28.6251 17.5218 25.7931 17.5218 22.8177Z" fill="#FEA20B"/>
</Svg>

            
       
       
       </>
        )
        :
        (
         <Svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
         <G opacity="0.25">
         <Path fill-opacity="0.15" d="M17.7557 0C17.8456 0.215092 17.9715 0.430184 18.0435 0.645276C19.4287 5.09051 20.7959 9.51782 22.1631 13.963C22.5049 15.0744 22.9007 16.1677 23.1705 17.297C23.3144 17.9064 23.6562 18.1573 24.2139 18.3366C27.6679 19.5017 31.1219 20.6847 34.5579 21.8677C34.7917 21.9394 34.9716 22.1365 35.1875 22.2799C34.9716 22.4413 34.7917 22.6922 34.5579 22.7818C30.888 24.0365 27.1822 25.2374 23.5123 26.5101C23.0086 26.6893 22.4689 27.1016 22.1631 27.5497C20.8139 29.4855 19.5546 31.4751 18.2594 33.4468C17.6657 34.343 17.5578 34.343 16.9821 33.4647C15.6509 31.4393 14.3376 29.4138 12.9884 27.4063C12.7366 27.0478 12.3228 26.7252 11.9091 26.5818C8.22121 25.2912 4.49738 24.0724 0.791539 22.7997C0.503707 22.7101 0.269843 22.495 0 22.3337C0.251853 22.1545 0.467728 21.9215 0.73757 21.8318C4.15558 20.6488 7.57359 19.4837 11.0096 18.3545C11.6212 18.1573 11.8911 17.8347 12.089 17.2253C13.744 11.7584 15.435 6.29144 17.126 0.824519C17.234 0.53773 17.3779 0.268865 17.4858 0C17.5758 0 17.6657 0 17.7557 0ZM4.31748 22.1365C4.33547 22.1724 4.33547 22.2082 4.35346 22.2441C8.74291 22.2441 13.1323 22.2441 17.5038 22.2441C17.5038 16.4545 17.5038 10.6829 17.5038 4.92919C17.3059 5.09051 17.234 5.26975 17.162 5.46692C15.9027 9.62536 14.5895 13.7838 13.4022 17.9602C13.1323 18.9281 12.6466 19.3403 11.7292 19.6271C9.2646 20.4158 6.80004 21.2941 4.31748 22.1365ZM30.96 22.262C30.96 22.2262 30.96 22.1724 30.96 22.1365C28.2256 21.2045 25.4732 20.2724 22.7388 19.3583C22.5409 19.2866 22.235 19.2687 22.0911 19.3762C20.8499 20.2724 19.6446 21.2224 18.2774 22.262C22.6488 22.262 26.8044 22.262 30.96 22.262ZM17.5218 22.8177C16.2086 23.8573 15.0212 24.8431 13.744 25.8469C14.9673 27.7469 16.1726 29.611 17.5218 31.6902C17.5218 28.6251 17.5218 25.7931 17.5218 22.8177Z" fill="white"/>
         </G>
         </Svg>
        )

}
       
     
        
        </>
        ),
     }}
      />

<Tab.Screen name="ViewItem"  component={ViewItems} 


options={{
   headerShown : false,
   tabBarStyle: { display: "none" },
   tabBarButton: (props) => null
 }}






/>

<Tab.Screen name="Wish"  component={WishlistStackNavigator} 

options={{
   headerShown: false,
  
   title:'',
   tabBarIcon: (tabInfo) => (

      <>
      {tabInfo.focused ?
         (

            <>
<Entypo name="heart" size={32} color="#FEA20B" />

        
        
        </>
         )
         :
         (
            <Entypo name="heart" size={32} color="white" style={{opacity:0.25}} />
         )
 
 }
</>   
   ),
}}

     
     />

<Tab.Screen name="ViewPdf"  component={ViewPdf} 


options={{
  
   headerLeft: () => <ActionBarImage  navigation={navigation}  />,
   title:"Brouchue",
   tabBarStyle: { display: "none" },
   tabBarButton: (props) => null
 }}


 



/>


<Tab.Screen name="Club"  component={ClubSpotlightStackNavigator} 


options={{
   headerShown: false,
   title:'',
   headerLeft: () => <ActionBarImage  navigation={navigation}  />,
   
  
   tabBarButton: (props) => null
 }}


 



/>




<Tab.Screen name="Account" component={AccountStackNavigator}
options={{
   headerShown: false,

   title:'',
   tabBarIcon: (tabInfo) => (
      
      <>
      {tabInfo.focused ?
         (

            <>
    <Svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M1.83333 22C1.83333 22 0 22 0 20.1667C0 18.3333 1.83333 12.8333 9.16667 12.8333C16.5 12.8333 18.3333 18.3333 18.3333 20.1667C18.3333 22 16.5 22 16.5 22H1.83333ZM9.16667 11C10.6254 11 12.0243 10.4205 13.0558 9.38909C14.0872 8.35764 14.6667 6.95869 14.6667 5.5C14.6667 4.04131 14.0872 2.64236 13.0558 1.61091C12.0243 0.579463 10.6254 0 9.16667 0C7.70797 0 6.30903 0.579463 5.27758 1.61091C4.24613 2.64236 3.66667 4.04131 3.66667 5.5C3.66667 6.95869 4.24613 8.35764 5.27758 9.38909C6.30903 10.4205 7.70797 11 9.16667 11Z" fill="#FEA20B"/>
</Svg>


          
        
        </>
         )
         :
         (
            <>
         
            <Svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path opacity="0.25" d="M1.83333 22C1.83333 22 0 22 0 20.1667C0 18.3333 1.83333 12.8333 9.16667 12.8333C16.5 12.8333 18.3333 18.3333 18.3333 20.1667C18.3333 22 16.5 22 16.5 22H1.83333ZM9.16667 11C10.6254 11 12.0243 10.4205 13.0558 9.38909C14.0872 8.35764 14.6667 6.95869 14.6667 5.5C14.6667 4.04131 14.0872 2.64236 13.0558 1.61091C12.0243 0.579463 10.6254 0 9.16667 0C7.70797 0 6.30903 0.579463 5.27758 1.61091C4.24613 2.64236 3.66667 4.04131 3.66667 5.5C3.66667 6.95869 4.24613 8.35764 5.27758 9.38909C6.30903 10.4205 7.70797 11 9.16667 11Z" fill="white"/>
</Svg>

       
     
     </>
         )
 
 }
</>   
   ),
 }}

     
   
   
   
      />
  

   
    </Tab.Navigator>
    </>
  );
}


// const  DrawerNavigator = () => {
//   const { colors } = useTheme();
//   const paperTheme = useTheme();

 
//   return (
//     <>
      
//      

      
//     <Drawer.Navigator
//     drawerContent={props => <DrawerContent {...props} />}
//     initialRouteName="Home"
 
//     screenOptions={{
//    headerShown: false,
//    activeTintColor: 'red',
//    activeBackgroundColor: 'grey',
//    inactiveTintColor: 'blue',
//    inactiveBackgroundColor: 'white',
//    labelStyle:{
//      marginLeft:200
//    },
//    headerStyle: {
//       fontFamily: "font",
//       backgroundColor:colors.borderColor

//      },
      
 
 
//    }}
   

   
   
//     >
      

//       <Tab.Screen name="Main" component={MyTab} 
      
//       options={{
//          tabBarVisible: false,
//         title: <Text></Text>,
//         tabBarIcon: (tabInfo) => (
//            <Ionicons
//               name="md-home"
//               size={24}    style={{marginTop:10}}
//               color={tabInfo.focused ? colors.brandColor : "#8e8e93"}
//            />
//         ),
//      }}
//       />
  
      




//     </Drawer.Navigator>
//     </>
//   );
// }



const MyStack = () => {
   const { colors } = useTheme();
   const paperTheme = useTheme();
   return (
     <>
       
        
         
     <Stack.Navigator
     drawerContent={props => <DrawerContent {...props} />}
     initialRouteName="Home"
  
     screenOptions={{
    headerShown: false,
    activeTintColor: 'red',
    activeBackgroundColor: 'grey',
    inactiveTintColor: 'blue',
    inactiveBackgroundColor: 'white',
    labelStyle:{
      marginLeft:200
    },
 
  
  
    }}
    
 
    
    
     >
       
 
       <Tab.Screen name="Home" component={HomeScreen} 
       
       options={{
          tabBarVisible: false,
         title: 'Home',
         tabBarIcon: (tabInfo) => (
            <Ionicons
               name="md-home"
               size={24}    style={{marginTop:10}}
               color={tabInfo.focused ? colors.brandColor : "#8e8e93"}
            />
         ),
      }}
       />
       <Tab.Screen name="Amabassdors" component={RecommendationsStackNavigator}
       
       options={{
          title: 'Ambassador',
          tabBarIcon: (tabInfo) => (
             <FontAwesome5 name="user-astronaut"
                size={24}    style={{marginTop:10}}
                color={tabInfo.focused ? colors.brandColor : "#8e8e93"}
             />
          ),
       }}
       />
    
      
   
   <Tab.Screen name="Concierge" component={MainStackNavigator}
      
       options={{
         title: 'Concierge',
         tabBarIcon: (tabInfo) => (
          <FontAwesome5 name="hotel"
               size={24}    style={{marginTop:10}}
               color={tabInfo.focused ? colors.brandColor : "#8e8e93"}
            />
         ),
      }}
       />
 
 <Tab.Screen name="Journal" component={JournalStackNavigator}
       
       options={{
         title: 'Journal',
         tabBarIcon: (tabInfo) => (
          <FontAwesome name="book"
                size={24}    style={{marginTop:10}}
               color={tabInfo.focused ? colors.brandColor : "#8e8e93"}
            />
         ),
      }}
       />
 
 <Tab.Screen name="Calender" component={CalenderStackNavigator}
       
       options={{
         title: 'Calendar',
         tabBarIcon: (tabInfo) => (
 
      
          <AntDesign name="calendar"
          size={24}    style={{marginTop:10}}
               color={tabInfo.focused ? colors.brandColor : "#8e8e93"}
            />
         ),
      }}
       />
       
 
 
 
 
     </Stack.Navigator>
     </>
   );
 }


// function CustomDrawerContent(props) {
//   const {  toggleTheme } = React.useContext(AuthContext);
//     const containerStyle = {
//         flex: 1,
  
//         backgroundColor: "white",
//     };
   

// const image = { uri: "https://res.cloudinary.com/dzcmadjl1/image/upload/v1639054997/a8hbbdco6phlgf89xzbz.png" };
//     return (
//       <View style={styles.containerStyle}>
//             <ImageBackground source={image}    blurRadius={8} resizeMode="cover" style={styles.image}>

//         <DrawerContentScrollView {...props}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               alignItems:'center',
//               padding: 20,
              
//               marginBottom: 20,
//             }}
//           >
//              <Image
//               source={{
//                 uri: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1639055955/bb9pgkneeqki65sgwj7f.png',
//               }}
//               style={styles.logo}
//             />
//             <View>
//               <Text  style={{fontSize:20, color:"white" , fontWeight:'bold'}} >ToolBar</Text>
          
//             </View>

//             <Ionicons onPress={()=> props.navigation.closeDrawer()} name="arrow-back-outline" size={24}    style={{marginTop:10}} color="white" />
           


//           </View>
//           <DrawerItemList {...props} />
//         </DrawerContentScrollView>
//      <Switch onPress={() => {toggleTheme()}}/>
//         </ImageBackground>
//       </View>
//     );
//   }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo: {
    width:60,
    height: 60,
    zIndex:1,
    },
    containerStyle:{
        flex: 1,
  
        backgroundColor: "white",
    },
    image: {
      flex: 1,
      
      justifyContent: "center"
    },
  });
  
  
export default DrawerNavigator;


