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

const Biologie = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Biologie'); // Default active subject
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const images = [
    { title: 'Biologie', source: require('./../../../Asset/MATH1.png'), route: 'Mathématique' },
    { title: 'Rédaction', source: require('./../../../Asset/REDAC1.png'), route: 'Redaction' },
    { title: 'Anglais', source: require('./../../../Asset/ANGLAIS1.png'), route: 'Anglais' },
    { title: 'Physique', source: require('./../../../Asset/PHY.png'), route: 'Physique' },
    { title: 'Éducation Civique et Morale', source: require('./../../../Asset/ECM.png'), route: 'Ecm' },
    { title: 'Mathématique', source: require('./../../../Asset/HIST.png'), route: 'Histoire' },
    { title: 'Dictée', source: require('./../../../Asset/BIOS.png'), route: 'Dictée' },
    { title: 'Histoire', source: require('./../../../Asset/DICTE.png'), route: 'Dictee' },
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
        <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../../Asset/bio1.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../../Asset/bio2.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Biologie2022')}>
            <Image source={require('./../../../Asset/Biologie1.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Biologie2021')}>
            <Image source={require('./../../../Asset/bio4.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Biologie2020')}>
            <Image source={require('./../../../Asset/bio5.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Biologie2019')}>
            <Image source={require('./../../../Asset/bio6.png')} style={styles.image} />
          </TouchableOpacity>
            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Biologie2018')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2018')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Biologie2017')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2017</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2017')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Biologie2016')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2016</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2016')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Biologie2015')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2015</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2015')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Biologie2014')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2014</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2014')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Bilogie2013')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2013</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2013')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Biologie2012')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2012</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Biologie2012')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Examalichoix')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2011</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Examalichoix')}
                              >
                                <Image source={require('./../../../Asset/VectorB.png')} style={styles.iconImageB} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Biologie</Text>
                                  <Text style={styles.title}>Biologie du DEF 2010</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonB}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
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
    top: -10,
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 366, 
    height: 87, 
    minHeight: 80,
    justifyContent: "center"
  },
  iconImageB: {
    width: 25,
    height:25,
    marginRight: 50,
    right: -20
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 39,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 12,
    color: '#666',
  },
  buttonB: {
    backgroundColor: '#FFA600', 
    borderRadius: 20, 
    paddingVertical: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Biologie;
