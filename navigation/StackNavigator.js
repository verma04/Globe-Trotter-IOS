
import React from "react";
import { createStackNavigator  } from "@react-navigation/stack";
import {View, Image , TouchableOpacity, Pressable} from 'react-native';
import Home from "../component/screens/Home";
import Explore from "../component/screens/Explore";
import {
  useTheme,

Text
} from 'react-native-paper';
import OfferS from '../component/search/Offer'
import CalenderS from '../component/search/Calender'
import ViewItemAm from '../component/Recommendations/ViewItems/ViewItems'

import { AuthContext } from "../context/context";
import { MaterialIcons } from '@expo/vector-icons';
import Contact from "../component/screens/Contact";
import Main from '../component/Recommendations/Main'
import AmbassaDor from '../component/Recommendations/AmBassdors'
import ActionBarImage from '../component/shared/ActionBarImage'
import ActionBarImage2 from '../component/shared/ActionBarImage2'
import Costomer from '../component/Recommendations/Costomers'
import { Ionicons } from '@expo/vector-icons'; 
import AmProfile from "../component/Recommendations/AmProfile";
import HomeCon from '../component/screens/Home'
import SubCategory from '../component/screens/SubCategory'
import List from '../component/screens/List'
import ViewItems from "../component/screens/ViewItems/ViewItems";
import MemberShip from '../component/MyAccount/MemberShip'
import MainPage from '../component/Calender/Main'
import Events from '../component/Calender/Events'
import CalenderEvent from '../component/Calender/CalenderEvent'
import Location from "../component/screens/Villa/Location";
import VillaList from "../component/screens/Villa/VillaList";
import BospokeList from "../component/screens/bospoke/BospokeList";
import BospokeListView from "../component/screens/bospoke/ViewItems";
import JetList from "../component/screens/jetCharters/Jet";

import Journal from '../component/Journal/Journal'
import Section from "../component/Journal/Section";

import Montlyspotlight  from '../component/montlyspotlight/Monthly'
import OfferView  from '../component/montlyspotlight/Section'
import Search from "../component/search/Search";
import WishList from "../component/Wishlist/WishList";
import ActionBarSaerch from "../component/shared/ActionBarSearch";
import CalenderCategory from "../component/Calender/CalenderCategory";
import EventSub from "../component/Calender/EventsSub";
import Club from "../component/clubBenifits/club";
import SectionClub from "../component/clubBenifits/SectionClub";
import Profile from "../component/MyAccount/Profile";
import Message from "../component/MyAccount/Message";
import UserProfileView from "../component/MyAccount/UserProfileView";
import EditProfile from "../component/MyAccount/EditProfile";
import PrivacyPolicy from '../component/MyAccount/PrivacyPolicy'

import JournalSearch from  '../component/search/Journal'
import faq from "../component/MyAccount/faq";
const Stack = createStackNavigator();



const MontlySpotlightStackNavigator = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Montlyspotlight"
    screenOptions={{

     headerStyle: {
    
      backgroundColor:colors.borderColor
     },
     headerTitleStyle: {
      fontFamily: "font",
     
    },
     
     color:colors.icon,
     headerTintColor: colors.icon,

   }}
   
    >
  
  <Stack.Screen name="Montlyspotlight"  component={Montlyspotlight} 
    
    options={{
     
      title: "Monthly Spotlight",
      color:colors.icon,
      header: () => <ActionBarImage  title="Monthly Spotlight"  navigation={navigation}  />,
     
  
    }}
    
    
   />
  
   
  <Stack.Screen
          name="OfferView"
          component={OfferView}
            options={{
            header: ({route}) => <ActionBarImage2 title={route.params.name}  navigation={navigation} last="Montlyspotlight" />,

          }}
          
        />

        <Stack.Screen name="View"  component={ViewItems} 
    
    options={{
      
     
      headerShown: false,
     
  
    }}
    
   />



 </Stack.Navigator>
  );
}

const ClubSpotlightStackNavigator = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Club"
    screenOptions={{

     headerStyle: {
      backgroundColor:colors.borderColor

     },
     headerTitleStyle: {
      fontFamily: "font",
     
    },
     
     color:colors.icon,
     headerTintColor: colors.icon,

   }}
   
    >
  
  <Stack.Screen name="ClubHome"  component={Club} 
    
    options={{
     
      title: "Club Benefits",
      color:colors.icon,
      header: () => <ActionBarImage  navigation={navigation} title={"Club Benefits"}  />,
     
  
    }}
    
    
   />
  
   
  <Stack.Screen
          name="ClubView"
          component={SectionClub}
            options={{
            header: ({route}) => <ActionBarImage2 title={route.params.name}  navigation={navigation}  />,

          }}
        />



 </Stack.Navigator>
  );
}

const JournalStackNavigator = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="JournalHome"
    screenOptions={{

     headerStyle: {
      backgroundColor:colors.borderColor

     },
     headerTitleStyle: {
      fontFamily: "font",
     
    },
     
     color:colors.icon,
     headerTintColor: colors.icon,

   }}
   
    >
  
  <Stack.Screen name="JournalHome"  component={Journal} 
    
    options={{
      headerShown:false,
     
  
    }}
    
    
   />

<Stack.Screen
          name="Section"
          component={Section}
            options={{
              headerShown:false,

          }}
        />
 </Stack.Navigator>
  );
}
const CalenderStackNavigator = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{

     headerStyle: {
      backgroundColor:colors.borderColor

     },
     headerTitleStyle: {
      fontFamily: "font",
     
    },
     
     color:colors.icon,
     headerTintColor: colors.icon,

   }}
   
    >
   <Stack.Screen name="CalenderMain"  component={MainPage} 
    
    options={{
     
      headerShown:false
     
  
    }}
    
   />
     <Stack.Screen name="CalenderCategory"  component={CalenderCategory} 
    
      options={{
        headerShown:false

          }}
   />
  <Stack.Screen
          name="Events"
          component={Events}

          
          options={{
            
            headerShown:false
          }}

          
        />

<Stack.Screen
          name="EventSub"
          component={EventSub}
            options={{
              headerShown:false

          }}
        />


<Stack.Screen
          name="CalenderEvent"
          component={CalenderEvent}
            options={{
           headerShown:false

          }}
        />









 </Stack.Navigator>
  );
}


const RecommendationsStackNavigator = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Ambasssdors"
    screenOptions={{

     headerStyle: {
    
      backgroundColor:colors.borderColor
     },
     headerTitleStyle: {
      fontFamily: "font",
     
    },
     
     color:colors.icon,
     headerTintColor: colors.icon,

   }}
   
    >
  

<Stack.Screen name="Ambasssdors" component={AmbassaDor} 
    options={{
      headerShown:false,
  
    }}
   
   />








<Stack.Screen
          name="AmProfile"
          component={AmProfile}
            options={{
              headerShown:false,

          }}
        />


<Stack.Screen
          name="ViewItemAm"
          component={ViewItemAm}
            options={{
              headerShown:false,

          }}
        />


 </Stack.Navigator>
  );
}

const MainStackNavigator = ({navigation}) => {

  const { colors } = useTheme();
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{

     headerStyle: {
      fontFamily: "font",
   backgroundColor:colors.borderColor

     },
      headerTitleStyle: {
        fontFamily: "font",
       
      },
      
     color:colors.icon,
     headerTintColor: colors.icon,
     

   }}
   
    >
   <Stack.Screen name="Concierge"  component={HomeCon} 
    
    options={{
      header: () => <ActionBarImage  navigation={navigation} title={"Concierge"}  />

     
  
    }}
    
   />


<Stack.Screen name="Explore"  component={Explore} 
 
  
       
   options={{
    headerShown: false,
    
    headerTitleStyle: {
      fontFamily: "font",
     
    }

  }}
  
  
  
    
   />

<Stack.Screen name="Location"  component={Location} 
          
          options={{
            headerShown: false,
          
            headerTitleStyle: {
              fontFamily: "font",
             
            }
        
          }}
    
   />
   

   <Stack.Screen name="SubCategory"  component={SubCategory} 
    
      options={{
        headerShown: false,

          }}
    
   />
   
   <Stack.Screen name="VillaList"  component={VillaList} 
    
      options={{
           
        headerShown: false,
          }}
    
   />
   <Stack.Screen name="List"  component={List} 
    
      options={{
           
        headerShown: false,
          }}
    
   />
     <Stack.Screen name="BospokeList"  component={BospokeList} 
    
      options={{
        headerShown: false,

          }}
    
   />


<Stack.Screen name="JetList"  component={JetList} 
    
      options={{
        headerShown: false,

          }}
    
   />
   
   <Stack.Screen name="ViewItem"  component={ViewItems} 


options={{
   headerShown : false,
   tabBarStyle: { display: "none" },
   tabBarButton: (props) => null
 }}






/>


<Stack.Screen name="BospokeListView"  component={BospokeListView} 
    
    options={({ route }) => ({ title: route.params.name  })}
    
   />

 </Stack.Navigator>

    
  );
}









const AccountStackNavigator = ({navigation}) => {

  const { colors } = useTheme();
  const { signOut, toggleTheme } = React.useContext(AuthContext);
  return (
    <Stack.Navigator 
    screenOptions={{
      
      headerStyle: {
        backgroundColor:colors.borderColor
 
      },
      headerTitleStyle: {
       fontFamily: "font",
      fontSize:21, 
     },
      
      color:colors.icon,
      headerTintColor: colors.icon,
 
    }}
    initialRouteName="Profile"
    >

<Stack.Screen name="Profile"  component={Profile} 
    
    options={{
      title: "My Account",
    
      header: () => <ActionBarImage   title="My Account"  navigation={navigation}  />,

      headerRight: () =>  <MaterialIcons  onPress={()=> signOut()} style={{marginRight:10}} name="logout" size={26} color={colors.text} />
     
  
    }}
    
   />
  <Stack.Screen name="Membership Card"  component={MemberShip} 
    
    options={{
    headerShown: false
   
     
  
    }}
    
   />

<Stack.Screen name="Message"  component={Message} 
    
    options={{
      title: "Chat and Message",
   
     
  
    }}
    
   />

<Stack.Screen name="User Profile"  component={UserProfileView} 
    
    options={{
      headerShown: false
   
    
  
       
    }}
    
   />

<Stack.Screen name="Faq"  component={faq} 
    
    options={{
   
   
    
  
       
    }}
    
   />


<Stack.Screen name="Edit Profile"  component={EditProfile} 
    
    options={{
      headerShown: false

  
    }}
    
   />

<Stack.Screen name="PrivacyPolicy"  component={PrivacyPolicy} 
    
    options={{
       headerShown:false

  
    }}
    
   />


   

 </Stack.Navigator>

    
  );
}


const SearchStackNavigator = ({navigation}) => {

  const { colors } = useTheme();
  return (
    <Stack.Navigator 
    screenOptions={{
     
    
      headerStyle: {
        fontFamily: "font",
        backgroundColor:colors.borderColor
  
       },
       
     headerTitleStyle: {
      fontFamily: "font",
     
    },
     
    color:colors.icon,
    headerTintColor: colors.icon,

   }}
   
    >
  


<Stack.Screen name="Search22"  component={Search} 
    
    options={{
      headerShown: false,
      title: "Search22",
      header: () => <ActionBarImage  navigation={navigation}  />,
     
  
    }}
    
   />
   <Stack.Screen name="ViewItem"  component={ViewItems} 


options={{
   headerShown : false,
   tabBarStyle: { display: "none" },
   tabBarButton: (props) => null
 }}






/>

<Stack.Screen name="JournalSearch"  component={JournalSearch} 


options={{
   headerShown : false,
   tabBarStyle: { display: "none" },
   tabBarButton: (props) => null
 }}






/>



<Stack.Screen name="CalenderS"  component={CalenderS} 
    
    options={{
      
     
      headerShown: false
     
     
  
    }}
    
   />

<Stack.Screen name="OfferS"  component={OfferS} 
    
    options={{
      
     
     headerShown: false
     
  
    }}
    
   />



   

 </Stack.Navigator>

    
  );
}


const WishlistStackNavigator = ({navigation}) => {
  const { colors } = useTheme();
  
  return (
    <Stack.Navigator 
    screenOptions={{

      headerStyle: {
        backgroundColor:colors.borderColor
 
      },
      headerTitleStyle: {
       fontFamily: "font",
      fontSize:20, 
     },
      
      color:colors.icon,
      headerTintColor: colors.icon,
 
    }}
   
    >
  


<Stack.Screen name="My Favourites"  component={WishList} 
    
    options={{
   
      color:colors.icon,
      header: () => <ActionBarImage title="My Favourites"  navigation={navigation}  />,
      
  
    }}
    
   />
   

 </Stack.Navigator>

    
  );
}


export { RecommendationsStackNavigator , ClubSpotlightStackNavigator, WishlistStackNavigator , SearchStackNavigator, MontlySpotlightStackNavigator,  JournalStackNavigator, CalenderStackNavigator, MainStackNavigator , AccountStackNavigator };