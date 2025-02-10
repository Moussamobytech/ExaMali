import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(require('./../../Asset/profilee.png'));

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicImageTintColor = isDarkMode ? '#fff' : '#000';

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

  // Objet contenant les icônes
  const icons = {
    download: require('./../../Asset/download.png'),
    logout: require('./../../Asset/logout.png'),
    change: require('./../../Asset/change.png'),
    vector: require('./../../Asset/Vector.png'),
  };

  const options = [
    { id: 1, text: 'Les sujets téléchargés', icon: 'download' },
    { id: 2, text: 'Se déconnecter', icon: 'logout' },
    { id: 3, text: 'Changer de mot de passe', icon: 'change' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: dynamicBackgroundColor }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../../Asset/return.png')} style={styles.backIcon} />
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
          <Image source={require('./../../Asset/camera.png')} style={styles.cameraIconImage} />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Text style={[styles.profileName, { color: dynamicTextColor }]}>Moussa Kouyaté</Text>
          <Text style={[styles.profileEmail, { color: dynamicTextColor }]}>moussakouyate@gmail.com</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={[styles.editButtonText, { color: dynamicTextColor }]}>Éditer le Profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.optionsContainer}>
        {options.map(item => (
          <TouchableOpacity key={item.id} style={styles.optionRow}>
            <Image source={icons[item.icon]} style={[styles.optionIcon, { tintColor: dynamicImageTintColor }]} />
            <Text style={[styles.optionText, { color: dynamicTextColor }]}>{item.text}</Text>
            <Image source={icons.vector} style={[styles.optionIcons, { tintColor: dynamicImageTintColor }]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

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
  backIcon: {
    width: 24,
    height: 24,
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
    backgroundColor: '#ddd',
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
    width: 20,
    height: 20,
    borderRadius: 15,
    padding: 5,
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
    paddingHorizontal: 10,
    borderRadius: 5,
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
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionIcons: {
    width: 10,
    height: 18,
    marginLeft: 'auto',
  },
  optionText: {
    fontSize: 16,
  },
});

export default ProfileScreen;
