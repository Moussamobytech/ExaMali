



// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Modal,
//   TextInput,
//   ScrollView
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const ProfileScreen = () => {
//   const navigation = useNavigation();
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [profileImage, setProfileImage] = useState(require('./../../Asset/profilee.png'));

//   const dynamicTextColor = isDarkMode ? '#fff' : '#000';
//   const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
//   const dynamicImageTintColor = isDarkMode ? '#fff' : '#000';

//   const [modalVisible, setModalVisible] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [tempName, setTempName] = useState('');
//   const [tempEmail, setTempEmail] = useState('');

//   // Load user data on mount
//   useEffect(() => {
//     const loadUserData = async () => {
//       try {
//         const userData = await AsyncStorage.getItem('userData');
//         if (userData) {
//           const { username, email } = JSON.parse(userData);
//           setName(username);
//           setEmail(email);
//           setTempName(username);
//           setTempEmail(email);
//         }
//       } catch (error) {
//         console.error('Erreur lors du chargement des données utilisateur:', error);
//       }
//     };
//     loadUserData();
//   }, []);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const selectImage = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     launchImageLibrary(options, response => {
//       if (response.assets && response.assets.length > 0) {
//         setProfileImage({ uri: response.assets[0].uri });
//       }
//     });
//   };

//   // Save profile changes
//   const saveProfile = async () => {
//     try {
//       setName(tempName);
//       setEmail(tempEmail);
//       await AsyncStorage.setItem('userData', JSON.stringify({
//         username: tempName,
//         email: tempEmail,
//       }));
//       setModalVisible(false);
//     } catch (error) {
//       console.error('Erreur lors de la sauvegarde du profil:', error);
//     }
//   };

//   // Handle logout
//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.clear();
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'Connexion' }],
//       });
//     } catch (error) {
//       console.error('Erreur lors de la déconnexion:', error);
//     }
//   };

//   // Objet contenant les icônes
//   const icons = {
//     download: require('./../../Asset/download.png'),
//     logout: require('./../../Asset/logout.png'),
//     condition: require('./../../Asset/condition.png'),
//     vector: require('./../../Asset/Vector.png'),
//     Info: require('./../../Asset/Info.png'),
//     Star: require('./../../Asset/Star.png'),
//     chat: require('./../../Asset/chat.png'),
//   };

//   const options = [
//     { id: 1, text: 'Les sujets téléchargés', icon: 'download' },
//     { id: 4, text: 'A propos du ExaMali', icon: 'Info', route: 'ProposExamali' },
//     { id: 3, text: 'Conditions d\'utilisation', icon: 'condition', route: 'Condition' },
//     { id: 5, text: 'Politique de confidentialité', icon: 'Star', route: 'Politique' },
//     { id: 6, text: 'Chat', icon: 'chat', route: 'Chat' },
//     { id: 2, text: 'Se déconnecter', icon: 'logout', action: handleLogout },
//   ];

//   return (
//     <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image source={require('./../../Asset/return.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>Mon Profil</Text>
//         <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
//           <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
//             <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
//               {isDarkMode ? 'ON' : 'OFF'}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.profileSection}>
//         <TouchableOpacity onPress={selectImage}>
//           <Image source={profileImage} style={styles.profileImage} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={selectImage} style={styles.cameraIcon}>
//           <Image source={require('./../../Asset/camera.png')} style={styles.cameraIconImage} />
//         </TouchableOpacity>
//         <View style={styles.profileInfo}>
//           <Text style={[styles.profileName, { color: dynamicTextColor }]}>{name}</Text>
//           <Text style={[styles.profileEmail, { color: dynamicTextColor }]}>{email}</Text>
//           <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
//             <Text style={[styles.editButtonText, { color: dynamicTextColor }]}>Éditer le Profil</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView contentContainerStyle={styles.optionsContainer}>
//         {options.map(item => (
//           <TouchableOpacity 
//             key={item.id} 
//             style={styles.optionRow}
//             onPress={() => item.action ? item.action() : item.route && navigation.navigate(item.route)}
//           >
//             <Image 
//               source={icons[item.icon]} 
//               style={[styles.optionIcon, { tintColor: dynamicImageTintColor }]} 
//             />
//             <Text style={[styles.optionText, { color: dynamicTextColor }]}>
//               {item.text}
//             </Text>
//             <Image 
//               source={icons.vector} 
//               style={[styles.optionIcons, { tintColor: dynamicImageTintColor }]} 
//             />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <Modal visible={modalVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Modifier le Profil</Text>
//             <TextInput
//               style={styles.input}
//               value={tempName}
//               onChangeText={setTempName}
//               placeholder="Nom"
//             />
//             <TextInput
//               style={styles.input}
//               value={tempEmail}
//               onChangeText={setTempEmail}
//               placeholder="Email"
//               keyboardType="email-address"
//             />
//             <View style={styles.modalButtons}>
//               <TouchableOpacity
//                 style={styles.saveButton}
//                 onPress={saveProfile}
//               >
//                 <Text style={styles.saveButtonText}>Enregistrer</Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
//                 <Text style={styles.cancelButtonText}>Annuler</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
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
//     marginBottom:10
//   },
//   input: {
//     backgroundColor: '#ddd',
//     color: '#000',
//   },
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 15,
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   toggleContainer: {
//     padding: 5,
//   },
//   toggleSwitch: {
//     width: 50,
//     height: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   toggleOn: {
//     backgroundColor: '#4caf50',
//   },
//   toggleOff: {
//     backgroundColor: 'red',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   toggleTextOn: {
//     color: '#fff',
//   },
//   toggleTextOff: {
//     color: '#000',
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   cameraIcon: {
//     position: 'absolute',
//     top: 60,
//     left: 65,
//     width: 20,
//     height: 20,
//     borderRadius: 15,
//     padding: 5,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   profileInfo: {
//     marginLeft: 15,
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   profileEmail: {
//     fontSize: 14,
//     color: '#666',
//   },
//   editButton: {
//     marginTop: 5,
//     backgroundColor: '#00D3EB',
//     paddingVertical: 5,
   
//     borderRadius: 5,
//     width: 100,
  
//   },
//   editButtonText: {
//     color: '#fff',
//     fontSize: 14,
  
//   },
//   optionsContainer: {
//     padding: 15,
//   },
//   optionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//   },
//   optionIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   optionIcons: {
//     width: 10,
//     height: 18,
//     marginLeft: 'auto',
//   },
//   optionText: {
//     fontSize: 16,
//   },

//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//   modalContent: { width: 300, backgroundColor: '#fff', padding: 20, borderRadius: 10 },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   input: { borderBottomWidth: 1, borderBottomColor: '#ccc', marginBottom: 15, padding: 8, fontSize: 16 },
//   modalButtons: { flexDirection: 'row', justifyContent: 'space-between' },
//   saveButton: { backgroundColor: '#00D3EB', padding: 10, borderRadius: 5 },
//   saveButtonText: { color: '#fff', fontSize: 14 },
//   cancelButton: { backgroundColor: '#ccc', padding: 10, borderRadius: 5 },
//   cancelButtonText: { color: '#000', fontSize: 14 },
// });

// export default ProfileScreen;



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(require('./../../Asset/profilee.png'));
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicImageTintColor = isDarkMode ? '#fff' : '#000';

  // Load user data on mount
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const { username, email } = JSON.parse(userData);
          setName(username);
          setEmail(email);
          setTempName(username);
          setTempEmail(email);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données utilisateur:', error);
      }
    };
    loadUserData();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage({ uri: response.assets[0].uri });
      }
    });
  };

  const saveProfile = async () => {
    try {
      setName(tempName);
      setEmail(tempEmail);
      await AsyncStorage.setItem('userData', JSON.stringify({
        username: tempName,
        email: tempEmail,
      }));
      setModalVisible(false);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du profil:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Connexion' }],
      });
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  const iconNames = {
    download: 'file-download',
    logout: 'logout',
    condition: 'gavel',
    vector: 'chevron-right',
    Info: 'info',
    Star: 'lock',
    chat: 'chat',
    camera: 'camera',
    back: 'arrow-back',
  };

  const options = [
    { id: 1, text: 'Les sujets téléchargés', icon: 'download' },
    { id: 4, text: 'A propos du ExaMali', icon: 'Info', route: 'ProposExamali' },
    { id: 3, text: 'Conditions d\'utilisation', icon: 'condition', route: 'Condition' },
    { id: 5, text: 'Politique de confidentialité', icon: 'Star', route: 'Politique' },
    { id: 6, text: 'Chat', icon: 'chat', route: 'Chat' },
    { id: 2, text: 'Se déconnecter', icon: 'logout', action: handleLogout },
  ];

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={iconNames.back} size={24} color={dynamicTextColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: dynamicTextColor }]}>Mon Profil</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleOn : styles.toggleOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.toggleTextOn : styles.toggleTextOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <TouchableOpacity onPress={selectImage}>
          <Image source={profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={selectImage} style={styles.cameraIcon}>
          <Icon name={iconNames.camera} size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Text style={[styles.profileName, { color: dynamicTextColor }]}>{name}</Text>
          <Text style={[styles.profileEmail, { color: dynamicTextColor }]}>{email}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.editButtonText}>Éditer le Profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {options.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.optionRow}
            onPress={() => item.action ? item.action() : item.route && navigation.navigate(item.route)}
          >
            <Icon
              name={iconNames[item.icon]}
              size={24}
              color={dynamicImageTintColor}
              style={styles.optionIcon}
            />
            <Text style={[styles.optionText, { color: dynamicTextColor }]}>
              {item.text}
            </Text>
            <Icon
              name={iconNames.vector}
              size={18}
              color={dynamicImageTintColor}
              style={styles.optionIcons}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modifier le Profil</Text>
            <TextInput
              style={styles.input}
              value={tempName}
              onChangeText={setTempName}
              placeholder="Nom"
            />
            <TextInput
              style={styles.input}
              value={tempEmail}
              onChangeText={setTempEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
                <Text style={styles.saveButtonText}>Enregistrer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
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
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ddd',
    color: '#000',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleContainer: {
    padding: 5,
  },
  toggleSwitch: {
    width: 50,
    height: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleOn: {
    backgroundColor: '#4caf50',
  },
  toggleOff: {
    backgroundColor: 'red',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  toggleTextOn: {
    color: '#fff',
  },
  toggleTextOff: {
    color: '#000',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cameraIcon: {
    position: 'absolute',
    top: 60,
    left: 65,
    width: 30, // Increased for better visibility
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00D3EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  editButton: {
    marginTop: 5,
    backgroundColor: '#00D3EB',
    paddingVertical: 5,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  optionsContainer: {
    padding: 15,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  optionIcon: {
    marginRight: 10,
  },
  optionIcons: {
    marginLeft: 'auto',
  },
  optionText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    padding: 8,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#00D3EB',
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 14,
  },
});

export default ProfileScreen;