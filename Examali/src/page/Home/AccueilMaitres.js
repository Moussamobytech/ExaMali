import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// Import screen components
import Sujet from './../../../Screens/Tabs/Sujet';
import Corrige from './../../../Screens/Tabs/Corrige';
import Profil from './../../../Screens/Tabs/Profil';


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
  const [modalVisible, setModalVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };

    const dynamicTextColor = isDarkMode ? '#fff' : '#000';
    const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
    const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
    const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';
  
  // Liste des images avec leurs titres associés
  const images = [
    { title: 'Mathématiques', source: require('./../../../Asset/REDAC1.png'), route: 'Rédaction' },
    { title: 'Anglais', source: require('./../../../Asset/ANGLAIS1.png'), route: 'Anglais' },
    { title: 'Physique', source: require('./../../../Asset/PHY.png'), route: 'Physiquechimie' },
    { title: 'Éducation Civique et Morale', source: require('./../../../Asset/ECM.png'), route: 'Ecm' },
    { title: 'Histoire', source: require('./../../../Asset/HIST.png'), route: 'Histoirique' },
    { title: 'Biologie', source: require('./../../../Asset/BIOS.png'), route: 'Biologie' },
    { title: 'Dictée', source: require('./../../../Asset/DICTE.png'), route: 'Dicte' },
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
                <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
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
        <ScrollView  vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text style={[styles.text , { color: dynamicTextColor }]}>Page d'accueil</Text>
        <Text style={[styles.text , { color: dynamicTextColor }]}>Bienvenue sur l’appli ExaMali Vos anciens sujets et corrigés en un clic !</Text>
         {/* TabsMaitre intégré ici */}
         {/* <View style={styles.searchContainer}>
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
                </View> */}
        
        {/* Images Section */}
        <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('#')}>
            <Image
              source={require('./../../../Asset/TSEE.png')}
              style={styles.image}
            />
          </TouchableOpacity>

        </View>
         {/* Images Section */}
         <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('#')}>
            <Image
              source={require('./../../../Asset/CHIM.png')}
              style={styles.image}
            />
          </TouchableOpacity>

        </View>
        {/* Images Section */}
        <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate('#')}>
            <Image
              source={require('./../../../Asset/PHYS.png')}
              style={styles.image}
            />
          </TouchableOpacity>

        </View>
        <Text style={[styles.text , { color: dynamicTextColor }]}>Terminal Science Expérimental
        TSEXP</Text>
        <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.horizontalScrollView}>
    <View style={styles.imageRow}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/BIO.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/PHYS.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/CHIM.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
  
{/* LA PARTIE TESCO */}
  <Text style={[styles.texttesco , { color: dynamicTextColor }]}>Terminal Science Economie
  TSECO </Text>
        <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.horizontalScrollView}>
    <View style={styles.imageRow}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TESCOE.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/COMPTA.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TESCOMATH.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>

  {/* la partie tss */}
  <Text style={[styles.texttesco , { color: dynamicTextColor }]}>Terminal Science Social
  TSS </Text>
        <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.horizontalScrollView}>
    <View style={styles.imageRow}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TSSHIST.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TSSS.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TSSPHI.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
  
  
  {/* la partie TLL */}
  <Text style={[styles.texttesco , { color: dynamicTextColor }]}>Terminal Langue et Lettre
  TLL  </Text>
        <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.horizontalScrollView}>
    <View style={styles.imageRow}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TLLLI.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TLLAN.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TLLFR.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
  
   {/* la partie TAL */}
   <Text style={[styles.texttesco , { color: dynamicTextColor }]}>Terminal Art et Lettre
   TAL</Text>
        <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false} 
    style={styles.horizontalScrollView}>
    <View style={styles.imageRow}>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TLLLI.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TLLAN.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('#')}>
        <Image
          source={require('./../../../Asset/TLLFR.png')}
          style={styles.imagee}
        />
      </TouchableOpacity>
    </View>
  </ScrollView>
  
        {/* Recherche Menu */}
        {/* <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <TextInput
              style={styles.searchBar}
              placeholder="Rechercher..."
              placeholderTextColor="#888"
              value={searchQuery}
              onChangeText={handleSearch}
            />
             </TouchableOpacity>
          </View> */}
    
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
                case 'Sujet':
                  icon = focused ? sujetIconFocused : sujetIcon;
                  label = 'Sujet';
                  break;
                case 'Corrige':
                  icon = focused ? corrigeIconFocused : corrigeIcon;
                  label = 'Corrige';
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
          name="Sujet"
          component={Sujet}
          options={{
            headerShown: false,
            headerTitle: 'Bibliothèque',
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Corrige"
          component={Corrige}
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
            // headerTitle
            // : 'Profil',
            // headerTitleAlign: 'center',
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
      container: {
        flex: 1,
        padding: 10,
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
        justifyContent:'center',
        marginTop:  10,
       
      },
      imagee: {
        width: 354,
        height: 184,
        marginHorizontal: 10, // Add spacing between images
        borderRadius: 10, // Optional rounded corners
      },
     
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  text: {
    color: 'white',
    
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
  },

  texttesco: {
    color: 'white',
    
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: -4,
  },
  text1: {
    color: 'white',
    top: -20,
    fontSize: 13,
    
    marginTop: 20,
  },
  text2: {
    color: 'white',
    top: -20,
    fontSize: 13,
    
    marginTop: 20,
  },
  
  textt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    fontFamily: 'IslandMoments-Regular'
  },

  centeredImage: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 354,
    height: 184,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Optional rounded corners
  },
 
  imageMali: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  searchContainer: {
    marginBottom: 20,
    top:15
    
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

const AccueilMaitres = () => {
  return <TabsMaitre />;
};

export default AccueilMaitres;





