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
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(require('./../../Asset/profilee.png'));
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tempName, setTempName] = useState('');
  const [tempEmail, setTempEmail] = useState('');

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
        console.error('Erreur chargement userData :', error);
      }
    };
    loadUserData();
  }, []);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
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

  const theme = {
    background: isDarkMode ? '#121212' : '#f3f3f3',
    card: isDarkMode ? '#1e1e1e' : '#fff',
    text: isDarkMode ? '#fff' : '#000',
    subText: isDarkMode ? '#ccc' : '#555',
    border: isDarkMode ? '#333' : '#ddd',
    icon: isDarkMode ? '#ccc' : '#555',
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

  const handleSettingPress = (item) => {
    if (item.action) {
      item.action();
    } else if (item.route) {
      navigation.navigate(item.route);
    }
  };

  // Actions rapides adaptées aux sujets d'examen
  const quickActions = [
  
    { icon: 'star', label: 'Favoris', action: () => navigation.navigate('Favoris') },
    { icon: 'history', label: 'Historique', action: () => navigation.navigate('Historique') },
  ];

  // Paramètres adaptés au projet
  const settings = [
    { icon: 'info', label: 'À propos de EXAMALI', route: 'ProposExamali' },
    { icon: 'assignment', label: 'Conditions d\'utilisation', route: 'Condition' },
    { icon: 'security', label: 'Politique de confidentialité', route: 'Politique'},
    { icon: 'lightbulb-outline', label: 'Suggestions', route: 'Suggestion' },
    { icon: 'notifications', label: 'Notifications', route: 'Notification' },
    { icon: 'bookmark', label: 'Sujets sauvegardés', route: 'Sauvegarde' },
    { icon: 'share', label: 'Partager l\'app', route: 'Invite' },
    { icon: 'logout', label: 'Se déconnecter', action: handleLogout },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={selectImage}>
          <Image source={profileImage} style={styles.profileImage} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Text style={[styles.name, { color: '#fff' }]}>{name}</Text>
          <Text style={[styles.email, { color: '#fff' }]}>{email}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.editButtonText}>Éditer le Profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Espace d'études - Adapté aux sujets d'examen */}
      <View style={[styles.studyContainer, { backgroundColor: theme.card }]}>
        <Text style={[styles.studyTitle, { color: theme.text }]}>Espace d'études</Text>
        <Text style={[styles.studySubtitle, { color: theme.subText }]}>
          Accédez rapidement à vos ressources pour le DEF et le Bac
        </Text>
        
        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.quickItem}
              onPress={action.action}
            >
              <View style={[styles.quickIcon, { backgroundColor: isDarkMode ? '#333' : '#f0f7ee' }]}>
                <Icon name={action.icon} size={24} color="#5d894e" />
              </View>
              <Text style={[styles.quickText, { color: theme.text }]}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Mode sombre */}
      <View style={[styles.darkModeContainer, { backgroundColor: theme.card }]}>
        <View style={styles.darkModeRow}>
          <Icon name={isDarkMode ? "brightness-3" : "wb-sunny"} size={24} color={theme.icon} />
          <Text style={[styles.darkModeLabel, { color: theme.text }]}>Mode sombre</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#767577", true: "#5d894e" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            style={{ marginLeft: 'auto' }}
          />
        </View>
      </View>

      {/* Paramètres */}
      <View style={styles.settingsContainer}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Paramètres</Text>
        {settings.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.settingRow, { backgroundColor: theme.card }]}
            onPress={() => handleSettingPress(item)}
          >
            <Icon name={item.icon} size={24} color={theme.icon} />
            <Text style={[styles.settingText, { color: theme.text }]}>{item.label}</Text>
            <Icon name="chevron-right" size={20} color={theme.icon} style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Espace en bas */}
      <View style={{ height: 40 }} />

      {/* Modal edit */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: theme.card }]}>
            <Text style={[styles.modalTitle, { color: theme.text }]}>Modifier le Profil</Text>
            <TextInput
              style={[styles.input, { 
                color: theme.text, 
                backgroundColor: isDarkMode ? '#333' : '#eee',
                borderColor: theme.border,
                borderWidth: 1,
                padding: 12
              }]}
              value={tempName}
              onChangeText={setTempName}
              placeholder="Nom"
              placeholderTextColor={theme.subText}
            />
            <TextInput
              style={[styles.input, { 
                color: theme.text, 
                backgroundColor: isDarkMode ? '#333' : '#eee',
                borderColor: theme.border,
                borderWidth: 1,
                padding: 12
              }]}
              value={tempEmail}
              onChangeText={setTempEmail}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor={theme.subText}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#5d894e',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    marginTop: 2,
  },
  studyContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
    marginTop: -10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  studyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studySubtitle: {
    fontSize: 14,
    marginBottom: 15,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickItem: {
    width: '48%',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  quickIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  darkModeContainer: {
    marginHorizontal: 15,
    borderRadius: 15,
    marginTop: 15,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  darkModeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  darkModeLabel: {
    fontSize: 16,
    marginLeft: 15,
    flex: 1,
  },
  settingsContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingRow: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  settingText: {
    marginLeft: 15,
    fontSize: 15,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '85%',
    padding: 20,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#5d894e',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default ProfileScreen;