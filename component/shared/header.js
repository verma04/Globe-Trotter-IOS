import React from 'react';
import { StyleSheet, Text,  View , Image , Modal , Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons  , AntDesign , Feather} from '@expo/vector-icons'; 

import {
  useTheme,


} from 'react-native-paper';
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
import { Entypo } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Linking, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Header({navigation}) {
  const { colors } = useTheme();
  const [copiedText, setCopiedText] = React.useState('')
  const paperTheme = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);

  const [state, setstate] = React.useState('')
  React.useEffect(() => {
 
  
    const func = async () => {
      const phoneNumber = await  AsyncStorage.getItem("userToken")
    
      setstate(JSON.parse(phoneNumber))
     
    
    }
    
      
       func()
    
      
     }, [])


 const callNumber = () => {
   const phone = '+44 20 7529 5950'
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else  {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
  };
  const   header = {

  marginTop:  Platform.OS =="android" ?  30 : 0,
    width: '100%',

    backgroundColor:colors.header,
  flexDirection:'column',


    alignItems: 'center',
    justifyContent: "center",

   

  }

  const copyToClipboard = () => {
    Clipboard.setString('+44 20 7529 5950')
  }

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);

 return (


    <View style={header}>

<View   style={{ width:70 , justifyContent:"center" , height:70, flexDirection:"row", alignItems:"center", borderRadius:40, backgroundColor:"#041825"}}  >
<Svg width="40" height="40" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M23.7163 0C23.8364 0.289973 24.0046 0.579946 24.1007 0.869919C25.9509 6.86269 27.7771 12.8313 29.6033 18.8241C30.0598 20.3223 30.5884 21.7963 30.9489 23.3187C31.1411 24.1402 31.5976 24.4785 32.3425 24.7202C36.956 26.2909 41.5695 27.8857 46.159 29.4806C46.4714 29.5772 46.7117 29.843 47 30.0364C46.7117 30.2538 46.4714 30.5921 46.159 30.713C41.2572 32.4045 36.3073 34.0235 31.4054 35.7392C30.7326 35.9808 30.0118 36.5366 29.6033 37.1407C27.8011 39.7505 26.1191 42.4327 24.3891 45.0908C23.5961 46.299 23.4519 46.299 22.683 45.115C20.9049 42.3844 19.1508 39.6538 17.3487 36.9474C17.0123 36.4641 16.4596 36.0291 15.907 35.8358C10.9811 34.096 6.00716 32.4528 1.05726 30.7371C0.672802 30.6163 0.360429 30.3263 0 30.1089C0.336401 29.8672 0.624744 29.5531 0.985174 29.4323C5.55061 27.8374 10.1161 26.2667 14.7055 24.7444C15.5225 24.4785 15.8829 24.0436 16.1472 23.222C18.3579 15.8519 20.6166 8.48171 22.8753 1.11156C23.0194 0.724932 23.2117 0.362466 23.3558 0C23.476 0 23.5961 0 23.7163 0ZM5.76687 29.843C5.7909 29.8914 5.7909 29.9397 5.81493 29.988C11.6779 29.988 17.5409 29.988 23.3799 29.988C23.3799 22.1829 23.3799 14.402 23.3799 6.64521C23.1155 6.86269 23.0194 7.10434 22.9233 7.37015C21.2413 12.9763 19.4872 18.5824 17.9013 24.2127C17.5409 25.5176 16.8921 26.0734 15.6667 26.46C12.3747 27.5233 9.08282 28.7073 5.76687 29.843ZM41.3533 30.0122C41.3533 29.9639 41.3533 29.8914 41.3533 29.843C37.7009 28.5865 34.0245 27.3299 30.3722 26.0976C30.1079 26.0009 29.6994 25.9767 29.5072 26.1217C27.8492 27.3299 26.2393 28.6107 24.4131 30.0122C30.252 30.0122 35.8027 30.0122 41.3533 30.0122ZM23.4039 30.7613C21.6498 32.1628 20.0639 33.4919 18.3579 34.8451C19.9918 37.4065 21.6017 39.9196 23.4039 42.7227C23.4039 38.5906 23.4039 34.7726 23.4039 30.7613Z" fill="#FEA20B"/>
</Svg>

</View>
        <View style={styles.header2}>
      {/* <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.icon} /> */}

    
    
        <View style={styles.headerText}>
      <Text  style={{fontSize:20, color:"white" , fontFamily:"Cushingstd"}} >Hello,</Text>
      <Text style={{fontSize:20, color:"white", fontFamily:"Cushingstd"}} > {state.fullname}</Text>
          
          </View>
          <View style={styles.icon}   >
          <Svg  onPress={() => setModalVisible(!modalVisible)} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M17.955 13.0678C16.6567 13.0678 15.4006 12.8567 14.2289 12.4767C14.0453 12.4144 13.848 12.4052 13.6594 12.45C13.4708 12.4948 13.2987 12.5919 13.1628 12.73L11.5056 14.8094C8.51833 13.3844 5.72111 10.6928 4.23278 7.6L6.29111 5.84778C6.57611 5.55222 6.66056 5.14056 6.54444 4.77111C6.15389 3.59944 5.95333 2.34333 5.95333 1.045C5.95333 0.475 5.47833 0 4.90833 0H1.25611C0.686111 0 0 0.253333 0 1.045C0 10.8511 8.15944 19 17.955 19C18.7044 19 19 18.335 19 17.7544V14.1128C19 13.5428 18.525 13.0678 17.955 13.0678Z" fill="white"/>
</Svg>

       
          <AntDesign  name="search1" size={24} color={"white"} onPress={() =>  navigation.navigate('Search')} />
         
          
          </View>
        
    </View>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>


          <View style={styles.modalView}>
          <AntDesign  onPress={() => setModalVisible(!modalVisible)} style={{position:"absolute", top:10, right:10 }} name="closecircle" size={24} color="white" />
          <Entypo name="old-phone" size={50} color="white" />
   <Text style={{color:"white", fontSize:17, paddingTop:10 , fontFamily: "Cushingstd"}} >Fancy a Chat?</Text>
   <Text style={{color:"#92A0A9",  paddingTop:10}} >Call Us</Text>
          

          <View style={{width:'90%', padding:10 , marginTop:10, justifyContent:"space-evenly" , alignItems:'center' , backgroundColor:"#041825" , flexDirection:"row"}} >
            <Text style={{color:"#92A0A9" , fontFamily: "Cushingstd"}} >020 7529 5950</Text>
            <Feather onPress={() => copyToClipboard()} name="copy" size={24} color="#92A0A9" />
          </View>
   <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => callNumber()}
            >
              <Text style={styles.textStyle}>Call</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    </View>
  
  );
}

const styles = StyleSheet.create({

  header2: {
  
    width: '90%',
  flexDirection:'row',
    height: 50,
    alignItems: 'center',
    justifyContent: "space-between",

 
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: "#051C2C",
    borderRadius: 20,
    padding: 35,
    width: 300,
    height: 300,
    position: 'relative',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonClose: {
    marginTop:30,
    padding: 15,
    paddingLeft:30,
    paddingRight:30,
    borderRadius:10,
    backgroundColor: "#FEA20B",
  },
  headerText: {
    

width: "50%",
height: "100%",
    textShadowRadius:10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:"row"
  },
  tinyLogo: {
   
    width: 100,
    height: 70,
    resizeMode:"contain"
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",

    width: "20%"
  
   
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:20
  },
 
});