import React, { useState, useEffect } from 'react';
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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

// Import screen components
import Sujets from './../../../Screen/Tabs/Sujets';
import Profil from './../../../Screen/Tabs/Profil';

// Import icons
import accueilIcon from './../../../Asset/accueil.png';
import accueilIconFocused from './../../../Asset/accueil.png';
import sujetIcon from './../../../Asset/sujet.png';
import sujetIconFocused from './../../../Asset/sujet.png';
import profilIcon from './../../../Asset/profil.png';
import profilIconFocused from './../../../Asset/profil.png';

const Tab = createBottomTabNavigator();

const Accueils = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setUsername(parsedData.username || '');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    };
    fetchUserData();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';

  const images = [
    { title: 'Dictée', icon: 'file-text', route: 'Dicte' },
    { title: 'Rédaction', icon: 'edit-3', route: 'Rédaction' },
    { title: 'Anglais', icon: 'globe', route: 'Anglais' },
    { title: 'Physique', icon: 'zap', route: 'Physiquechimie' },
    { title: 'Éducation Civique', icon: 'users', route: 'Ecm' },
    { title: 'Mathématique', icon: 'book', route: 'Mathématique' },
    { title: 'Biologie', icon: 'feather', route: 'Biologie' },
    { title: 'Histoire', icon: 'clock', route: 'Historique' },
  ];

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const results = images.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const handleNavigate = (route) => {
    setModalVisible(false);
    navigation.navigate(route);
  };

  const Card = ({ title, icon, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
        <View style={styles.circle}>
          <Icon name={icon} size={24} color="#fff" />
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? darkStyles.container : lightStyles.container,
      ]}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sujets')}>
          <Image
            source={require('./../../../Asset/return.png')}
            style={styles.returnImage}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: dynamicTextColor }]}>
          {username ? `Bonjour, ${username}` : 'Bienvenue'}
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View
            style={[
              styles.toggleSwitch,
              isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff,
            ]}
          >
            <Text
              style={[
                styles.toggleText,
                isDarkMode ? styles.textOn : styles.textOff,
              ]}
            >
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Text style={[styles.subtitles, { color: dynamicTextColor }]}>
          Page d'accueil
        </Text>
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>
          Bienvenue sur l’appli ExaMali Vos anciens sujets et corrigés en un clic
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

        {/* Cards instead of images */}
        <View style={styles.imageRow}>
          <Card
            title="Mathématique"
            icon="book"
            onPress={() => navigation.navigate('Mathématique')}
          />
          <Card
            title="Rédaction"
            icon="edit-3"
            onPress={() => navigation.navigate('Rédaction')}
          />
          <Card
            title="Anglais"
            icon="globe"
            onPress={() => navigation.navigate('Anglais')}
          />
        </View>

        <View style={styles.imageRow}>
          <Card
            title="Physique"
            icon="zap"
            onPress={() => navigation.navigate('Physiquechimie')}
          />
          <Card
            title="ECM"
            icon="users"
            onPress={() => navigation.navigate('Ecm')}
          />
          <Card
            title="Histoire"
            icon="clock"
            onPress={() => navigation.navigate('Historique')}
          />
        </View>

        <View style={styles.imageRow}>
          <Card
            title="Biologie"
            icon="feather"
            onPress={() => navigation.navigate('Biologie')}
          />
          <Card
            title="Dictée"
            icon="file-text"
            onPress={() => navigation.navigate('Dicte')}
          />
          <Card
            title="..."
            icon="more-horizontal"
            onPress={() => {}}
          />
        </View>

        {/* Recommandation de l'exercice */}
        <Text style={[styles.subtitles, { color: dynamicTextColor }]}>
          Recommandation des exercices
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          <View style={styles.imageRowW}>
            <TouchableOpacity onPress={() => navigation.navigate('ExerciceMath')}>
              <Image source={require('./../../../Asset/MATH2.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ExercicePhy')}>
              <Image source={require('./../../../Asset/PHY1.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Image source={require('./../../../Asset/BOIS1.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Image source={require('./../../../Asset/Ecms.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Image source={require('./../../../Asset/An.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Image source={require('./../../../Asset/ques.png')} style={styles.imagee} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('#')}>
              <Image source={require('./../../../Asset/r.png')} style={styles.imagee} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>

      {/* Modal for search */}
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>
              Résultats de la recherche
            </Text>
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleNavigate(item.route)}
                  style={styles.modalItem}
                >
                  <View style={styles.modalIcon}>
                    <Icon name={item.icon} size={24} color="#4CD964" />
                  </View>
                  <Text
                    style={[styles.modalText, { color: dynamicTextColor }]}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const TabsMaitre = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: '#FD4B34',
        tabBarInactiveTintColor: '#111',
        tabBarIcon: ({ focused, color }) => {
          let icon;
          let label;

          switch (route.name) {
            case 'Accueils':
              icon = focused ? accueilIconFocused : accueilIcon;
              label = 'Accueil';
              break;
            case 'Sujets':
              icon = focused ? sujetIconFocused : sujetIcon;
              label = 'Sujets';
              break;
            case 'Profil':
              icon = focused ? profilIconFocused : profilIcon;
              label = 'Profil';
              break;
            default:
              icon = accueilIcon;
              label = '';
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 12 }}>
              <Image source={icon} style={{ width: 28, height: 28, tintColor: color }} />
              <Text style={{ fontSize: 8, color, marginTop: 5 }}>{label}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Accueils" component={Accueils} />
      <Tab.Screen name="Sujets" component={Sujets} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
};

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  subtitles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  circle: {
    backgroundColor: '#4CD964',
    borderRadius: 30,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: '#333',
  },
  imageRowW: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalScrollView: {
    marginTop: 10,
    marginBottom: 30,
  },
  imagee: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
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
  modalIcon: {
    marginRight: 10,
  },
  modalText: {
    fontSize: 16,
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
});

const AccueilMaitre = () => {
  return <TabsMaitre />;
};

export default AccueilMaitre;
