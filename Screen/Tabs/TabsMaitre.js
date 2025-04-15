// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useNavigation } from '@react-navigation/native';

// // Import screen components
// import Sujets from './../../Screen/Tabs/Sujets';
// import Corriges from './../../Screen/Tabs/Corriges';
// import Profil from './../../Screen/Tabs/Profil';
// import HOME from './Home';

// // Import icons
// import accueilIcon from './../../Asset/accueil.png';
// import sujetIcon from './../../Asset/sujet.png';
// import corrigeIcon from './../../Asset/corrige.png';
// import profilIcon from './../../Asset/profil.png';

// const Tab = createBottomTabNavigator();

// const TabsMaitre = () => {
//   const navigation = useNavigation();

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarShowLabel: false,
//         headerShown: route.name !== 'ajoute',
//         tabBarStyle: {
//           position: 'absolute',
//           bottom: 0,
//           right: 0,
//           left: 0,
//           elevation: 0,
//           height: 60,
//           backgroundColor: '#fff',
//         },
//         tabBarActiveTintColor: '#FD4B34',
//         tabBarInactiveTintColor: '#111',
//         tabBarIcon: ({ focused, color }) => {
//           let icon;
//           let label;

//           switch (route.name) {
//             case 'Home':
//               icon = accueilIcon;
//               label = 'Home';
//               break;
//             case 'Sujets':
//               icon = sujetIcon;
//               label = 'Sujets';
//               break;
//             case 'Corriges':
//               icon = corrigeIcon;
//               label = 'Corriges';
//               break;
//             case 'Profil':
//               icon = profilIcon;
//               label = 'Profil';
//               break;
//             default:
//               icon = accueilIcon;
//               label = 'Home';
//               break;
//           }

//           return (
//             <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
//               <Image
//                 source={icon}
//                 style={{ width: 28, height: 28, tintColor: color }}
//               />
//               <Text style={{ fontSize: 12, color, marginTop: 5 }}>{label}</Text>
//             </View>
//           );
//         },
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HOME}
//         options={{
//           headerTitle: 'TECHQUIZ',
//           headerTitleAlign: 'center',
//         }}
//       />
//       <Tab.Screen
//         name="Sujets"
//         component={Sujets}
//         options={{
//           headerTitle: 'Bibliothèque',
//           headerTitleAlign: 'center',
//         }}
//       />
//       <Tab.Screen
//         name="Corriges"
//         component={Corriges}
//         options={{
//           headerTitle: 'Gestion des quiz',
//           headerTitleAlign: 'center',
//         }}
//       />
//       <Tab.Screen
//         name="Profil"
//         component={Profil}
//         options={{
//           headerTitle: 'Profil',
//           headerTitleAlign: 'center',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabsMaitre;


import { View, Text } from 'react-native'
import React from 'react'

const TabsMaitre = () => {
  return (
    <View>
      <Text>TabsMaitre</Text>
    </View>
  )
}

export default TabsMaitre