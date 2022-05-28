

import { View, Text } from 'react-native';
import React from 'react';
import {
  useTheme,


} from 'react-native-paper';
import { WebView } from 'react-native-webview';
export default function Webview() {
  const { colors } = useTheme();
  return (
 
     <WebView 
     style={{ marginTop: 20 , height:1 , backgroundColor:colors.borderColor}}
     originWhitelist={['*']}
      source={{ uri: 'https://artofwearing.com/chat' }}
    />
  
  );
}


