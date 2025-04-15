import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Modal,FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// Import screen components
import Sujets from './../../../Screen/Tabs/Sujets';
import Corriges from './../../../Screen/Tabs/Corriges';
import Profil from './../../../Screen/Tabs/Profil';


// Import icons
import accueilIcon from './../../../Asset/accueil.png';
import accueilIconFocused from './../../../Asset/accueil.png';
import sujetIcon from './../../../Asset/sujet.png';
import sujetIconFocused from './../../../Asset/sujet.png';
import corrigeIcon from './../../../Asset/corrige.png';
import corrigeIconFocused from './../../../Asset/corrige.png';
import profilIcon from './../../../Asset/profil.png';
import profilIconFocused from './../../../Asset/profil.png';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Accueils = () => {
  const navigation = useNavigation();
 const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicImageTintColor = isDarkMode ? '#fff' : '#000';
  // Liste des images avec leurs titres associés
  const images = [
    { title: 'Dictée', source: require('./../../../Asset/def4.png'), route: 'Dicte' },
    { title: 'Rédaction', source: require('./../../../Asset/def3.png'), route: 'Rédaction' },
    { title: 'Anglais', source: require('./../../../Asset/def5.png'), route: 'Anglais' },
    { title: 'Physique', source: require('./../../../Asset/def7.png'), route: 'Physiquechimie' },
    { title: 'Éducation Civique et Morale', source: require('./../../../Asset/def8.png'), route: 'Ecm' },
    { title: 'Mathématique', source: require('./../../../Asset/def1.png'), route: 'Mathématique' },
    { title: 'Biologie', source: require('./../../../Asset/def2.png'), route: 'Biologie' },
    { title: 'Histoire', source: require('./../../../Asset/def6.png'), route: 'Historique' },
  ];


  // Filtrage des images en fonction de la recherche

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

  
    return (
      <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
        {/* Header */}
        <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Sujet')}>
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
        <Text style={[styles.subtitles, { color: dynamicTextColor }]}>Page d'accueil</Text>
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
        {/* Images Section */}
        <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Mathématique')}>
            <Image
              source={require('./../../../Asset/testm.png')}
              style={[styles.image]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Rédaction')}>
            <Image
              source={require('./../../../Asset/testr.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Anglais')}>
            <Image
              source={require('./../../../Asset/testaa.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
       {/* Images Section */}
       <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Physiquechimie')}>    
            <Image
              source={require('./../../../Asset/testp.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ecm')}>
            <Image
              source={require('./../../../Asset/teste.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Histoirique')}>
            <Image
              source={require('./../../../Asset/testh.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          
        </View>
       {/* Images Section */}
       <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Biologie')}>
            <Image
              source={require('./../../../Asset/testb.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte')}>
            <Image
              source={require('./../../../Asset/testd.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Histoirique')}>
            <Image
              source={require('./../../../Asset/tes.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        {/* Recommandation de l'exercice */}

        <Text style={[styles.text, { color: dynamicTextColor }]}>Recommandation des exercices</Text>
        <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.horizontalScrollView}>
    <View style={styles.imageRowW}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/MATH2.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/PHY1.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/BOIS1.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/Ecms.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/An.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/ques.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/r.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
        
  </ScrollView>
   
         {/* Modal pour la recherche */}
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
  


const TabsMaitre = () => {
    const navigation = useNavigation();
  
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: route.name !== 'ajoute',
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
                case 'Corriges':
                  icon = focused ? corrigeIconFocused : corrigeIcon;
                  label = 'Corriges';
                  break;
                case 'Profil':
                  icon = focused ? profilIconFocused : profilIcon;
                  label = 'Profil';
               
              }
    
  
            return (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 12 }}>
                <Image
                  source={icon}
                  style={{ width: 28, height: 28, tintColor: color }}
                />
                <Text style={{ fontSize: 8, color, marginTop: 5 }}>{label}</Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen
          name="Accueils"
          component={Accueils}
          options={{
            headerShown: false,
            headerTitle: 'TECHQUIZ',
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Sujets"
          component={Sujets}
          options={{
            headerShown: false,
            headerTitle: 'Bibliothèque',
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Corriges"
          component={Corriges}
          options={{
            headerShown: false,
            headerTitle: 'Gestion des quiz',
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Profil"
          component={Profil}
          options={{
            headerShown: false,
            headerTitle: 'Profil',
            headerTitleAlign: 'center',
          }}
        />
      </Tab.Navigator>
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
      marginBottom:10
    },
    input: {
      backgroundColor: '#ddd',
      color: '#000',
    },
  });
  const styles = StyleSheet.create({
    horizontalScrollView: {
        marginVertical: 20, // Optional margin for spacing
      },
      scrollContainer:{
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 60, // Add padding to avoid overlap with footer
      },
 
      imageRowW: {
        flexDirection: 'row', // Ensure images align horizontally
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start
        top: 7
       
      },
      imagee: {
        width: 102, // Adjust to your desired image size
        height: 110,
        marginHorizontal: 10, // Add spacing between images
        
      },
      imageee: {
      width: 100, // Adjust to your desired image size
       top: -30,
        marginHorizontal: 10, // Add spacing between images
        borderRadius: 10, // Optional rounded corners
      },
      imageege: {
        width: 190, // Adjust to your desired image size
        height: 30,
       top: -30,
        marginHorizontal: 10, // Add spacing between images
        borderRadius: 10, // Optional rounded corners
      },
      imageeec: {
        width: 60, // Adjust to your desired image size
        height: 30,
       top: -30,
        marginHorizontal: 10, // Add spacing between images
        borderRadius: 10, // Optional rounded corners
      },
  container: {
    flex: 1,
   
    padding: 10,
  },
 
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitles: {
    color: '#ccc',
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold'
  },     
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
  },
  searchContainer: {
    marginBottom: 20,
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
 
  text: {
    color: '#000',
    top:10,
    fontSize: 18
  },
  
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Aligne les images horizontalement avec un espace égal
    marginTop: 20, // Ajoute de l'espace entre le texte et les images
  },
  centeredImage: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
 
  imageMali: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
 
  searchBar: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
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





