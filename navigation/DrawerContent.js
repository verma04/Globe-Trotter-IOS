import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,

} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { ImageBackground , Image } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign  , FontAwesome5 ,Feather ,MaterialIcons , FontAwesome} from '@expo/vector-icons'; 
import{ AuthContext } from '../context/context';

import Toast from 'react-native-root-toast';

export function DrawerContent(props) {

    const paperTheme = useTheme();
    const image = { uri: "https://globe-trotte.fra1.digitaloceanspaces.com/20220118-6kkwz-asas" };
    const { signOut, toggleTheme } = React.useContext(AuthContext);

  
    const  toggle =   ()  => {

        
        toggleTheme()
  
        if(paperTheme.dark ) {
            let toast =  Toast.show("Light Mode", {
                duration: Toast.durations.LONG,
              });
              setTimeout(function hideToast() {
                Toast.hide(toast);
              }, 2500);
        }
     
        else {
            let toast =  Toast.show("Dark Mode", {
                duration: Toast.durations.LONG,
              });
              setTimeout(function hideToast() {
                Toast.hide(toast);
              }, 2500); 
        }
    
    }
     
  

    return(
        <View style={{flex:1}}>
               <ImageBackground source={image}    blurRadius={8} resizeMode="cover" style={styles.image}>
            <DrawerContentScrollView {...props}>
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems:'center',
              padding: 20,
              
              marginBottom: 20,
            }}
          >
             <Image
              source={{
                uri: 'https://res.cloudinary.com/dzcmadjl1/image/upload/v1639055955/bb9pgkneeqki65sgwj7f.png',
              }}
              style={styles.logo}
            />
            <View>
              <Text  style={{fontSize:20, color:"white" ,  fontFamily:"font"}} >Tool Bar</Text>
          
            </View>

            <Ionicons onPress={()=> props.navigation.closeDrawer()} name="arrow-back-outline" size={24} color="white" />
           


          </View>
             
                <View style={styles.drawerContent}>
                  

                    <Drawer.Section style={styles.drawerSection}>

                    <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                name="account-check-outline" 
                                color={"white"}
                                size={size}
                                />
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>My Account</Text>}
                            onPress={() => {props.navigation.navigate('Account')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                            
                              <AntDesign
                               name="home"
                              
                                color={"white"}
                                size={size}
                                />
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>Home</Text>} 
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              
                                <MaterialCommunityIcons
                                name="hubspot" 
                                color={"white"}
                                size={size}
                                />
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>Monthly Spotlight</Text>} 
                            onPress={() => {props.navigation.navigate('offers')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <FontAwesome name="book" 
                                color={"white"}
                                size={size}
                                />
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>Journal</Text>} 
                            onPress={() => {props.navigation.navigate('Journal')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                               <>
                                <Image source={require('../assets/Club.png')} resizeMode="contain" style={{ width: 25,   height: 25 }}  />
                               </>
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>Club Benefits</Text>}
                            onPress={() => {props.navigation.navigate('Club')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <MaterialIcons name="privacy-tip" 
                            
                              
                                color={"white"}
                                size={size}
                                />
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>Privacy Policy</Text>}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (

                              <Feather name="users" 
                                
                                color={"white"}
                                size={size}
                                />
                            )}
                            label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>Invite Members</Text>}
                            onPress={() => {props.navigation.navigate('Home')}}
                        />


                        
                    </Drawer.Section>
                    <Drawer.Section >
                        <TouchableRipple onPress={() => {toggle()}}>
                            <View style={styles.preference}>

                                {paperTheme.dark  ?
                                (
                                  <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}  >
                                  Light Theme
                                  </Text>
                                )
                                :
                                (
                                  <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}  >
                               Dark Theme
                                  </Text>
                                )
                                }
                                
                              
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <MaterialCommunityIcons
                        name="exit-to-app" 
                        color={"white"}
                        size={size}
                        />
                    )}
                    label={() => <Text style={{ color: '#fff' ,  fontFamily:"BasisGrotesque" }}>SignOut</Text>}
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    logo: {
      width:60,
      height: 60,
      zIndex:1,
      },
    image: {
        flex: 1,
        
        justifyContent: "center"
      },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: -20,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'white',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });