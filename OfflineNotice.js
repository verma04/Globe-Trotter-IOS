import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet , Image } from 'react-native';
const { width } = Dimensions.get('window');
function OfflineNotice() {
  return (
    <View style={styles.offlineContainer}>
           <Image
        style={styles.tinyLogo}
        source={    {uri:  ('https://res.cloudinary.com/dzcmadjl1/image/upload/v1639219289/lf6hnfqrwac5o64p0tyy.png')   }
  }/>
            <Text style={styles.offlineText}>Yh oh , there was a problem</Text>
      <Text style={styles.offlineText}>The internt connection appears to be offline .</Text>
      <Text style={styles.offlineText}>Try Again</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  offlineContainer: {

     flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width,
    height: Dimensions.get('window').height,
    position: 'absolute',
  
  },
  tinyLogo : {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  offlineText: { 
    
    color:"black",
    
    fontFamily: 'Roboto_500Medium'
   
  }
});
export default OfflineNotice;