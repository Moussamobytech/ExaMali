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

const Anglais = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSubject, setActiveSubject] = useState('Anglais'); // Default active subject
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  const images = [
    { title: 'Anglais', source: require('./../../../Asset/MATH1.png'), route: 'Anglais' },
    { title: 'Rédaction', source: require('./../../../Asset/REDAC1.png'), route: 'Rédaction' },
    { title: 'Mathématiques', source: require('./../../../Asset/ANGLAIS1.png'), route: 'Anglais' },
    { title: 'Physique', source: require('./../../../Asset/PHY.png'), route: 'Physique' },
    { title: 'Éducation Civique et Morale', source: require('./../../../Asset/ECM.png'), route: 'Ecm' },
    { title: 'Histoire', source: require('./../../../Asset/HIST.png'), route: 'Histoire' },
    { title: 'Biologie', source: require('./../../../Asset/BIOS.png'), route: 'Biologie' },
    { title: 'Dictée', source: require('./../../../Asset/DICTE.png'), route: 'Dictee' },
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
        <Text style={[styles.subtitle, { color: dynamicTextColor }]}>Sujets pages</Text>
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
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2024')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2024')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2023')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2023')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2022')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2022')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2021')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2021')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2020')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2020')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2019')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2019')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2018')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2018</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2018')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
          
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2017')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2017</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2017')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2016')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2016</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2016')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
          
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2015')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2015</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2015')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
          
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2014')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2014</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2014')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
          
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2013')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2013</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2013')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Anglais2012')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2012</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Anglais2012')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Examalichoix')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2011</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
                      onPress={() => navigation.navigate('Examalichoix')}
                    >
                      <Text style={styles.buttonText}>Voir le sujet</Text>
                    </TouchableOpacity>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate('Examalichoix')}
                              >
                                <Image source={require('./../../../Asset/VectorA.png')} style={styles.iconImageA} />
                                <View style={styles.textContainer}>
                                  <Text style={styles.subject}>Anglais</Text>
                                  <Text style={styles.title}>Anglais du DEF 2010</Text>
                                </View>
                                <TouchableOpacity
                      style={styles.buttonA}
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
iconImage: {
  width: 21,
  height: 28,
  marginRight: 50,
  right: -20
},
iconImageR: {
  width: 25,
  height: 16,
  marginRight: 50,
  right: -20
},
iconImageA: {
  width: 24.22,
  height:24.22,
  marginRight: 50,
  right: -20
},
iconImageP: {
  width: 24.22,
  height:24.22,
  marginRight: 50,
  right: -20
},
iconImageE: {
  width: 24.22,
  height:24.22,
  marginRight: 50,
  right: -20
},
iconImageH: {
  width: 18.75,
  height:23.22,
  marginRight: 50,
  right: -20
},
iconImageB: {
  width: 25,
  height:25,
  marginRight: 50,
  right: -20
},
iconImageD: {
  width: 25,
  height:19.44,
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
button: {
  backgroundColor: '#4CAF50', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonR: {
  backgroundColor: '#FF0004', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonA: {
  backgroundColor: '#9E9E99', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonP: {
  backgroundColor: '#1F10EF', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonE: {
  backgroundColor: '#302511', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonH: {
  backgroundColor: '#0095F1', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonB: {
  backgroundColor: '#FFA600', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonD: {
  backgroundColor: '#097E67', 
  borderRadius: 20, 
  paddingVertical: 4,
  paddingHorizontal: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonText: {
  color: '#fff', // Texte blanc
  fontSize: 14,
  fontWeight: 'bold', // Texte en gras comme dans l'image
},
});

export default Anglais;
