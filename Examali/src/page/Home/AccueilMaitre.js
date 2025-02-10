import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Modal } from 'react-native';
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
  const [modalVisible, setModalVisible] = useState(false);
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
    { title: 'Mathématiques', source: require('./../../../Asset/MATH1.png') },
    { title: 'Rédaction', source: require('./../../../Asset/REDAC1.png') },
    { title: 'Anglais', source: require('./../../../Asset/ANGLAIS1.png') },
    { title: 'Physique', source: require('./../../../Asset/PHY.png') },
    { title: 'Éducation Civique et Morale', source: require('./../../../Asset/ECM.png') },
    { title: 'Histoire', source: require('./../../../Asset/HIST.png') },
    { title: 'Biologie', source: require('./../../../Asset/BIOS.png') },
    { title: 'Dictée', source: require('./../../../Asset/DICTE.png') },
  ];

  // Filtrage des images en fonction de la recherche
  const filteredImages = images.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (text) => {
    setSearchQuery(text);
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
              source={require('./../../../Asset/MATH1.png')}
              style={[styles.image]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Rédaction')}>
            <Image
              source={require('./../../../Asset/REDAC1.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Anglais')}>
            <Image
              source={require('./../../../Asset/ANGLAIS1.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
       {/* Images Section */}
       <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Physiquechimie')}>
            <Image
              source={require('./../../../Asset/PHY.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Ecm')}>
            <Image
              source={require('./../../../Asset/ECM.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Histoirique')}>
            <Image
              source={require('./../../../Asset/HIST.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
       {/* Images Section */}
       <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Biologie')}>
            <Image
              source={require('./../../../Asset/BIOS.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dicte')}>
            <Image
              source={require('./../../../Asset/DICTE.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Mathématique')}>
            <Image
              source={require('./../../../Asset/MATH1.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
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
    </View>
  </ScrollView>
        
  </ScrollView>
   
         {/* Modal pour la recherche */}
         <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Résultats de recherche</Text>
              <TextInput
                style={styles.modalSearchBar}
                placeholder="Rechercher..."
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={handleSearch}
              />
              <ScrollView>
                <View style={styles.imageRow}>
                  {filteredImages.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setModalVisible(false);
                        navigation.navigate('Examalichoix');
                      }}
                    >
                      <Image source={item.source} style={styles.image} />
                      <Text style={styles.imageTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
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
        marginVertical: 10, // Optional margin for spacing
      },
      scrollContainer:{
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 60, // Add padding to avoid overlap with footer
      },
      imageRow: {
        flexDirection: 'row', // Ensure images align horizontally
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start
        top: 30,
      },
      imageRowW: {
        flexDirection: 'row', // Ensure images align horizontally
        alignItems: 'center',
        justifyContent: 'flex-start', // Align items to the start
       
       
      },
      imagee: {
        width: 102, // Adjust to your desired image size
        height: 109,
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
    width: 82,
    height: 80,
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
  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSearchBar: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#333',
    color: 'white',
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#444',
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  imageTitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
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





