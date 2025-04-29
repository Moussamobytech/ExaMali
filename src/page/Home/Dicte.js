import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dicte = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Dictée'); // Default active subject
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const images = [
    { title: 'Dictée', source: require('./../../../Asset/MATH1.png'), route: 'Dicte' },
    { title: 'Rédaction', source: require('./../../../Asset/REDAC1.png'), route: 'Rédaction' },
    { title: 'Anglais', source: require('./../../../Asset/ANGLAIS1.png'), route: 'Anglais' },
    { title: 'Physique', source: require('./../../../Asset/PHY.png'), route: 'Physiquechimie' },
    { title: 'Éducation Civique et Morale', source: require('./../../../Asset/ECM.png'), route: 'Ecm' },
    { title: 'Mathématique', source: require('./../../../Asset/HIST.png'), route: 'Mathématique' },
    { title: 'Biologie', source: require('./../../../Asset/BIOS.png'), route: 'Biologie' },
    { title: 'Histoire', source: require('./../../../Asset/DICTE.png'), route: 'Historique' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      // Simulate a network request with a delay
      setTimeout(() => {
        const results = images.filter((item) =>
          item.title.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(results);
        setModalVisible(true);
      }, 5000); // Simulate a 1-second network delay
    } else {
      setModalVisible(false);
    }
  };

  const handleNavigate = (route) => {
    setActiveSubject(route);
    navigation.navigate(route); // Navigate to the subject page
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.textOn : styles.textOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>Histoire pages</Text>
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>
          Découvrez les anciens sujets des années précédents
        </Text>

        <View style={styles.searchContainer}>
          <TextInput
            style={[
              styles.searchBar,
              {
                backgroundColor: dynamicInputBackground,
                color: dynamicInputTextColor,
              },
            ]}
            placeholder="Rechercher..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.horizontalScrollView, { color: dynamicTextColor }]}>
          {images.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleNavigate(item.route)}
              style={[styles.horizontalItem, activeSubject === item.title && styles.activeHorizontalItem, { color: dynamicTextColor }]}>
              <Text style={[styles.horizontalText, activeSubject === item.title && styles.activeHorizontalText, { color: dynamicTextColor }]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.imagecontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte2024')}>
            <Image source={require('./../../../Asset/dict1.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte2023')}>
            <Image source={require('./../../../Asset/dict2.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte2022')}>
            <Image source={require('./../../../Asset/dict3.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte2021')}>
            <Image source={require('./../../../Asset/dict4.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte2020')}>
            <Image source={require('./../../../Asset/dict5.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte2019')}>
            <Image source={require('./../../../Asset/dict6.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>Résultats de la recherche</Text>
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleNavigate(item.route)} style={styles.modalItem}>
                  <Image source={item.source} style={styles.modalImage} />
                  <Text style={[styles.modalText, { color: dynamicTextColor }]}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    color: '#000',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  imagecontainer: {
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 20,
  },
  image: {
    marginBottom: 10,
    height: 84,
    width: 366,
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  horizontalText: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 16,
  },
  activeHorizontalText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  toggleContainer: {
    padding: 10,
  },
  toggleSwitch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleSwitchOn: {
    backgroundColor: '#4CAF50',
  },
  toggleSwitchOff: {
    backgroundColor: '#f44336',
  },
  toggleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textOn: {
    color: '#fff',
  },
  textOff: {
    color: '#000',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  modalText: {
    fontSize: 16,
    top: -10
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#f44336',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Dicte;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   TextInput,
//   Modal,
//   FlatList,
// } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';

// // Importez les composants pour les autres onglets
// import Sujet from '../../../Screens/Tabs/Sujet';
// import Corrige from '../../../Screens/Tabs/Corrige';
// import Profil from '../../../Screens/Tabs/Profil';


// // Import icons
// // import accueilIcon from './../../../Asset/accueil.png';
// // import accueilIconFocused from './../../../Asset/accueil.png';
// import sujetIcon from './../../../Asset/sujet.png';
// import sujetIconFocused from './../../../Asset/sujet.png';
// import corrigeIcon from './../../../Asset/corrige.png';
// import corrigeIconFocused from './../../../Asset/corrige.png';
// import profilIcon from './../../../Asset/profil.png';
// import profilIconFocused from './../../../Asset/profil.png';


// const Tab = createBottomTabNavigator();

// const DicteScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [activeSubject, setActiveSubject] = useState('Dictée'); // Default active subject
//   const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

//   const images = [
//     { title: 'Dictée', source: require('../../../Asset/MATH1.png'), route: 'Dicte' },
//     { title: 'Rédaction', source: require('../../../Asset/REDAC1.png'), route: 'Rédaction' },
//     { title: 'Anglais', source: require('../../../Asset/ANGLAIS1.png'), route: 'Anglais' },
//     { title: 'Physique', source: require('../../../Asset/PHY.png'), route: 'Physiquechimie' },
//     { title: 'Éducation Civique et Morale', source: require('../../../Asset/ECM.png'), route: 'Ecm' },
//     { title: 'Mathématique', source: require('../../../Asset/HIST.png'), route: 'Mathématique' },
//     { title: 'Biologie', source: require('../../../Asset/BIOS.png'), route: 'Biologie' },
//     { title: 'Histoire', source: require('../../../Asset/DICTE.png'), route: 'Historique' },
//   ];

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (text) {
//       const results = images.filter((item) =>
//         item.title.toLowerCase().includes(text.toLowerCase())
//       );
//       setSearchResults(results);
//       setModalVisible(true);
//     } else {
//       setModalVisible(false);
//     }
//   };

//   const handleNavigate = (route) => {
//     setActiveSubject(route);
//     navigation.navigate(route); // Navigate to the subject page
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const dynamicTextColor = isDarkMode ? '#fff' : '#000';
//   const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
//   const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
//   const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';

//   return (
//     <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
//           <Image source={require('../../../Asset/return.png')} style={styles.returnImage} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
//           <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff]}>
//             <Text style={[styles.toggleText, isDarkMode ? styles.textOn : styles.textOff]}>
//               {isDarkMode ? 'ON' : 'OFF'}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={[styles.subtitle, { color: dynamicTextColor }]}>Histoire pages</Text>
//         <Text style={[styles.subtitle, { color: dynamicTextColor }]}>
//           Découvrez les anciens sujets des années précédents
//         </Text>

//         <View style={styles.searchContainer}>
//           <TextInput
//             style={[
//               styles.searchBar,
//               {
//                 backgroundColor: dynamicInputBackground,
//                 color: dynamicInputTextColor,
//               },
//             ]}
//             placeholder="Rechercher..."
//             placeholderTextColor="#888"
//             value={searchQuery}
//             onChangeText={handleSearch}
//           />
//         </View>

//         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.horizontalScrollView, { color: dynamicTextColor }]}>
//           {images.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => handleNavigate(item.route)}
//               style={[styles.horizontalItem, activeSubject === item.title && styles.activeHorizontalItem, { color: dynamicTextColor }]}>
//               <Text style={[styles.horizontalText, activeSubject === item.title && styles.activeHorizontalText, { color: dynamicTextColor }]}>
//                 {item.title}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         <View style={styles.imagecontainer}>
//           <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
//             <Image source={require('../../../Asset/dict1.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
//             <Image source={require('../../../Asset/dict2.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
//             <Image source={require('../../../Asset/dict3.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
//             <Image source={require('../../../Asset/dict4.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
//             <Image source={require('../../../Asset/dict5.png')} style={styles.image} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
//             <Image source={require('../../../Asset/dict6.png')} style={styles.image} />
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       <Modal visible={isModalVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>Résultats de la recherche</Text>
//             <FlatList
//               data={searchResults}
//               keyExtractor={(item) => item.title}
//               renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => handleNavigate(item.route)} style={styles.modalItem}>
//                   <Image source={item.source} style={styles.modalImage} />
//                   <Text style={[styles.modalText, { color: dynamicTextColor }]}>{item.title}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//             <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Fermer</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// // const TabsMaitre = () => {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         screenOptions={({ route }) => ({
// //           tabBarIcon: ({ focused, color, size }) => {
// //             let icon;
// //             switch (route.name) {
// //               // case 'Dicte':
// //               //   icon = focused
// //               //     ? require('../../../Asset/dict_focused.png')
// //               //     : require('../../../Asset/dict.png');
// //               //   break;
// //               case 'Sujet':
// //                 icon = focused
// //                   ? require('./../../../Asset/sujet_focused.png')
// //                   : require('./../../../Asset/sujet.png');
// //                 break;
// //               case 'Corrige':
// //                 icon = focused
// //                   ? require('../../../Asset/corrige_focused.png')
// //                   : require('../../../Asset/corrige.png');
// //                 break;
// //               case 'Profil':
// //                 icon = focused
// //                   ? require('../../../Asset/profil_focused.png')
// //                   : require('../../../Asset/profil.png');
// //                 break;
// //               default:
// //                 icon = require('../../../Asset/default.png');
// //             }
// //             return <Image source={icon} style={{ width: size, height: size, tintColor: color }} />;
// //           },
// //         })}
// //         tabBarOptions={{
// //           activeTintColor: '#FD4B34',
// //           inactiveTintColor: '#111',
// //         }}
// //       >
// //         <Tab.Screen name="Dicte" component={DicteScreen} />
// //         <Tab.Screen name="Sujet" component={Sujet} />
// //         <Tab.Screen name="Corrige" component={Corrige} />
// //         <Tab.Screen name="Profil" component={Profil} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // };

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
//               // case 'Accueils':
//               //   icon = focused ? accueilIconFocused : accueilIcon;
//               //   label = 'Accueil';
//               //   break;
//               case 'Sujet':
//                 icon = focused ? sujetIconFocused : sujetIcon;
//                 label = 'Sujet';
//                 break;
//               case 'Corrige':
//                 icon = focused ? corrigeIconFocused : corrigeIcon;
//                 label = 'Corrige';
//                 break;
//               case 'Profil':
//                 icon = focused ? profilIconFocused : profilIcon;
//                 label = 'Profil';
             
//             }
  

//           return (
//             <View style={{ alignItems: 'center', justifyContent: 'center', top: 12 }}>
//               <Image
//                 source={icon}
//                 style={{ width: 28, height: 28, tintColor: color }}
//               />
//               <Text style={{ fontSize: 8, color, marginTop: 5 }}>{label}</Text>
//             </View>
//           );
//         },
//       })}
//     >
//       {/* <Tab.Screen
//         name="Accueils"
//         component={Accueils}
//         options={{
//           headerShown: false,
//           headerTitle: 'TECHQUIZ',
//           headerTitleAlign: 'center',
//         }}
//       /> */}
//       <Tab.Screen
//         name="Sujet"
//         component={Sujet}
//         options={{
//           headerShown: false,
//           headerTitle: 'Bibliothèque',
//           headerTitleAlign: 'center',
//         }}
//       />
//       <Tab.Screen
//         name="Corrige"
//         component={Corrige}
//         options={{
//           headerShown: false,
//           headerTitle: 'Gestion des quiz',
//           headerTitleAlign: 'center',
//         }}
//       />
//       <Tab.Screen
//         name="Profil"
//         component={Profil}
//         options={{
//           headerShown: false,
//           // headerTitle
//           // : 'Profil',
//           // headerTitleAlign: 'center',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };


// const darkStyles = StyleSheet.create({
//   container: {
//     backgroundColor: '#121212',
//   },
//   text: {
//     color: '#fff',
//   },
//   input: {
//     backgroundColor: '#333',
//     color: '#fff',
//   },
// });

// const lightStyles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//   },
//   text: {
//     color: '#000',
//   },
//   input: {
//     backgroundColor: '#ddd',
//     color: '#000',
//   },
// });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   returnImage: {
//     width: 30,
//     height: 30,
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     color: '#ccc',
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   searchContainer: {
//     marginBottom: 20,
//   },
//   imagecontainer: {
//     flexDirection: 'column',
//     marginBottom: 20,
//     paddingBottom: 20,
//   },
//   image: {
//     marginBottom: 10,
//     height: 84,
//     width: 366,
//   },
//   searchBar: {
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#333',
//     color: '#fff',
//     paddingHorizontal: 15,
//     fontSize: 16,
//   },
//   horizontalScrollView: {
//     marginBottom: 20,
//   },
//   horizontalText: {
//     color: '#fff',
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   activeHorizontalText: {
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//   },

//   toggleContainer: {
//     padding: 10,
//   },
//   toggleSwitch: {
//     width: 60,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   toggleSwitchOn: {
//     backgroundColor: '#4CAF50',
//   },
//   toggleSwitchOff: {
//     backgroundColor: '#f44336',
//   },
//   toggleText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   textOn: {
//     color: '#fff',
//   },
//   textOff: {
//     color: '#000',
//   },

//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   modalItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   modalImage: {
//     width: 40,
//     height: 40,
//     marginRight: 10,
//   },
//   modalText: {
//     fontSize: 16,
//     top: -10
//   },
//   closeButton: {
//     marginTop: 20,
//     backgroundColor: '#f44336',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default TabsMaitre;
