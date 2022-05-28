import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'react-native-paper';

import LinearGradient from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Entypo } from '@expo/vector-icons';
import ActionBarImage2 from './ActionBarImage2';
const SignInScreen = ({navigation}) => {

    const [state, setstate] = React.useState('')

    React.useEffect(() => {
  
    
      const func = async () => {
        const phoneNumber = await  AsyncStorage.getItem("userToken")
      
        setstate(JSON.parse(phoneNumber))
        setData({
            ...data,
            fullname: JSON.parse(phoneNumber).fullname,
            email: JSON.parse(phoneNumber).email,
        });
       
       
      
      }
      
        
         func()
      
        
       }, [])

    const [data, setData] = React.useState({
        email: "",
        fullname: '',
        
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlefullnameChange = (val) => {
        setData({
            ...data,
            fullname: val
        });
    }

    const handleConfirmfullnameChange = (val) => {
        setData({
            ...data,
            confirm_fullname: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const { colors } = useTheme();
    const paperTheme = useTheme();
   const  container = {
        flex: 1, 
        backgroundColor: colors.splashbg
      }
      const      text_header = {
        color: colors.splashColor,
        fontWeight: 'bold',
        fontSize: 30
    }


    return (
      <View style={container}>

<ActionBarImage2  navigation={navigation}  title={"Edit Profile"}/>
   
        <View 
           
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.splashbg,
                flex: Platform.OS === 'ios' ? 3 : 5,
            
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                paddingHorizontal: 20,
                paddingVertical: 30
            }]}
        >
            <ScrollView>
            <Text style={[styles.text_footer , {
            color:colors.text
            }
            ]}>Email</Text>
            <View style={styles.action}>
            <Entypo name="email" size={24} color={colors.text} />
                <TextInput 
                  value={data.email}
                    placeholder="Email"
                    style={[styles.textInput , , {
                        color:"#92A0A9"
                        }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
                : null}
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35,
                color:colors.text
            }]}>Full Name</Text>
            <View style={styles.action}>
            <Feather name="user-check" size={24} color={colors.text} />
                <TextInput 
                    placeholder="Full Name"
                     value={data.fullname}
                    style={[styles.textInput, 
                        , {
                            color:"#92A0A9"
                            }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlefullnameChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                  
                </TouchableOpacity>
            </View>

         
       
            <View  style={{width:"100%", justifyContent:"center", alignItems:"center"}} >
                <TouchableOpacity
                style={[styles.button , {backgroundColor:colors.brandColor}]}
                    onPress={() => {navigation.navigate("User Profile")}}
                >
              
                    <Text style={[styles.textSign, {
                        color:"white" , 
                    }]}>Save</Text>
            
                </TouchableOpacity>

               
            </View>
            </ScrollView>
        </View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily:"BasisGrotesque"
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,fontFamily:"BasisGrotesque"
    },
    action: {
        flexDirection: 'row',
        padding: 20,
        marginTop:10,
        borderRadius:10,
    
        borderBottomWidth: 1,
      
      backgroundColor:"#041825",
        
        fontFamily:"BasisGrotesque"
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontFamily:"BasisGrotesque"
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        width: "30%",
        height: 50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:"center",
        bottom: 10,
    },
    signIn: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontFamily:"BasisGrotesque"
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily:"BasisGrotesque"
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });