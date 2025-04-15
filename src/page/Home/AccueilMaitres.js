import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput, Dimensions,Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// Import screen components
import Sujet from './../../../Screens/Tabs/Sujet';
import Corrige from './../../../Screens/Tabs/Corrige';
import Profil from './../../../Screens/Tabs/Profil';

const { width } = Dimensions.get("window"); // Récupérer la largeur de l'écran
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
       
        
        {/* Images Section */}
        <View style={styles.grandecontainerr}>
        <View style={styles.container1}>
             <View style={styles.textContainer}>
               <Text style={styles.title}>Terminal science exact</Text>
               <Text style={styles.subtitle}>TSE</Text>
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mathematique')}>
                 <Text style={styles.buttonText}  onPress={() => navigation.navigate('Mathematique')}>Voir le sujet</Text>
               </TouchableOpacity>
             </View>
             <Image source={require('./../../../Asset/tssx.png')} style={styles.image} />
           </View>
         {/* Images Section */}
         <View style={styles.containert}>
               <Image source={require("./../../../Asset/exe.png")} style={styles.image} />
               <View style={styles.textContainer}>
                 <Text style={styles.title}>Terminal science économie</Text>
                 <Text style={styles.subtitle}>TESCO</Text>
                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TSEXPMathematique')}>
                   <Text style={styles.buttonText} onPress={() => navigation.navigate('TSEXPMathematique')}>Voir le sujet</Text>
                 </TouchableOpacity>
               </View>
             </View>
        {/* Images Section */}
        <View style={styles.containerr}>
             <View style={styles.textContainer}>
               <Text style={styles.title}>Terminal science expérimentale</Text>
               <Text style={styles.subtitle}>TSEXP</Text>
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TSEXPMathematique')}>
                 <Text style={styles.buttonText} onPress={() => navigation.navigate('TSEXPMathematique')}>Voir le sujet</Text>
               </TouchableOpacity>
             </View>
             <Image source={require('./../../../Asset/test.png')} style={styles.image} />
           </View>

           <View style={styles.containert1}>
               <Image source={require("./../../../Asset/exe.png")} style={styles.image} />
               <View style={styles.textContainer}>
                 <Text style={styles.title}>Terminal science sociale</Text>
                 <Text style={styles.subtitle}>TSS</Text>
                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TSSPhilosophie')}>
                   <Text style={styles.buttonText} onPress={() => navigation.navigate('TSSPhilosophie')}>Voir le sujet</Text>
                 </TouchableOpacity>
               </View>
             </View>
       
       <View style={styles.container2}>
             <View style={styles.textContainer}>
               <Text style={styles.title}>Terminal langue et lettre</Text>
               <Text style={styles.subtitle}>TLL</Text>
               <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TLLAnglais')}>
                 <Text style={styles.buttonText} onPress={() => navigation.navigate('TLLAnglais')}>Voir le sujet</Text>
               </TouchableOpacity>
             </View>
             <Image source={require('./../../../Asset/test.png')} style={styles.image} />
           </View>
           </View>
           <View style={styles.containert3}>
               <Image source={require("./../../../Asset/exe.png")} style={styles.image} />
               <View style={styles.textContainer}>
                 <Text style={styles.title}>Terminal art et lettre</Text>
                 <Text style={styles.subtitle}>TAL</Text>
                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TALFrançais')}>
                   <Text style={styles.buttonText} onPress={() => navigation.navigate('TALFrançais')}>Voir le sujet</Text>
                 </TouchableOpacity>
               </View>
             </View>
   
    
  </ScrollView>

       
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
      grandecontainerr: {
        flex: 1,
        padding: 10,
         justifyContent: 'space-between',
         marginTop: 10, // Optional margin for space at the top
      },
      scrollContainer:{
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingBottom: 60, // Add padding to avoid overlap with footer
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

  containerr: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3B69FE", // Fond bleu
    borderRadius: 15,
    padding: 20,
    width: width * 0.9, // 90% de la largeur de l'écran
    maxWidth: 400, // Limite la taille pour les grands écrans
    height: 150,
    alignSelf: "center", // Centrer la carte
    marginBottom: 15, // Added margin to create space between cards
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37B926", // Fond bleu
    borderRadius: 15,
    padding: 20,
    width: width * 0.9, // 90% de la largeur de l'écran
    maxWidth: 400, // Limite la taille pour les grands écrans
    height: 150,
    alignSelf: "center", // Centrer la carte
    marginBottom: 15, // Added margin to create space between cards
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFA600", // Fond bleu
    borderRadius: 15,
    padding: 20,
    width: width * 0.9, // 90% de la largeur de l'écran
    maxWidth: 400, // Limite la taille pour les grands écrans
    height: 150,
    alignSelf: "center", // Centrer la carte
    marginBottom: 15, // Added margin to create space between cards
  },
  containert: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#097E67", // Jaune vif
    borderRadius: 15,
    padding: 20,
    width: width * 0.9, // 90% de la largeur de l'écran
    maxWidth: 400, // Limite la taille pour les grands écrans
    height: 150,
    alignSelf: "center", // Centrer la carte
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15, // Ajoute un espace entre les cartes
  },
  containert3: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF0004", // Jaune vif
    borderRadius: 15,
    padding: 20,
    width: width * 0.9, // 90% de la largeur de l'écran
    maxWidth: 400, // Limite la taille pour les grands écrans
    height: 150,
    alignSelf: "center", // Centrer la carte
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15, // Ajoute un espace entre les cartes
  },

  containert1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CC13B9", // Jaune vif
    borderRadius: 15,
    padding: 20,
    width: width * 0.9, // 90% de la largeur de l'écran
    maxWidth: 400, // Limite la taille pour les grands écrans
    height: 150,
    alignSelf: "center", // Centrer la carte
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15, // Ajoute un espace entre les cartes
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "white",
  
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: width * 0.04, // Ajuster la taille du sous-titre
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: width * 0.04,
  },
  image: {
    width: width * 0.35, // Ajuster l'image en fonction de l'écran
    height: width * 0.3,
    resizeMode: "contain",
  },

});

const AccueilMaitres = () => {
  return <TabsMaitre />;
};

export default AccueilMaitres;





