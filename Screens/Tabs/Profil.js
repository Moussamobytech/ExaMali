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

  const quickActions = [
    { icon: 'event-note', label: 'Mes cours' },
    { icon: 'account-balance-wallet', label: 'Exercices' },
    { icon: 'add-circle-outline', label: 'Recharger' },
    { icon: 'mail-outline', label: 'Inviter' },
  ];

  const settings = [
    { icon: 'person', label: 'À propos de EXAMALI', route: 'ProposExamali' },
    { icon: 'assignment', label: 'Condition d\'utilisation', route: 'Condition' },
    { icon: 'security', label: 'Politique de confidentialité', route: 'Politique'},
    { icon: 'lightbulb-outline', label: 'Suggestions et Améliorations', route: 'Suggestion' },
    { icon: 'notifications', label: 'Notifications', route: 'Notification' },
    { icon: 'favorite', label: 'Fournisseurs préférés', route: 'FournisseursPreferes' },
    { icon: 'group-add', label: 'Inviter des amis', route: 'Invite' },
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
          <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
          <Text style={[styles.email, { color: theme.text }]}>{email}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.editButtonText}>Éditer le Profil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.alertCircle}>
          <Text style={styles.alertText}>!</Text>
        </View>
      </View>

      {/* Wallet Section */}
      <View style={[styles.walletContainer, { backgroundColor: theme.card }]}>
        <View style={styles.walletHeader}>
          <Text style={[styles.walletTitle, { color: theme.text }]}>L'espaces d'études</Text>
          <View style={styles.darkModeContainer}>
            <Text style={[styles.darkModeLabel, { color: theme.text }]}></Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            />
            <Text style={[styles.darkModeStatus, { color: isDarkMode ? '#81b0ff' : '#767577' }]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </View>
        {/* Supprimé l'affichage du solde ici */}
        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.quickItem}
              onPress={() => navigation.navigate(action.label)}
            >
              <Icon name={action.icon} size={24} color={theme.icon} />
              <Text style={[styles.quickText, { color: theme.subText }]}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Settings */}
      <View style={styles.settingsContainer}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Paramètres généraux</Text>
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
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  userInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
  alertCircle: {
    position: 'absolute',
    right: 15,
    top: 20,
    backgroundColor: 'red',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  walletContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: -10,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  walletHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  darkModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  darkModeLabel: {
    fontSize: 14,
  },
  darkModeStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    minWidth: 30,
  },
  walletTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  quickItem: {
    alignItems: 'center',
    flex: 1,
    padding: 8,
  },
  quickText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
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
    borderRadius: 8,
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
    fontSize: 14,
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
    borderRadius: 10,
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
    backgroundColor: '#00D3EB',
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
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ProfileScreen;