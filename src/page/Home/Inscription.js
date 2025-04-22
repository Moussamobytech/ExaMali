// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { Picker } from '@react-native-picker/picker';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required('Le nom est requis'),
//   email: Yup.string().email('Email invalide').required('Email est requis'),
//   password: Yup.string().min(6, 'Le mot de passe doit être au moins 6 caractères').required('Mot de passe est requis'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
//     .required('Confirmation du mot de passe est requise'),
//   niveauEtude: Yup.string().required('Le niveau d\'étude est requis'),
// });

// function Inscription() {
//   const navigation = useNavigation();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const handleSignUp = async (values) => {
//     setIsSubmitting(true);
//     setErrorMessage('');
    
//     try {
//       // 1. Création du compte d'authentification
//       const userCredential = await auth().createUserWithEmailAndPassword(
//         values.email, 
//         values.password
//       );
      
//       const user = userCredential.user;
      
//       // 2. Enregistrement des données supplémentaires dans Firestore
//       await firestore()
//         .collection('users')
//         .doc(user.uid)
//         .set({
//           uid: user.uid,
//           username: values.username,
//           email: values.email,
//           niveauEtude: values.niveauEtude,
//           createdAt: firestore.FieldValue.serverTimestamp(),
//           updatedAt: firestore.FieldValue.serverTimestamp()
//         });
      
//       // 3. Redirection en fonction du niveau d'étude
//       if (values.niveauEtude === 'DEF') {
//         navigation.navigate('AccueilMaitre');
//       } else if (values.niveauEtude === 'BAC') {
//         navigation.navigate('AccueilMaitres');
//       }
      
//     } catch (error) {
//       console.error('Erreur inscription:', error);
//       setErrorMessage(getErrorMessage(error.code));
      
//       // Suppression du compte créé si l'enregistrement Firestore échoue
//       if (auth().currentUser) {
//         await auth().currentUser.delete();
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Fonction pour traduire les codes d'erreur
//   const getErrorMessage = (code) => {
//     switch (code) {
//       case 'auth/email-already-in-use':
//         return 'Cet email est déjà utilisé';
//       case 'auth/invalid-email':
//         return 'Email invalide';
//       case 'auth/weak-password':
//         return 'Mot de passe trop faible';
//       case 'auth/network-request-failed':
//         return 'Problème de connexion internet';
//       default:
//         return 'Une erreur est survenue lors de l\'inscription';
//     }
//   };

//   return (
//     <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <View style={styles.containerR}>
//           <Image
//             style={styles.apprenantChild}
//             resizeMode="cover"
//             source={require("./../../../Asset/logoo.png")}
//           />
//         </View>

//         <View style={styles.containergrande}>
//           <Formik
//             initialValues={{ 
//               username: '', 
//               email: '', 
//               password: '', 
//               confirmPassword: '', 
//               niveauEtude: '' 
//             }}
//             validationSchema={validationSchema}
//             onSubmit={handleSignUp}
//           >
//             {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
//               <>
//                 <View style={styles.middle}>
//                   <Text style={styles.loginText}>Créer un compte pour continuer</Text>
//                 </View>

//                 {/* Champ Nom */}
//                 <View style={styles.inputField}>
//                   <View style={[
//                     styles.inputContainer,
//                     touched.username && errors.username ? styles.inputError : null
//                   ]}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Prénom et Nom"
//                       placeholderTextColor="gray"
//                       onChangeText={handleChange('username')}
//                       onBlur={handleBlur('username')}
//                       value={values.username}
//                     />
//                   </View>
//                   {touched.username && errors.username && (
//                     <Text style={styles.errorText}>{errors.username}</Text>
//                   )}
//                 </View>

//                 {/* Champ Niveau d'étude */}
//                 <View style={styles.inputField}>
//                   <View style={[
//                     styles.inputContainer,
//                     touched.niveauEtude && errors.niveauEtude ? styles.inputError : null
//                   ]}>
//                     <Picker
//                       selectedValue={values.niveauEtude}
//                       style={styles.picker}
//                       onValueChange={(itemValue) => setFieldValue('niveauEtude', itemValue)}
//                       dropdownIconColor="white"
//                     >
//                       <Picker.Item label="Sélectionner le niveau d'étude" value="" />
//                       <Picker.Item label="DEF" value="DEF" />
//                       <Picker.Item label="BAC" value="BAC" />
//                     </Picker>
//                   </View>
//                   {touched.niveauEtude && errors.niveauEtude && (
//                     <Text style={styles.errorText}>{errors.niveauEtude}</Text>
//                   )}
//                 </View>

//                 {/* Champ Email */}
//                 <View style={styles.inputField}>
//                   <View style={[
//                     styles.inputContainer,
//                     touched.email && errors.email ? styles.inputError : null
//                   ]}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Entrer votre e-mail"
//                       placeholderTextColor="gray"
//                       keyboardType="email-address"
//                       autoCapitalize="none"
//                       onChangeText={handleChange('email')}
//                       onBlur={handleBlur('email')}
//                       value={values.email}
//                     />
//                   </View>
//                   {touched.email && errors.email && (
//                     <Text style={styles.errorText}>{errors.email}</Text>
//                   )}
//                 </View>

//                 {/* Champ Mot de passe */}
//                 <View style={styles.inputField}>
//                   <View style={[
//                     styles.inputContainer,
//                     touched.password && errors.password ? styles.inputError : null
//                   ]}>
//                     <View style={styles.passwordWrapper}>
//                       <TextInput
//                         style={[styles.input, { flex: 1 }]}
//                         placeholder="Votre mot de passe"
//                         placeholderTextColor="gray"
//                         secureTextEntry={!passwordVisible}
//                         onChangeText={handleChange('password')}
//                         onBlur={handleBlur('password')}
//                         value={values.password}
//                       />
//                       <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//                         <Text style={styles.toggleText}>
//                           {passwordVisible ? '🙈' : '👁️'}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                   {touched.password && errors.password && (
//                     <Text style={styles.errorText}>{errors.password}</Text>
//                   )}
//                 </View>

//                 {/* Champ Confirmation Mot de passe */}
//                 <View style={styles.inputField}>
//                   <View style={[
//                     styles.inputContainer,
//                     touched.confirmPassword && errors.confirmPassword ? styles.inputError : null
//                   ]}>
//                     <View style={styles.passwordWrapper}>
//                       <TextInput
//                         style={[styles.input, { flex: 1 }]}
//                         placeholder="Confirmer le mot de passe"
//                         placeholderTextColor="gray"
//                         secureTextEntry={!confirmPasswordVisible}
//                         onChangeText={handleChange('confirmPassword')}
//                         onBlur={handleBlur('confirmPassword')}
//                         value={values.confirmPassword}
//                       />
//                       <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
//                         <Text style={styles.toggleText}>
//                           {confirmPasswordVisible ? '🙈' : '👁️'}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                   {touched.confirmPassword && errors.confirmPassword && (
//                     <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//                   )}
//                 </View>

//                 {/* Bouton d'inscription */}
//                 <View style={styles.buttonContainer}>
//                   <TouchableOpacity 
//                     style={[styles.button, isSubmitting ? styles.buttonDisabled : null]} 
//                     onPress={handleSubmit}
//                     disabled={isSubmitting}
//                   >
//                     <Text style={styles.buttonText}>
//                       {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
//                     </Text>
//                   </TouchableOpacity>
//                 </View>

//                 {/* Message d'erreur */}
//                 {errorMessage ? (
//                   <Text style={styles.errorMessage}>{errorMessage}</Text>
//                 ) : null}

//                 {/* Redirection vers connexion */}
//                 <Text style={[styles.tuAsDjContainer, styles.crerTypo]}>
//                   <Text style={styles.tuAsDj}>Vous avez déjà un compte ? </Text>
//                   <Text
//                     style={styles.connexion}
//                     onPress={() => navigation.navigate("Connexion")}
//                   >
//                     Connectez-vous
//                   </Text>
//                 </Text>
//               </>
//             )}
//           </Formik>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }


// export default Inscription;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 20,
//   },
//   containergrande: {
//     top: -80,
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   middle: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginText: {
//     marginTop: 100,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   inputField: {
//     marginTop: 20,
//   },
//   inputContainer: {
//     borderColor: '#444',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#111',
//     margin: 10,
//   },
//   inputError: {
//     borderColor: 'red',
//   },
//   input: {
//     height: 45,
//     fontSize: 16,
//     color: 'white',
//   },
//   picker: {
//     color: 'white',
//     height: 50,
//   },
//   passwordWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   toggleText: {
//     color: '#fff',
//     fontSize: 18,
//     paddingHorizontal: 10,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginLeft: 15,
//     marginTop: 5,
//   },
//   errorMessage: {
//     color: 'red',
//     fontSize: 14,
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   buttonContainer: {
//     marginTop: 30,
//   },
//   button: {
//     backgroundColor: '#FFF',
//     paddingVertical: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   buttonDisabled: {
//     opacity: 0.6,
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   apprenantChild: {
//     height: 100,
//     width: 100,
//     top: 0,
//     alignSelf: 'center',
//   },
//   crerTypo: {
//     textAlign: "center",
//     fontWeight: "500",
//   },
//   tuAsDj: {
//     color: 'white',
//     fontSize: 16,
//   },
//   connexion: {
//     color: "#5378c0",
//     fontSize: 16,
//   },
//   tuAsDjContainer: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });


import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Image, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuration de validation
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Le nom est requis')
    .max(50, 'Le nom ne doit pas dépasser 50 caractères'),
  email: Yup.string()
    .email('Email invalide')
    .required('L\'email est requis')
    .max(100, 'L\'email ne doit pas dépasser 100 caractères'),
  password: Yup.string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .required('Le mot de passe est requis')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'Doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
    .required('La confirmation du mot de passe est requise'),
  niveauEtude: Yup.string()
    .required('Le niveau d\'étude est requis'),
});

const API_URL = 'http://192.168.1.16:3000';

function Inscription() {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (values) => {
    setIsSubmitting(true);
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
        niveauEtude: values.niveauEtude
      });

      await AsyncStorage.setItem('userToken', response.data.token);
      
      if (values.niveauEtude === 'DEF') {
        navigation.navigate('AccueilMaitre');
      } else if (values.niveauEtude === 'BAC') {
        navigation.navigate('AccueilMaitres');
      }
      
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      const errorMsg = error.response?.data?.message || 
                     getErrorMessage(error.code) || 
                     'Une erreur est survenue lors de l\'inscription';
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case 'ECONNABORTED':
        return 'La requête a expiré';
      case 'ERR_NETWORK':
        return 'Problème de connexion internet';
      default:
        return null;
    }
  };

  return (
    <ScrollView 
      vertical 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.container}>
        {/* Logo et en-tête */}
        <View style={styles.header}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("./../../../Asset/logoo.png")}
          />
          <Text style={styles.title}>Création de compte</Text>
        </View>

        <View style={styles.formContainer}>
          <Formik
            initialValues={{ 
              username: '', 
              email: '', 
              password: '', 
              confirmPassword: '', 
              niveauEtude: '' 
            }}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
              <>
                {/* Champ Nom */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Nom complet</Text>
                  <View style={[
                    styles.inputWrapper,
                    touched.username && errors.username ? styles.inputError : null
                  ]}>
                    <TextInput
                      style={styles.input}
                      placeholder="Votre prénom et nom"
                      placeholderTextColor="#000"
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorText}>{errors.username}</Text>
                  )}
                </View>

                {/* Champ Niveau d'étude */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Niveau d'étude</Text>
                  <View style={[
                    styles.pickerWrapper,
                    touched.niveauEtude && errors.niveauEtude ? styles.inputError : null
                  ]}>
                    <Picker
                      selectedValue={values.niveauEtude}
                      style={styles.picker}
                      onValueChange={(itemValue) => setFieldValue('niveauEtude', itemValue)}
                      dropdownIconColor="#666"
                    >
                      <Picker.Item label="Sélectionner votre niveau" value="" />
                      <Picker.Item label="DEF" value="DEF" />
                      <Picker.Item label="BAC" value="BAC" />
                    </Picker>
                  </View>
                  {touched.niveauEtude && errors.niveauEtude && (
                    <Text style={styles.errorText}>{errors.niveauEtude}</Text>
                  )}
                </View>

                {/* Champ Email */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Adresse email</Text>
                  <View style={[
                    styles.inputWrapper,
                    touched.email && errors.email ? styles.inputError : null
                  ]}>
                    <TextInput
                      style={styles.input}
                      placeholder="exemple@domaine.com"
                      placeholderTextColor="#000"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      maxLength={100}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>

                {/* Champ Mot de passe */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Mot de passe</Text>
                  <View style={[
                    styles.inputWrapper,
                    touched.password && errors.password ? styles.inputError : null
                  ]}>
                    <View style={styles.passwordContainer}>
                      <TextInput
                        style={[styles.input, styles.passwordInput]}
                        placeholder="••••••"
                        placeholderTextColor="#000"
                        secureTextEntry={!passwordVisible}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        autoComplete="password-new"
                      />
                      <TouchableOpacity 
                        style={styles.toggleButton}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                      >
                        <Text style={styles.toggleText}>
                          {passwordVisible ? 'Masquer' : 'Afficher'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                {/* Champ Confirmation Mot de passe */}
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Confirmer le mot de passe</Text>
                  <View style={[
                    styles.inputWrapper,
                    touched.confirmPassword && errors.confirmPassword ? styles.inputError : null
                  ]}>
                    <View style={styles.passwordContainer}>
                      <TextInput
                        style={[styles.input, styles.passwordInput]}
                        placeholder="••••••"
                        placeholderTextColor="#000"
                        secureTextEntry={!confirmPasswordVisible}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        autoComplete="password-new"
                      />
                      <TouchableOpacity 
                        style={styles.toggleButton}
                        onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                      >
                        <Text style={styles.toggleText}>
                          {confirmPasswordVisible ? 'Masquer' : 'Afficher'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                  )}
                </View>

                {/* Bouton d'inscription */}
                <TouchableOpacity 
                  style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]} 
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Text style={styles.submitButtonText}>
                    {isSubmitting ? 'Inscription en cours...' : 'Créer mon compte'}
                  </Text>
                </TouchableOpacity>

                {/* Message d'erreur */}
                {errorMessage ? (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                  </View>
                ) : null}

                {/* Lien vers connexion */}
                <View style={styles.loginLinkContainer}>
                  <Text style={styles.loginText}>Déjà inscrit ? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
                    <Text style={styles.loginLink}>Se connecter</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>

      {/* Modal de chargement */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={isLoading}
        onRequestClose={() => setIsLoading(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#5378c0" />
            <Text style={styles.modalText}>Inscription en cours...</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  // formContainer: {
  //   backgroundColor: '#fff',
  //   borderRadius: 12,
  //   padding: 24,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 6,
  //   elevation: 3,
  // },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
   
  },
  input: {
    height: 48,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  toggleButton: {
    paddingHorizontal: 12,
  },
  toggleText: {
    color: '#5378c0',
    fontSize: 14,
    fontWeight: '500',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ddd',

    overflow: 'hidden',
  },
  picker: {
    height: 48,
    color: '#333',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  errorContainer: {
    backgroundColor: '#fdecea',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  errorMessage: {
    color: '#e74c3c',
    fontSize: 14,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginText: {
    color: '#FFF',
    fontSize: 14,
  },
  loginLink: {
    color: '#5378c0',
    fontSize: 14,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  modalText: {
    marginTop: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default Inscription;


// import React, { useState, useCallback } from 'react';
// import { 
//   StyleSheet, 
//   Text, 
//   View, 
//   TouchableOpacity, 
//   ScrollView, 
//   TextInput, 
//   Image,
//   KeyboardAvoidingView,
//   Platform 
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Configuration de validation
// const validationSchema = Yup.object().shape({
//   username: Yup.string()
//     .required('Le nom est requis')
//     .max(50, 'Le nom ne doit pas dépasser 50 caractères'),
//   email: Yup.string()
//     .email('Email invalide')
//     .required('Email est requis')
//     .max(100, 'L\'email ne doit pas dépasser 100 caractères'),
//   password: Yup.string()
//     .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
//     .required('Mot de passe est requis')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
//       'Doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial'
//     ),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
//     .required('Confirmation du mot de passe est requise'),
//   niveauEtude: Yup.string()
//     .required('Le niveau d\'étude est requis'),
// });

// const API_URL = 'http://192.168.1.16:3000'; // À remplacer par votre URL

// function Inscription() {
//   const navigation = useNavigation();
//   const [errorMessage, setErrorMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   // Mémoire la fonction de soumission
//   const handleSignUp = useCallback(async (values) => {
//     setIsSubmitting(true);
//     setErrorMessage('');

//     try {
//       const response = await axios.post(`${API_URL}/api/auth/register`, {
//         username: values.username.trim(),
//         email: values.email.toLowerCase().trim(),
//         password: values.password,
//         niveauEtude: values.niveauEtude
//       }, {
//         timeout: 10000 // 10 secondes timeout
//       });

//       await AsyncStorage.setItem('userToken', response.data.token);
      
//       // Navigation optimisée
//       const routeName = values.niveauEtude === 'DEF' ? 'AccueilMaitre' : 'AccueilMaitres';
//       navigation.reset({
//         index: 0,
//         routes: [{ name: routeName }],
//       });

//     } catch (error) {
//       console.error('Erreur inscription:', error);
//       const errorMsg = error.response?.data?.message || 
//                        getErrorMessage(error.code) || 
//                        'Erreur lors de l\'inscription. Veuillez réessayer.';
//       setErrorMessage(errorMsg);
//     } finally {
//       setIsSubmitting(false);
//     }
//   }, [navigation]);

//   const getErrorMessage = (code) => {
//     const errorMessages = {
//       'ECONNABORTED': 'La requête a expiré. Vérifiez votre connexion.',
//       'ERR_NETWORK': 'Problème de connexion internet',
//       'ERR_BAD_REQUEST': 'Données invalides',
//     };
//     return errorMessages[code] || null;
//   };

//   // Basculer la visibilité du mot de passe
//   const togglePasswordVisibility = useCallback(() => {
//     setPasswordVisible(prev => !prev);
//   }, []);

//   const toggleConfirmPasswordVisibility = useCallback(() => {
//     setConfirmPasswordVisible(prev => !prev);
//   }, []);

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.keyboardAvoidingView}
//     >
//       <ScrollView 
//         contentContainerStyle={styles.scrollContainer}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.container}>
//           {/* Logo et en-tête */}
//           <View style={styles.header}>
//             <Image
//               style={styles.logo}
//               resizeMode="contain"
//               source={require("./../../../Asset/logoo.png")}
//             />
//             <Text style={styles.title}>Création de compte</Text>
//           </View>

//           <View style={styles.formContainer}>
//             <Formik
//               initialValues={{ 
//                 username: '', 
//                 email: '', 
//                 password: '', 
//                 confirmPassword: '', 
//                 niveauEtude: '' 
//               }}
//               validationSchema={validationSchema}
//               onSubmit={handleSignUp}
//             >
//               {({ 
//                 handleChange, 
//                 handleBlur, 
//                 handleSubmit, 
//                 values, 
//                 errors, 
//                 touched, 
//                 setFieldValue,
//                 isValid,
//                 dirty
//               }) => (
//                 <>
//                   {/* Champ Nom */}
//                   <View style={styles.inputGroup}>
//                     <Text style={styles.label}>Nom complet</Text>
//                     <TextInput
//                       style={[
//                         styles.input,
//                         touched.username && errors.username && styles.inputError
//                       ]}
//                       placeholder="Votre prénom et nom"
//                       placeholderTextColor="#999"
//                       onChangeText={handleChange('username')}
//                       onBlur={handleBlur('username')}
//                       value={values.username}
//                       maxLength={50}
//                       autoCapitalize="words"
//                     />
//                     {touched.username && errors.username && (
//                       <Text style={styles.errorText}>{errors.username}</Text>
//                     )}
//                   </View>

//                   {/* Champ Niveau d'étude */}
//                   <View style={styles.inputGroup}>
//                     <Text style={styles.label}>Niveau d'étude</Text>
//                     <View style={[
//                       styles.pickerContainer,
//                       touched.niveauEtude && errors.niveauEtude && styles.inputError
//                     ]}>
//                       <Picker
//                         selectedValue={values.niveauEtude}
//                         style={styles.picker}
//                         onValueChange={(itemValue) => setFieldValue('niveauEtude', itemValue)}
//                         dropdownIconColor="#666"
//                       >
//                         <Picker.Item label="Sélectionner votre niveau" value="" />
//                         <Picker.Item label="DEF" value="DEF" />
//                         <Picker.Item label="BAC" value="BAC" />
//                       </Picker>
//                     </View>
//                     {touched.niveauEtude && errors.niveauEtude && (
//                       <Text style={styles.errorText}>{errors.niveauEtude}</Text>
//                     )}
//                   </View>

//                   {/* Champ Email */}
//                   <View style={styles.inputGroup}>
//                     <Text style={styles.label}>Adresse email</Text>
//                     <TextInput
//                       style={[
//                         styles.input,
//                         touched.email && errors.email && styles.inputError
//                       ]}
//                       placeholder="exemple@domaine.com"
//                       placeholderTextColor="#999"
//                       keyboardType="email-address"
//                       autoCapitalize="none"
//                       autoComplete="email"
//                       onChangeText={handleChange('email')}
//                       onBlur={handleBlur('email')}
//                       value={values.email}
//                       maxLength={100}
//                     />
//                     {touched.email && errors.email && (
//                       <Text style={styles.errorText}>{errors.email}</Text>
//                     )}
//                   </View>

//                   {/* Champ Mot de passe */}
//                   <View style={styles.inputGroup}>
//                     <Text style={styles.label}>Mot de passe</Text>
//                     <View style={[
//                       styles.passwordInputContainer,
//                       touched.password && errors.password && styles.inputError
//                     ]}>
//                       <TextInput
//                         style={styles.passwordInput}
//                         placeholder="••••••••"
//                         placeholderTextColor="#999"
//                         secureTextEntry={!passwordVisible}
//                         onChangeText={handleChange('password')}
//                         onBlur={handleBlur('password')}
//                         value={values.password}
//                         autoComplete="password-new"
//                       />
//                       <TouchableOpacity 
//                         style={styles.toggleButton}
//                         onPress={togglePasswordVisibility}
//                       >
//                         <Text style={styles.toggleText}>
//                           {passwordVisible ? 'Masquer' : 'Afficher'}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                     {touched.password && errors.password && (
//                       <Text style={styles.errorText}>{errors.password}</Text>
//                     )}
//                   </View>

//                   {/* Champ Confirmation Mot de passe */}
//                   <View style={styles.inputGroup}>
//                     <Text style={styles.label}>Confirmer le mot de passe</Text>
//                     <View style={[
//                       styles.passwordInputContainer,
//                       touched.confirmPassword && errors.confirmPassword && styles.inputError
//                     ]}>
//                       <TextInput
//                         style={styles.passwordInput}
//                         placeholder="••••••••"
//                         placeholderTextColor="#999"
//                         secureTextEntry={!confirmPasswordVisible}
//                         onChangeText={handleChange('confirmPassword')}
//                         onBlur={handleBlur('confirmPassword')}
//                         value={values.confirmPassword}
//                         autoComplete="password-new"
//                       />
//                       <TouchableOpacity 
//                         style={styles.toggleButton}
//                         onPress={toggleConfirmPasswordVisibility}
//                       >
//                         <Text style={styles.toggleText}>
//                           {confirmPasswordVisible ? 'Masquer' : 'Afficher'}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                     {touched.confirmPassword && errors.confirmPassword && (
//                       <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//                     )}
//                   </View>

//                   {/* Bouton d'inscription */}
//                   <TouchableOpacity 
//                     style={[
//                       styles.submitButton, 
//                       (isSubmitting || !isValid || !dirty) && styles.submitButtonDisabled
//                     ]} 
//                     onPress={handleSubmit}
//                     disabled={isSubmitting || !isValid || !dirty}
//                     activeOpacity={0.7}
//                   >
//                     <Text style={styles.submitButtonText}>
//                       {isSubmitting ? 'Inscription en cours...' : 'Créer mon compte'}
//                     </Text>
//                   </TouchableOpacity>

//                   {/* Message d'erreur */}
//                   {errorMessage ? (
//                     <View style={styles.errorContainer}>
//                       <Text style={styles.errorMessage}>{errorMessage}</Text>
//                     </View>
//                   ) : null}

//                   {/* Lien vers connexion */}
//                   <View style={styles.loginLinkContainer}>
//                     <Text style={styles.loginText}>Déjà inscrit ? </Text>
//                     <TouchableOpacity 
//                       onPress={() => navigation.navigate("Connexion")}
//                       activeOpacity={0.6}
//                     >
//                       <Text style={styles.loginLink}>Se connecter</Text>
//                     </TouchableOpacity>
//                   </View>
//                 </>
//               )}
//             </Formik>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   keyboardAvoidingView: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingBottom: 40,
//   },
//   container: {
//     flex: 1,
//     paddingHorizontal: 24,
//     paddingTop: 40,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 32,
//   },
//   logo: {
//     height: 100,
//     width: 100,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#fff',
//   },
//   formContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 24,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   inputGroup: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#444',
//     marginBottom: 8,
//   },
//   input: {
//     height: 48,
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//     overflow: 'hidden',
//   },
//   picker: {
//     height: 48,
//     color: '#333',
//   },
//   passwordInputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//     paddingRight: 12,
//   },
//   passwordInput: {
//     flex: 1,
//     height: 48,
//     fontSize: 16,
//     color: '#333',
//     paddingHorizontal: 16,
//   },
//   toggleButton: {
//     padding: 8,
//   },
//   toggleText: {
//     color: '#5378c0',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   inputError: {
//     borderColor: '#e74c3c',
//   },
//   errorText: {
//     color: '#e74c3c',
//     fontSize: 12,
//     marginTop: 4,
//     marginLeft: 4,
//   },
//   errorContainer: {
//     backgroundColor: '#fdecea',
//     padding: 12,
//     borderRadius: 8,
//     marginTop: 16,
//   },
//   errorMessage: {
//     color: '#e74c3c',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   submitButton: {
//     backgroundColor: '#5378c0',
//     paddingVertical: 16,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   submitButtonDisabled: {
//     backgroundColor: '#a0a0a0',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   loginLinkContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 24,
//   },
//   loginText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   loginLink: {
//     color: '#5378c0',
//     fontSize: 14,
//     fontWeight: '500',
//   },
// });

// export default Inscription;