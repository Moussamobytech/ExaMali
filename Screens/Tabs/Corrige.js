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

const Profil = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Terminal science expérimentale'); // Default active subject
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const images = [
    { title: 'Terminal science expérimentale', source: require('./../../Asset/MATH1.png'), route: 'Mathématique' },
    { title: 'Terminal science exact', source: require('./../../Asset/REDAC1.png'), route: 'Corriges' },
    { title: 'Terminal science économique', source: require('./../../Asset/ANGLAIS1.png'), route: 'Corriges' },
    { title: 'Terminal science sociale', source: require('./../../Asset/PHY.png'), route: 'Corriges' },
    { title: 'Éducation Civique et Morale', source: require('./../../Asset/ECM.png'), route: 'Corr blanchesiges' },
    { title: 'Terminal lettre et langue', source: require('./../../Asset/HIST.png'), route: 'Corriges' },
    { title: 'Terminal anglais et langue', source: require('./../../Asset/BIOS.png'), route: 'Corriges' },
   
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

  
  const handleNavigate = (title) => {
    setActiveSubject(title); 
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
        <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
          <Image source={require('./../../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
                <Image source={require('./../../Asset/logoexamali.png')} style={styles.returnImage1} />
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
          <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff]}>
            <Text style={[styles.toggleText, isDarkMode ? styles.textOn : styles.textOff]}>
              {isDarkMode ? 'ON' : 'OFF'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.subtitles, { color: dynamicTextColor }]}>Correction des sujets de la TSEXP</Text>
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>
          Découvrez les corrections des années précédentes
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {images.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleNavigate(item.title)} // Pass the title instead of route
              style={[styles.horizontalItem, activeSubject === item.title && styles.activeHorizontalItem]}
            >
              <Text
                style={[
                  styles.horizontalText,
                  activeSubject === item.title && styles.activeHorizontalText,
                  { color: dynamicTextColor },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.imagecontainer}>
          <TouchableOpacity >
            <Image source={require('./../../Asset/corrigee.png')} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: dynamicTextColor }]}>
              Désolé, la correction des sujets n'est pas disponible
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Les styles restent inchangés
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
   returnImage1: {
    width: 100,
    height: 40,
   alignSelf: "center", 
   left:20
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  subtitles: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  imagecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 20,
  },
  image: {
    marginBottom: 10,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  horizontalItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  horizontalText: {
    fontSize: 16,
  },
  activeHorizontalItem: {
    // Optional: Add background or border for active item
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
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Profil;