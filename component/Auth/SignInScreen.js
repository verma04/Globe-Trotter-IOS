import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Image,
    Dimensions
} from 'react-native';
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
const {height} = Dimensions.get("screen");

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-root-toast';
import { useTheme } from 'react-native-paper';
import { useMutation } from 'graphql-hooks'
import { AuthContext } from '../../context/context';

import Users from '../../modal/users';

const SignInScreen = ({navigation}) => {

    const LOGIN_USER = `mutation MemberLogin($email: String!, $password: String!) {
        memberLogin(email: $email, password: $password) {
          id
          avatar
          email
          phone
          fullname
          role
          status
          token
          membershipId
        }
      }`
    const [login , {data:data1, error, loading}] = useMutation(LOGIN_USER)
   
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 5 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const errorMessage = (error) => {
        
        return (error.graphQLErrors && error.graphQLErrors[0].message) ||  'Ooooops something went wrong...'
      }

    if(error){
        let toast =  Toast.show(errorMessage(error), {
            duration: Toast.durations.LONG,
            position: 150,
            shadow: true,
            animation: true,
            hideOnPress: true,
        
          });
          setTimeout(function hideToast() {
            Toast.hide(toast);
          }, 2500);
    }

    const loginHandle = (userName, password) => {

 

       

        login({variables:{email:userName, password:password}})
    
       

        // const foundUser = Users.filter( item => {
        //     return userName == item.username && password == item.password;
        // } );

        // if ( data.usernamPe.length == 0 || data.password.length == 0 ) {
        //     Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        //         {text: 'Okay'}
        //     ]);
        //     return;
        // }

        // if ( foundUser.length == 0 ) {
        //     Alert.alert('Invalid User!', 'Username or password is incorrect.', [
        //         {text: 'Okay'}
        //     ]);
        //     return;
        // }
        // signIn(foundUser);
    }


    if(data1 && data1.memberLogin ) {
      
        signIn(data1.memberLogin)
    }
  
    const paperTheme = useTheme();

  const   container = {
        flex: 1, 
        backgroundColor: "#051C2C",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start"
      }

const      text_header = {
        color: colors.splashColor,
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily:"BasisGrotesque"
    }

    return (
      <View style={container}>



<View   style={{top:0 , backgroundColor:'#041825', width:"80%" , justifyContent:"center" , alignItems:"center", height:300, borderBottomLeftRadius:200,  borderBottomRightRadius:200}}  >

    
<Image
        style={styles.logo}
        resizeMode="cover"
        imageStyle={{ borderRadius: 20}}
      source={{
          
         uri: colors.darklogo}}
    ></Image>
</View>
          {/* <View   style={{position:"absolute" , top:0 , backgroundColor:'#041825', width:"90%" , justifyContent:"center" , alignItems:"center", height:350, borderBottomLeftRadius:200,  borderBottomRightRadius:200}}  >
<Image
        style={styles.logo}
        resizeMode="cover"
        imageStyle={{ borderRadius: 20}}
      source={{
          
         uri: colors.darklogo}}
    ></Image>
</View> */}
        <View 
        
            style={[styles.footer, {
                backgroundColor: colors.splashbg
            }]}
        >


            <Text style={[styles.text_footer, {
                color: colors.text,  fontFamily:"Cushingstd"
            }]}>Login</Text>
            <View style={styles.action}>
            <Svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M1.4 17C1.4 17 1.4 17 1.4 17C1.39996 17 0 17 0 15.5833C0 14.1667 1.4 9.91667 7 9.91667C12.6 9.91667 14 14.1667 14 15.5833C14 17 12.6 17 12.6 17C12.6 17 12.6 17 12.6 17H1.4ZM7 8.5C8.11391 8.5 9.1822 8.05223 9.96985 7.2552C10.7575 6.45817 11.2 5.37717 11.2 4.25C11.2 3.12283 10.7575 2.04183 9.96985 1.2448C9.1822 0.447767 8.11391 0 7 0C5.88609 0 4.8178 0.447767 4.03015 1.2448C3.2425 2.04183 2.8 3.12283 2.8 4.25C2.8 5.37717 3.2425 6.45817 4.03015 7.2552C4.8178 8.05223 5.88609 8.5 7 8.5Z" fill="#92A0A9"/>
</Svg>

                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <View
                    
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <View  duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </View>
            }
            

        
            <View style={styles.action}>
            <Svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M14.2857 7.875H13.4286V5.34375C13.4286 2.39766 10.9929 0 8 0C5.00714 0 2.57143 2.39766 2.57143 5.34375V7.875H1.71429C0.767857 7.875 0 8.63086 0 9.5625V16.3125C0 17.2441 0.767857 18 1.71429 18H14.2857C15.2321 18 16 17.2441 16 16.3125V9.5625C16 8.63086 15.2321 7.875 14.2857 7.875ZM10.5714 7.875H5.42857V5.34375C5.42857 3.94805 6.58214 2.8125 8 2.8125C9.41786 2.8125 10.5714 3.94805 10.5714 5.34375V7.875Z" fill="#92A0A9"/>
</Svg>

                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <View  duration={500}>
            <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
            </View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#FEA20B', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                {loading ? 
                (
                    <TouchableOpacity
                    style={styles.signIn}
                   
                >
             
             <Image source={{uri: 'https://globe-trotte.fra1.digitaloceanspaces.com/20220128-zkic5-sas'}}
             style={{width: 50, height: 50 }}
             />

             
                </TouchableOpacity>
                )
                :
                (
                    <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
             
                    <Text style={[styles.textSign, {
                        color:colors.splashColor,
                        
                    }]}>Login</Text>
             
                </TouchableOpacity>
                )

                }
               

              
            </View>
        </View>
      </View>
    );
};
    const height_logo = height * 0.20;
export default SignInScreen;

const styles = StyleSheet.create({
 
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#151e2f',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: "80%",
    },
  
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 20,
     backgroundColor:"#041825",
     
    borderRadius:10,
    
        fontFamily:"BasisGrotesque"
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontFamily:"BasisGrotesque"
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        fontFamily:"BasisGrotesque"
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        fontFamily:"BasisGrotesque"
    },
    signIn: {
        width: '60%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        fontFamily:"BasisGrotesque",
        backgroundColor:"#FEA20B"
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
  });