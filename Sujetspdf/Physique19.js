// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// const Physique19 = ({ navigation }) => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const dynamicStyles = {
//     container: {
//       backgroundColor: isDarkMode ? '#000' : '#fff',
//     },
//     text: {
//       color: isDarkMode ? '#fff' : '#000',
//     },
//     toggleSwitch: {
//       backgroundColor: isDarkMode ? '#4CAF50' : '#f44336',
//     },
//     toggleText: {
//       color: isDarkMode ? '#fff' : '#000',
//     },
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <View style={[styles.container, dynamicStyles.container]}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('AccueilMaitre')}>
//           <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
//           <View style={[styles.toggleSwitch, dynamicStyles.toggleSwitch]}>
//             <Text style={[styles.toggleText, dynamicStyles.toggleText]}>
//               {isDarkMode ? 'ON' : 'OFF'}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
//         <Text style={[styles.title, dynamicStyles.text]}>Sujet de Physique-Chimie DEF 2019</Text>
//         <Text style={[styles.sectionTitle, dynamicStyles.text]}>Épreuve de : Physique-Chimie DEF 2019</Text>

//         <Text style={[styles.subTitle, dynamicStyles.text]}>I- PHYSIQUE</Text>
//         <Text style={[styles.subTitle, dynamicStyles.text]}>1°) Questions de Cours :</Text>
//         <Text style={[styles.exerciseText, dynamicStyles.text]}>
//           a) Lors du fonctionnement d’un moteur à explosion à quatre temps, quels sont les deux temps au cours desquels l’une des soupapes est ouverte ?
//           {'\n'}b) Recopie puis relie chaque grandeur physique au symbole de son unité.
//           {'\n'}c) Énonce la loi de Joule.
//         </Text>
        
//         <Text style={[styles.subTitle, dynamicStyles.text]}>2°) Exercice :</Text>
//         <Text style={[styles.exerciseText, dynamicStyles.text]}>
//           Deux résistances R1 et R2 montées dans un circuit électrique sont parcourues par un même courant dont l’intensité est 0,2A. La tension aux bornes de R1 est 8,4 V et celle aux bornes de R2 est 3,6 V.
//           {'\n'}a) R1 et R2 sont-elles montées en série ou en parallèle ? Justifiez votre réponse.
//           {'\n'}b) Calculer la valeur de chacune de ces résistances.
//           {'\n'}c) Quelle est la tension aux bornes du générateur ?
//           {'\n'}d) Calculer la valeur de la résistance équivalente de deux façons.
//         </Text>

//         <Text style={[styles.subTitle, dynamicStyles.text]}>II- CHIMIE</Text>
//         <Text style={[styles.subTitle, dynamicStyles.text]}>1°) Questions de Cours :</Text>
//         <Text style={[styles.exerciseText, dynamicStyles.text]}>
//           1) Complète puis équilibre s’il y a lieu les équations bilan des réactions suivantes et nomme les corps formés :
//           {'\n'}a) Fe + O2 → ... + ...
//           {'\n'}b) Al + Cl2 → ... + ...
//           {'\n'}c) Zn + H2SO4 → ... + ...
//           {'\n'}d) Cu + H2O → ... + ...
//           {'\n'}2) Quel est le principal minerai de cuivre ?
//           {'\n'}3) Citer deux usages du Zinc.
//         </Text>

//         <Text style={[styles.subTitle, dynamicStyles.text]}>II-/ Exercice :</Text>
//         <Text style={[styles.exerciseText, dynamicStyles.text]}>
//           On donne des corps simples suivants : dioxygène, carbone, soufre, zinc, dihydrogène, diazote.
//           {'\n'}1) Dans les conditions normales de température et de pression, cite :
//           {'\n'}a) Ceux qui sont à l’état solide.
//           {'\n'}b) Ceux qui sont à l’état gazeux.
//           {'\n'}2) Deux de ces corps se combinent pour donner l’eau. 
//           {'\n'}a) Lesquels ? 
//           {'\n'}b) Donne le nom de cette réaction chimique ; 
//           {'\n'}c) Écris l’équation bilan de cette réaction
//           {'\n'}3) Deux de ces corps se combinent pour donner un gaz polluant qu’on identifie avec l’eau de chaux. 
//           {'\n'}a) Lesquels ?
//           {'\n'}b) Donne le nom, la formule moléculaire de ce gaz

//         </Text>

//         <Text style={[styles.footer, dynamicStyles.text]}>
//           Sujets de Physique-Chimie DEF | Adama Traoré Professeur Lycée Technique Bamako | Page 42
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   scrollContainer: {
//     paddingBottom: 50,
//   },
//   returnImage: {
//     width: 30,
//     height: 30,
//   },
//   toggleContainer: {
//     padding: 10,
//   },
//   toggleSwitch: {
//     width: 60,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: '#0000FF',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textDecorationLine: 'underline',
//   },
//   exerciseText: {
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   footer: {
//     fontSize: 12,
//     textAlign: 'center',
//     marginTop: 20,
//     color: '#555',
//   },
// });

// export default Physique19;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   ActivityIndicator,
//   FlatList,
//   TextInput,
//   Button,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Pdf from 'react-native-pdf';
// import axios from 'axios';

// const Physique19 = () => {
//   const navigation = useNavigation();
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadError, setLoadError] = useState(null);
//   const [exams, setExams] = useState([]);
//   const [newExamName, setNewExamName] = useState('');

//   // Appel POST pour créer un nouvel examen
//   const handleAddExam = () => {
//     const newExam = {
//       name: newExamName,
//       date: '2025-06-15',
//       type: 'BAC',
//     };

//     axios
//     axios.post('http://10.0.2.2:3000/api/exams', newExam)
//       .then((response) => {
//         console.log('Examen créé :', response.data);
//         // Mettre à jour la liste localement ou refaire un GET
//         setExams([...exams, response.data.exam]);
//         setNewExamName('');
//       })
//       .catch((error) => {
//         console.error("Erreur de création de l'examen :", error);
//       });
//   };

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const dynamicTextColor = isDarkMode ? '#fff' : '#000';
//   const dynamicBackgroundColor = isDarkMode ? '#000' : '#fff';

//   // Chemin pour charger un PDF depuis android/app/src/main/assets/
//   const pdfSource = require('./../AssetDEF/Anglais.pdf');

//   return (
//     <View style={[styles.container, { backgroundColor: dynamicBackgroundColor }]}>
//       {/* Header avec bouton Retour et bascule Mode Sombre */}
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('Sujets')}>
//           <Image source={require('./../Asset/return.png')} style={styles.returnImage} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toggleTheme} style={styles.toggleContainer}>
//           <View style={[styles.toggleSwitch, isDarkMode ? styles.toggleSwitchOn : styles.toggleSwitchOff]}>
//             <Text style={[styles.toggleText, isDarkMode ? styles.textOn : styles.textOff]}>
//               {isDarkMode ? 'ON' : 'OFF'}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>

//       {/* Contenu principal */}
//       <View style={{ flex: 1, padding: 20 }}>
//         {/* Liste des examens */}
//         <Text style={[styles.title, { color: dynamicTextColor }]}>Liste des examens</Text>
//         <FlatList
//           data={exams}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <Text style={[styles.examText, { color: dynamicTextColor }]}>
//               {item.name} - {item.date} ({item.type})
//             </Text>
//           )}
//         />

//         {/* Formulaire pour ajouter un examen */}
//         <TextInput
//           placeholder="Nom de l'examen"
//           placeholderTextColor={dynamicTextColor}
//           value={newExamName}
//           onChangeText={setNewExamName}
//           style={[styles.input, { color: dynamicTextColor, borderColor: dynamicTextColor }]}
//         />
//         <Button title="Ajouter un examen" onPress={handleAddExam} />
//       </View>

   
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 8,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   returnImage: {
//     width: 30,
//     height: 30,
//   },
//   toggleContainer: {
//     padding: 10,
//   },
//   toggleSwitch: {
//     width: 60,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   toggleSwitchOn: {
//     backgroundColor: '#4CAF50',
//   },
//   toggleSwitchOff: {
//     backgroundColor: '#f44336',
//   },
//   toggleText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   textOn: {
//     color: '#fff',
//   },
//   textOff: {
//     color: '#000',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   examText: {
//     marginVertical: 5,
//   },
//   input: {
//     borderWidth: 1,
//     marginVertical: 10,
//     padding: 8,
//   },
//   pdfContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pdf: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Physique19;





import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Physique19 = () => {
  const [exams, setExams] = useState([]);

  const API_URL = "http://192.168.X.X:3000/api/exams"; // Remplace par ton IP locale

  const fetchExams = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setExams(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des examens :", error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des examens</Text>
      <FlatList
        data={exams}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.examItem}>
            <Text style={styles.examText}>{item.name} - {item.date} ({item.type})</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  examItem: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  examText: {
    fontSize: 16,
  },
});

export default Physique19;
