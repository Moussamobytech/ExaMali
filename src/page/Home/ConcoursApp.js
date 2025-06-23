// import { View, Text } from 'react-native'
// import React from 'react'

// const ConcoursApp = () => {
//   return (
//     <View>
//         <TouchableOpacity
//                           style={styles.card}
//                           onPress={() => navigation.navigate('Examalichoix')}
//                         >
//                           <Image source={require('./../../Asset/testing.png')} style={styles.iconImage} />
//                           <View style={styles.textContainer}>
//                             <Text style={styles.subject}>Mathématiques</Text>
//                             <Text style={styles.title}>Mathématiques du DEF 2020</Text>
//                           </View>
//                           <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('Examalichoix')}
//               >
//                 <Text style={styles.buttonText}>Voir le sujet</Text>
//               </TouchableOpacity>
//                         </TouchableOpacity>
//     </View>
//   )
// }
// const styles = (
  
// card: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   backgroundColor: '#fff',
//   padding: 10,
//   marginVertical: 5,
//   shadowColor: '#000',
//   shadowOpacity: 0.1,
//   shadowRadius: 5,
//   elevation: 3,
//   width: 366, 
//   height: 87, 
//   minHeight: 80,
//   justifyContent: "center"
// },
// iconImage: {
//   width: 21,
//   height: 28,
//   marginRight: 50,
//   right: -20
// },
// button: {
//   backgroundColor: '#4CAF50', 
//   borderRadius: 20, 
//   paddingVertical: 4,
//   paddingHorizontal: 10,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// buttonText: {
//   color: '#fff', // Texte blanc
//   fontSize: 14,
//   fontWeight: 'bold', // Texte en gras comme dans l'image
// },
// textContainer: {
//   flex: 1,
//   justifyContent: 'center',
//   marginRight: 39,
// },
// subject: {
//   fontSize: 16,
//   fontWeight: 'bold',
//   color: '#000',
// },
// title: {
//   fontSize: 12,
//   color: '#666',
// },


// )
// export default ConcoursApp


import { View, Text } from 'react-native'
import React from 'react'

const ConcoursApp = () => {
  return (
    <View>
      <Text>ConcoursApp</Text>
    </View>
  )
}

export default ConcoursApp