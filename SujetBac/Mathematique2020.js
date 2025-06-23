// import React, { useState, useEffect, useMemo } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ActivityIndicator,
//   Image,
// } from 'react-native';
// import Pdf from 'react-native-pdf';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const API_BASE = 'http://192.168.1.29:3000'; // Updated as per your latest code

// const Mathematique2019 = () => {
//   const navigation = useNavigation();
//   const [subjects, setSubjects] = useState([]);
//   const [selectedPdf, setSelectedPdf] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [pdfLoading, setPdfLoading] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const dynamicStyles = useMemo(() => getDynamicStyles(isDarkMode), [isDarkMode]);

//   // Definie le sujet
//   const subjectIds = [45]; 

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   useEffect(() => {
//     fetchSubjects();
//   }, []);

//   const fetchSubjects = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(`${API_BASE}/api/sujet`, {
//         timeout: 10000,
//       });
//       console.log('API Response:', response.data);
//       const filteredSubjects = response.data
//         .filter(item => subjectIds.includes(item.id))
//         .map(item => ({
//           ...item,
//           filePath: item.filePath || null,
//         }));
//       setSubjects(filteredSubjects);
//     } catch (error) {
//       let errorMessage = 'Impossible de charger les sujets';
//       if (error.code === 'ECONNABORTED') {
//         errorMessage = 'Délai de connexion dépassé. Vérifiez votre réseau.';
//       } else if (error.response) {
//         errorMessage = `Erreur serveur: ${error.response.status}`;
//       } else {
//         errorMessage = error.message;
//       }
//       console.error('Erreur API Details:', error);
//       Alert.alert('Erreur', errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const openPdfById = async (id, filePath) => {
//     try {
//       setPdfLoading(true);
//       if (filePath) {
//         const pdfUri = filePath.startsWith('http') ? filePath : `${API_BASE}${filePath}`;
//         console.log('PDF URI:', pdfUri);
//         setSelectedPdf({ uri: pdfUri });
//       } else {
//         const response = await axios.get(`${API_BASE}/api/sujet?id=${id}`);
//         const { filePath: fetchedFilePath } = response.data;
//         if (fetchedFilePath) {
//           const pdfUri = fetchedFilePath.startsWith('http') ? fetchedFilePath : `${API_BASE}${fetchedFilePath}`;
//           console.log('Fetched PDF URI:', pdfUri);
//           setSelectedPdf({ uri: pdfUri });
//         } else {
//           Alert.alert('Aucun PDF', 'Ce sujet n’a pas de fichier PDF associé.');
//         }
//       }
//     } catch (error) {
//       let errorMessage = 'Impossible de charger le PDF.';
//       if (error.response) {
//         errorMessage = `Erreur serveur: ${error.response.status}`;
//       } else if (error.code === 'ECONNABORTED') {
//         errorMessage = 'Délai de connexion dépassé.';
//       }
//       console.error('Erreur PDF Details:', error);
//       Alert.alert('Erreur', errorMessage);
//     } finally {
//       setPdfLoading(false);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.item, dynamicStyles.item]}
//       onPress={() => openPdfById(item.id, item.filePath)}
//       disabled={pdfLoading}
//     >
//       <Text style={[styles.title, dynamicStyles.text]}>{item.name}</Text>
//       <Text style={[styles.subtitle, dynamicStyles.subtitle]}>{item.date} - {item.year}</Text>
//       <Text style={[styles.desc, dynamicStyles.text]}>{item.description || 'Pas de description'}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={[styles.container]}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate('Mathematique')} // Adjust to your navigation route
//           accessibilityLabel="Go back to home"
//           accessibilityRole="button"
//         >
//           <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
//         </TouchableOpacity>

//       </View>

//       {selectedPdf ? (
        
//         <View style={[styles.pdfContainer]}>
//           {pdfLoading ? (
//             <View style={styles.loaderContainer}>
//               <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#000'} />
//               <Text style={[styles.loaderText, dynamicStyles.text]}>Chargement du PDF...</Text>
//             </View>
//           ) : (
//             <>
//               <Pdf
//                 source={selectedPdf}
//                 trustAllCerts={false}
//                 enablePaging={false} // Enable vertical scrolling
//                 style={styles.pdf}
//                 onLoadComplete={(pageCount) => console.log(`PDF chargé avec ${pageCount} pages.`)}
//                 onError={(error) => {
//                   Alert.alert('Erreur PDF', `Impossible de charger le PDF: ${error.message}`);
//                   console.error('Erreur PDF:', error);
//                   setSelectedPdf(null);
//                 }}
//               />
             
//             </>
//           )}
//         </View>
//       ) : loading ? (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#000'} />
//           <Text style={[styles.loaderText, dynamicStyles.text]}>Chargement des sujets...</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={subjects}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//           contentContainerStyle={[styles.list]}
//           ListEmptyComponent={<Text style={[styles.emptyText, dynamicStyles.text]}>Aucun sujet trouvé pour cette page.</Text>}
//         />
//       )}
//     </View>
//   );
// };

// const getDynamicStyles = (isDarkMode) =>
//   StyleSheet.create({
//     container: {
//       backgroundColor: isDarkMode ? '#000' : '#f0f0f0',
//     },
//     item: {
//       backgroundColor: isDarkMode ? '#333' : '#fff',
//     },
//     text: {
//       color: isDarkMode ? '#fff' : '#000',
//     },
//     subtitle: {
//       color: isDarkMode ? '#ccc' : '#444',
//     },
//     emptyText: {
//       color: isDarkMode ? '#fff' : '#000',
//     },
//     list: {
//       backgroundColor: isDarkMode ? '#000' : '#f0f0f0',
//     },
//     pdfContainer: {
//       backgroundColor: isDarkMode ? '#000' : '#fff',
//     },
//     closeButton: {
//       backgroundColor: isDarkMode ? '#d81b60' : '#d32f2f',
//     },
//     closeButtonText: {
//       color: isDarkMode ? '#fff' : '#fff',
//     },
//     toggleSwitch: {
//       backgroundColor: isDarkMode ? '#4CAF50' : '#f44336',
//     },
//     toggleText: {
//       color: isDarkMode ? '#fff' : '#000',
//     },
//   });

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor:'#fff'
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   toggleContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   returnImage: {
//     width: 30,
//     height: 30,
//   },
//   toggleSwitch: {
//     padding: 5,
//     borderRadius: 15,
//     width: 60,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loaderText: {
//     fontSize: 16,
//     marginTop: 8,
//   },
//   list: {
//     padding: 16,
//   },
//   item: {
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   subtitle: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   desc: {
//     marginTop: 4,
//     fontSize: 12,
//   },
//   text: {
//     color: '#333',
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   emptyText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   pdfContainer: {
//     flex: 1,
//      width: '100%',
//     backgroundColor:'#fff',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//      backgroundColor:'#fff',
     
//   },
//   closeButton: {
//     padding: 12,
//     alignItems: 'center',
//   },
//   closeButtonText: {
//     fontSize: 16,
//   },
// });

// export default Mathematique2019;








import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Image, Text, ActivityIndicator } from 'react-native';
import Pdf from 'react-native-pdf';
import { useNavigation } from '@react-navigation/native';

const Mathematique2020 = () => {
  const navigation = useNavigation();
  const [showPdf, setShowPdf] = useState(false);

  // Lancer le chargement du PDF après un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPdf(true);
    }, 2000); // 2 secondes

    return () => clearTimeout(timer); // Nettoyage du timer si le composant est démonté
  }, []);

  const source = {
    uri: Platform.select({
      ios: 'bundle-assets://pdf/tseba2020.pdf',
      android: 'bundle-assets://pdf/tseba2020.pdf',
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Math du bac Tse 2020</Text>
      </View>

      {showPdf ? (
        <Pdf
          source={source}
          style={styles.pdf}
          onError={(error) => {
            console.log('Erreur lors du chargement du PDF:', error);
          }}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Chargement du document...</Text>
        </View>
      )}
    </View>
  );
};

export default Mathematique2020;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  returnImage: {
    width: 30,
    height: 30,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  pdf: {
    flex: 1,
    margin: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});
