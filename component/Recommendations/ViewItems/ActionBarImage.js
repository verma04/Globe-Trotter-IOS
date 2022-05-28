import React from 'react';
import { StyleSheet,  View , Image} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import {
  useTheme,
Text

} from 'react-native-paper';
import { MaterialCommunityIcons , MaterialCommunity } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
export default function Header2({navigation , title}) {
  const { colors } = useTheme();
  const paperTheme = useTheme();


  const   header = {
    marginTop:  Platform.OS =="android" ?  30 : 0,
    width: '100%',
    backgroundColor:colors.header,
flexDirection:'column',
  
 
    alignItems: 'center',
    justifyContent: "center",

 


  }
 return (
    <View style={header}>
        <View style={styles.header2}>
      {/* <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} /> */}
      <MaterialCommunityIcons name="keyboard-backspace" size={30} color="#50606B" onPress={() =>  navigation.goBack()} />
   

         
    </View>
    <View style={styles.headerText}>
        <Text style={{fontSize:20, fontFamily:"Cushingstd" , textAlign:"center"}} >{title}</Text>
       
          </View>
    </View>
  );
}

const styles = StyleSheet.create({

  header2: {
 
    width: '90%',
  flexDirection:'row',
    height: 60,
    alignItems: 'center',
    position: "relative",
    justifyContent: "space-between",

  },
  headerText: {

borderColor:"green",
width: "88%",

  
  marginBottom:10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection:'column',
  marginBottom:20,
  },
 
});