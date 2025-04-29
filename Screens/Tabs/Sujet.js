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

const Sujets = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSerie, setActiveSerie] = useState('Terminal science exact'); // Default active serie
  const [activeMatiere, setActiveMatiere] = useState('Mathématiques'); // Default active matiere
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  // Structure des données : séries avec leurs matières
  const series = [
    {
      title: 'Terminal science exact',
      matieres: [
        {
          name: 'Mathématiques',
          searchImage: require('./../../Asset/MATH1.png'),
          content: (
            <View style={styles.subjectContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
            <Image source={require('./../../Asset/TSEAN24.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEAN23.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEAN22.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEAN21.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEAN20.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEAN19.png')} style={styles.image} />
          </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Physique',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEPhysique.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Chimie',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSECH24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Biologie',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEBI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Philosophie',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEPHI24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/PHY.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Physique24')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique23')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique22')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique21')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique20')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Physique19')}>
                <Image source={require('./../../Asset/TSEAN24.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal science expérimentale',
      matieres: [
        {
          name: 'Mathématique',
          searchImage: require('./../../Asset/REDAC1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/tsexpma.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/tsexpma1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/tsexpma2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/tsexpma3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/tsexpma4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/tsexpma5.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Biologie',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
            <Image source={require('./../../Asset/TSEXPBI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI23.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI22.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI21.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI20.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPBI19.png')} style={styles.contentImage} />
          </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Physique',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Mathpdf')}>
            <Image source={require('./../../Asset/TSEXPPHI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPPHI23.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPPHI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPPHI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPPHI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
            <Image source={require('./../../Asset/TSEXPPHI24.png')} style={styles.contentImage} />
          </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal science économique',
      matieres: [
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2024')}>
                <Image source={require('./../../Asset/angdef1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2023')}>
                <Image source={require('./../../Asset/angdef2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2022')}>
                <Image source={require('./../../Asset/angdef3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2021')}>
                <Image source={require('./../../Asset/angdef4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2020')}>
                <Image source={require('./../../Asset/angdef5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2019')}>
                <Image source={require('./../../Asset/angdef6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal science sociale',
      matieres: [
        {
          name: 'Histoire',
          searchImage: require('./../../Asset/HIST.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/hist1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/hist2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2022')}>
                <Image source={require('./../../Asset/hist3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2021')}>
                <Image source={require('./../../Asset/hist4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2020')}>
                <Image source={require('./../../Asset/hist5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('HistoireGeo2019')}>
                <Image source={require('./../../Asset/hist6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
        {
          name: 'Éducation Civique et Morale',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Ecm2024')}>
                <Image source={require('./../../Asset/ecm11.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Ecm2023')}>
                <Image source={require('./../../Asset/ecm2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Ecm2022')}>
                <Image source={require('./../../Asset/ecm3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Ecm2021')}>
                <Image source={require('./../../Asset/ecm4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Ecm2020')}>
                <Image source={require('./../../Asset/ecm5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Ecm2019')}>
                <Image source={require('./../../Asset/ecm6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal lettre et langue',
      matieres: [
        {
          name: 'Dictée',
          searchImage: require('./../../Asset/ECM.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/dict1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/dict2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/dict3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/dict4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/dict5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Examalichoix')}>
                <Image source={require('./../../Asset/dict6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
    {
      title: 'Terminal anglais et langue',
      matieres: [
        {
          name: 'Anglais',
          searchImage: require('./../../Asset/ANGLAIS1.png'),
          content: (
            <View style={styles.subjectContent}>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2024')}>
                <Image source={require('./../../Asset/angdef1.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2023')}>
                <Image source={require('./../../Asset/angdef2.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2022')}>
                <Image source={require('./../../Asset/angdef3.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2021')}>
                <Image source={require('./../../Asset/angdef4.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2020')}>
                <Image source={require('./../../Asset/angdef5.png')} style={styles.contentImage} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Anglais2019')}>
                <Image source={require('./../../Asset/angdef6.png')} style={styles.contentImage} />
              </TouchableOpacity>
            </View>
          ),
        },
      ],
    },
  ];

  // Recherche par série et matière
  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      const results = [];
      series.forEach((serie) => {
        serie.matieres.forEach((matiere) => {
          if (matiere.name.toLowerCase().includes(text.toLowerCase())) {
            results.push({
              serie: serie.title,
              matiere: matiere.name,
              searchImage: matiere.searchImage,
            });
          }
        });
      });
      setSearchResults(results);
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  // Sélection d'une série
  const handleSerieSelect = (serieTitle) => {
    setActiveSerie(serieTitle);
    const serie = series.find((s) => s.title === serieTitle);
    if (serie && serie.matieres.length > 0) {
      setActiveMatiere(serie.matieres[0].name); // Sélectionner la première matière par défaut
    }
  };

  // Sélection d'une matière
  const handleMatiereSelect = (matiereName) => {
    setActiveMatiere(matiereName);
  };

  // Basculer entre mode sombre et clair
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dynamicTextColor = isDarkMode ? '#fff' : '#000';
  const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';
  const dynamicInputBackground = isDarkMode ? '#333' : '#ddd';
  const dynamicInputTextColor = isDarkMode ? '#fff' : '#000';

  // Trouver la série active et ses matières
  const activeSerieData = series.find((serie) => serie.title === activeSerie);
  const activeMatiereData = activeSerieData?.matieres.find((matiere) => matiere.name === activeMatiere);

  return (
    <View style={[styles.container, isDarkMode ? darkStyles.container : lightStyles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
          <Image source={require('./../../Asset/return.png')} style={styles.returnImage} />
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
          Découvrez les anciens sujets des années précédentes
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
            placeholder="Rechercher une matière..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>

        {/* Sélection de la série */}
        <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Séries</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
          {series.map((serie, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSerieSelect(serie.title)}
              style={[styles.horizontalItem, activeSerie === serie.title && styles.activeHorizontalItem]}
            >
              <Text
                style={[
                  styles.horizontalText,
                  activeSerie === serie.title && styles.activeHorizontalText,
                  { color: dynamicTextColor },
                ]}
              >
                {serie.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sélection de la matière */}
        {activeSerieData && (
          <>
            <Text style={[styles.sectionTitle, { color: dynamicTextColor }]}>Matières</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
              {activeSerieData.matieres.map((matiere, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleMatiereSelect(matiere.name)}
                  style={[styles.horizontalItem, activeMatiere === matiere.name && styles.activeHorizontalItem]}
                >
                  <Text
                    style={[
                      styles.horizontalText,
                      activeMatiere === matiere.name && styles.activeHorizontalText,
                      { color: dynamicTextColor },
                    ]}
                  >
                    {matiere.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}

        {/* Contenu de la matière sélectionnée */}
        <View style={styles.imagecontainer}>
          {activeMatiereData ? (
            activeMatiereData.content
          ) : (
            <Text style={[styles.emptyText, { color: dynamicTextColor }]}>
              Aucun contenu disponible pour la matière sélectionnée.
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Modal de recherche */}
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalTitle, { color: dynamicTextColor }]}>Résultats de la recherche</Text>
            <FlatList
              data={searchResults}
              keyExtractor={(item, index) => `${item.serie}-${item.matiere}-${index}`}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setActiveSerie(item.serie);
                    setActiveMatiere(item.matiere);
                    setModalVisible(false);
                  }}
                  style={styles.modalItem}
                >
                  <Image source={item.searchImage} style={styles.modalImage} />
                  <View>
                    <Text style={[styles.modalText, { color: dynamicTextColor }]}>{item.matiere}</Text>
                    <Text style={[styles.modalSubText, { color: dynamicTextColor }]}>{item.serie}</Text>
                  </View>
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
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  searchContainer: {
    marginBottom: 20,
  },
  imagecontainer: {
    flexDirection: 'column',
    marginBottom: 20,
    paddingBottom: 20,
  },
  subjectContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentImage: {
    marginBottom: 10,
    height: 84,
    width: 366,
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
    fontWeight: 'bold',
  },
  modalSubText: {
    fontSize: 14,
    color: '#666',
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
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Sujets;