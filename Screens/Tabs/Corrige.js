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
  const [activeSubject, setActiveSubject] = useState('Terminal science expérimentale');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const series = [
    { 
      id: 1, 
      title: 'Terminal science expérimentale', 
      source: require('./../../Asset/MATH1.png'), 
      route: 'Mathématique' 
    },
    { 
      id: 2, 
      title: 'Terminal science exact', 
      source: require('./../../Asset/REDAC1.png'), 
      route: 'Corriges' 
    },
    { 
      id: 3, 
      title: 'Terminal science économique', 
      source: require('./../../Asset/ANGLAIS1.png'), 
      route: 'Corriges' 
    },
    { 
      id: 4, 
      title: 'Terminal science sociale', 
      source: require('./../../Asset/PHY.png'), 
      route: 'Corriges' 
    },
    { 
      id: 5, 
      title: 'Terminal lettre et langue', 
      source: require('./../../Asset/HIST.png'), 
      route: 'Corriges' 
    },
    { 
      id: 6, 
      title: 'Terminal anglais et langue', 
      source: require('./../../Asset/BIOS.png'), 
      route: 'Corriges' 
    },
  ];

  // Fonction de recherche corrigée
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim()) {
      const results = series.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(results);
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const handleNavigate = (serie) => {
    setActiveSubject(serie.title);
    setModalVisible(false);
    // navigation.navigate(serie.route); // Décommentez si vous voulez naviguer
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicModalBackground = isDarkMode ? '#333' : '#fff';

  return (
    <View style={[styles.container, { backgroundColor: dynamicBackgroundColor }]}>
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
        <Text style={[styles.subtitles, { color: dynamicTextColor }]}>Correction des sujets </Text>
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
            placeholder="Rechercher une série..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.horizontalScrollView}
        >
          {series.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleNavigate(item)}
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
          <TouchableOpacity>
            <Image source={require('./../../Asset/image.png')} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.emptyState}>
            <Text style={[styles.emptyText, { color: dynamicTextColor }]}>
              Désolé, la correction des sujets n'est pas disponible
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Modal de recherche */}
      <Modal 
        visible={isModalVisible} 
        animationType="slide" 
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, { backgroundColor: dynamicModalBackground }]}>
            <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>
              {searchResults.length} résultat{searchResults.length !== 1 ? 's' : ''} trouvé{searchResults.length !== 1 ? 's' : ''}
            </Text>
            
            {searchResults.length > 0 ? (
              <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleNavigate(item)}
                    style={[styles.modalItem, { backgroundColor: isDarkMode ? '#444' : '#f0f0f0' }]}
                  >
                    <Image source={item.source} style={styles.modalImage} />
                    <Text style={[styles.modalText, { color: dynamicTextColor }]}>{item.title}</Text>
                  </TouchableOpacity>
                )}
              />
            ) : (
              <Text style={[styles.noResultsText, { color: dynamicTextColor }]}>
                Aucune série trouvée pour "{searchQuery}"
              </Text>
            )}
            
            <TouchableOpacity 
              onPress={() => setModalVisible(false)} 
              style={[styles.closeButton, { backgroundColor: '#f44336' }]}
            >
              <Text style={styles.closeButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
    left: 20
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
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  activeHorizontalText: {
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
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  modalImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noResultsText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Profil;