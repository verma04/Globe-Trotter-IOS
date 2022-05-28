import * as React from 'react'

import PDFReader from 'rn-pdf-reader-js'
 


import { View, Text } from 'react-native'


const ViewPdf = () => {
  return (
    <PDFReader
    source={{
      uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
    }}
  />
  )
}

export default ViewPdf