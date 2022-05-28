import React from 'react';
import { StyleSheet,  View , Image} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import {
  useTheme,
Text

} from 'react-native-paper';
import { color } from 'react-native-reanimated';
export default function Header2({navigation , title}) {
  const { colors } = useTheme();
  const paperTheme = useTheme();
  const { signOut, toggleTheme } = React.useContext(AuthContext);

  const   header = {
    width: '100%',
    backgroundColor:red,
flexDirection:'column',
 
 
    alignItems: 'center',
    justifyContent: "center",

    borderBottomWidth :0.2,
    borderBottomColor: '#8e8e93',


  }


 return (
    <View style={header}>
        <View style={styles.header2}>
      {/* <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} /> */}
      <MaterialCommunityIcons name="keyboard-backspace" size={24} color="#50606B" onPress={() =>  navigation.navigate("Home")} />
      <MaterialIcons name="arrow-back-ios" style={styles.icon} size={20} color={colors.icon} onPress={() =>  navigation.navigate("Home")} />
        <View style={styles.headerText}>
        <Text style={{fontSize:18, fontFamily:"font" , textAlign:"center"}} >{title}</Text>
          
          </View>
         
    </View>
    
    </View>
  );
}

const styles = StyleSheet.create({

  header2: {
 
    width: '99%',
  flexDirection:'row',
    height: 60,
    alignItems: 'center',
    position: "relative",
    justifyContent: "flex-start",

  },
  headerText: {

borderColor:"green",
width: "90%",
height: "100%",
    textShadowRadius:10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
   
    width: 100,
    height: 60,
    resizeMode:"contain"
  },
  icon: {
  

    position: "absolute",
    left: 15,

   
  }
});