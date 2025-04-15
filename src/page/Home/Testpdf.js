// import React from 'react';
// import { View, StyleSheet, ActivityIndicator } from 'react-native';
// import Pdf from 'react-native-pdf';

// const Testpdf = () => {
//   const source = {
//     uri: 'http://192.168.1.17:5000/pdf/2', // ⚠️ Remplace par l'adresse IP de ton PC
//     cache: true,
//   };

//   return (
//     <View style={styles.container}>
//       <Pdf
//         source={source}
//         onLoadComplete={(numberOfPages) => {
//           console.log(`✅ PDF chargé avec ${numberOfPages} pages`);
//         }}
//         onError={(error) => {
//           console.log(`❌ Erreur de chargement du PDF :`, error);
//         }}
//         renderActivityIndicator={() => (
//           <ActivityIndicator size="large" color="#0000ff" />
//         )}
//         style={styles.pdf}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Testpdf;

import { View, Text } from 'react-native'
import React from 'react'

const Testpdf = () => {
  return (
    <View>
      <Text>Testpdf</Text>
    </View>
  )
}

export default Testpdf