import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function  faq() {
  return (
    <WebView 
   
      source={{ uri: 'https://www.globe-trotter.com/pages/faq' }}
    />
  );
}
