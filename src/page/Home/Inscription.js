// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import { Picker } from '@react-native-picker/picker';
// import auth from '@react-native-firebase/auth';

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

//   return (
//     <View style={styles.container}>
//       <View style={styles.containerR}>
//         <Image
//           style={styles.apprenantChild}
//           resizeMode="cover"
//           source={require("./../../../Asset/logoo.png")}
//         />
//       </View>

//       <View style={styles.containergrande}>
//         <Formik
//           initialValues={{ username: '', email: '', password: '', confirmPassword: '', niveauEtude: '' }}
//           validationSchema={validationSchema}
//           onSubmit={async (values) => {
//             try {
//               await auth().createUserWithEmailAndPassword(values.email, values.password);

//               if (values.niveauEtude === 'DEF') {
//                 navigation.navigate('AccueilMaitres'); // Redirection pour DEF
//               } else if (values.niveauEtude === 'BAC') {
//                 navigation.navigate('AccueilMaitre'); // Redirection pour BAC
//               }
//             } catch (error) {
//               setErrorMessage(error.message); // Afficher le message d'erreur
//             }
//           }}
//         >
//           {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
//             <>
//               <View style={styles.middle}>
//                 <Text style={styles.loginText}>Créer un compte pour continuer</Text>
//               </View>

//               {/* Champ Nom */}
//               <View style={styles.inputField}>
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Prénom et Nom"
//                     placeholderTextColor="gray"
//                     onChangeText={handleChange('username')}
//                     onBlur={handleBlur('username')}
//                     value={values.username}
//                   />
//                   {touched.username && errors.username && (
//                     <Text style={styles.errorText}>{errors.username}</Text>
//                   )}
//                 </View>
//               </View>

//               {/* Champ Niveau d'étude */}
//               <View style={styles.inputField}>
//                 <View style={styles.inputContainer}>
//                   <Picker
//                     selectedValue={values.niveauEtude}
//                     style={styles.picker}
//                     onValueChange={(itemValue) => setFieldValue('niveauEtude', itemValue)}
//                   >
//                     <Picker.Item label="Sélectionner le niveau d'étude" value="" color="gray" />
//                     <Picker.Item label="DEF" value="DEF" />
//                     <Picker.Item label="BAC" value="BAC" />
//                   </Picker>
//                   {touched.niveauEtude && errors.niveauEtude && (
//                     <Text style={styles.errorText}>{errors.niveauEtude}</Text>
//                   )}
//                 </View>
//               </View>

//               {/* Champ Email */}
//               <View style={styles.inputField}>
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Entrer votre e-mail"
//                     placeholderTextColor="gray"
//                     onChangeText={handleChange('email')}
//                     onBlur={handleBlur('email')}
//                     value={values.email}
//                   />
//                   {touched.email && errors.email && (
//                     <Text style={styles.errorText}>{errors.email}</Text>
//                   )}
//                 </View>
//               </View>

//               {/* Champ Mot de passe */}
//               <View style={styles.inputField}>
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Votre mot de passe"
//                     placeholderTextColor="gray"
//                     secureTextEntry
//                     onChangeText={handleChange('password')}
//                     onBlur={handleBlur('password')}
//                     value={values.password}
//                   />
//                   {touched.password && errors.password && (
//                     <Text style={styles.errorText}>{errors.password}</Text>
//                   )}
//                 </View>
//               </View>

//               {/* Champ Confirmation Mot de passe */}
//               <View style={styles.inputField}>
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Confirmer mot de passe"
//                     placeholderTextColor="gray"
//                     secureTextEntry
//                     onChangeText={handleChange('confirmPassword')}
//                     onBlur={handleBlur('confirmPassword')}
//                     value={values.confirmPassword}
//                   />
//                   {touched.confirmPassword && errors.confirmPassword && (
//                     <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//                   )}
//                 </View>
//               </View>

//               {/* Bouton d'inscription */}
//               <View style={styles.buttonContainer}>
//                 <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                   <Text style={styles.buttonText}>S'inscrire</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Message d'erreur */}
//               {errorMessage ? (
//                 <Text style={styles.errorText}>{errorMessage}</Text>
//               ) : null}

//               {/* Redirection vers connexion */}
//               <Text style={[styles.tuAsDjContainer, styles.crerTypo]}>
//                 <Text style={styles.tuAsDj}>Vous avez déjà un compte ? </Text>
//                 <Text
//                   style={styles.connexion}
//                   onPress={() => navigation.navigate("Connexion")}
//                 >
//                   Connectez-vous
//                 </Text>
//               </Text>
//             </>
//           )}
//         </Formik>
//       </View>
//     </View>
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
//     borderColor: 'red',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     backgroundColor: '#000',
//     margin: 10,
//   },
//   input: {
//     height: 45,
//     fontSize: 16,
//     color: 'white',
//   },
//   picker: {
//     color: 'white',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     marginTop: 30,
//   },
//   button: {
//     backgroundColor: '#FFF',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     borderColor: '#D024BF',
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
//     fontSize: 20,
//   },
//   connexion: {
//     color: "#5378c0",
//     fontSize: 20,
//   },
//   tuAsDjContainer: {
//     marginTop: 20,
//     fontSize: 24,
//     fontWeight: "500",
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });




import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Le nom est requis'),
  email: Yup.string().email('Email invalide').required('Email est requis'),
  password: Yup.string().min(6, 'Le mot de passe doit être au moins 6 caractères').required('Mot de passe est requis'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas')
    .required('Confirmation du mot de passe est requise'),
  niveauEtude: Yup.string().required('Le niveau d\'étude est requis'),
});

function Inscription() {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async (values) => {
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // 1. Création du compte d'authentification
      const userCredential = await auth().createUserWithEmailAndPassword(
        values.email, 
        values.password
      );
      
      const user = userCredential.user;
      
      // 2. Enregistrement des données supplémentaires dans Firestore
      await firestore()
        .collection('users')
        .doc(user.uid)
        .set({
          uid: user.uid,
          username: values.username,
          email: values.email,
          niveauEtude: values.niveauEtude,
          createdAt: firestore.FieldValue.serverTimestamp(),
          updatedAt: firestore.FieldValue.serverTimestamp()
        });
      
      // 3. Redirection en fonction du niveau d'étude
      if (values.niveauEtude === 'DEF') {
        navigation.navigate('AccueilMaitre');
      } else if (values.niveauEtude === 'BAC') {
        navigation.navigate('AccueilMaitres');
      }
      
    } catch (error) {
      console.error('Erreur inscription:', error);
      setErrorMessage(getErrorMessage(error.code));
      
      // Suppression du compte créé si l'enregistrement Firestore échoue
      if (auth().currentUser) {
        await auth().currentUser.delete();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour traduire les codes d'erreur
  const getErrorMessage = (code) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Cet email est déjà utilisé';
      case 'auth/invalid-email':
        return 'Email invalide';
      case 'auth/weak-password':
        return 'Mot de passe trop faible';
      case 'auth/network-request-failed':
        return 'Problème de connexion internet';
      default:
        return 'Une erreur est survenue lors de l\'inscription';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerR}>
        <Image
          style={styles.apprenantChild}
          resizeMode="cover"
          source={require("./../../../Asset/logoo.png")}
        />
      </View>

      <View style={styles.containergrande}>
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
              <View style={styles.middle}>
                <Text style={styles.loginText}>Créer un compte pour continuer</Text>
              </View>

              {/* Champ Nom */}
              <View style={styles.inputField}>
                <View style={[
                  styles.inputContainer,
                  touched.username && errors.username ? styles.inputError : null
                ]}>
                  <TextInput
                    style={styles.input}
                    placeholder="Prénom et Nom"
                    placeholderTextColor="gray"
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
              <View style={styles.inputField}>
                <View style={[
                  styles.inputContainer,
                  touched.niveauEtude && errors.niveauEtude ? styles.inputError : null
                ]}>
                  <Picker
                    selectedValue={values.niveauEtude}
                    style={styles.picker}
                    onValueChange={(itemValue) => setFieldValue('niveauEtude', itemValue)}
                    dropdownIconColor="white"
                  >
                    <Picker.Item label="Sélectionner le niveau d'étude" value="" />
                    <Picker.Item label="DEF" value="DEF" />
                    <Picker.Item label="BAC" value="BAC" />
                  </Picker>
                </View>
                {touched.niveauEtude && errors.niveauEtude && (
                  <Text style={styles.errorText}>{errors.niveauEtude}</Text>
                )}
              </View>

              {/* Champ Email */}
              <View style={styles.inputField}>
                <View style={[
                  styles.inputContainer,
                  touched.email && errors.email ? styles.inputError : null
                ]}>
                  <TextInput
                    style={styles.input}
                    placeholder="Entrer votre e-mail"
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              {/* Champ Mot de passe */}
              <View style={styles.inputField}>
                <View style={[
                  styles.inputContainer,
                  touched.password && errors.password ? styles.inputError : null
                ]}>
                  <TextInput
                    style={styles.input}
                    placeholder="Votre mot de passe"
                    placeholderTextColor="gray"
                    secureTextEntry
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              {/* Champ Confirmation Mot de passe */}
              <View style={styles.inputField}>
                <View style={[
                  styles.inputContainer,
                  touched.confirmPassword && errors.confirmPassword ? styles.inputError : null
                ]}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirmer mot de passe"
                    placeholderTextColor="gray"
                    secureTextEntry
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                  />
                </View>
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>

              {/* Bouton d'inscription */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity 
                  style={[
                    styles.button, 
                    isSubmitting ? styles.buttonDisabled : null
                  ]} 
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  <Text style={styles.buttonText}>
                    {isSubmitting ? 'Inscription en cours...' : 'S\'inscrire'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Message d'erreur */}
              {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
              ) : null}

              {/* Redirection vers connexion */}
              <Text style={[styles.tuAsDjContainer, styles.crerTypo]}>
                <Text style={styles.tuAsDj}>Vous avez déjà un compte ? </Text>
                <Text
                  style={styles.connexion}
                  onPress={() => navigation.navigate("Connexion")}
                >
                  Connectez-vous
                </Text>
              </Text>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default Inscription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  containergrande: {
    top: -80,
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  inputField: {
    marginTop: 20,
  },
  inputContainer: {
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#111',
    margin: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  input: {
    height: 45,
    fontSize: 16,
    color: 'white',
  },
  picker: {
    color: 'white',
    height: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 5,
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  apprenantChild: {
    height: 100,
    width: 100,
    top: 0,
    alignSelf: 'center',
  },
  crerTypo: {
    textAlign: "center",
    fontWeight: "500",
  },
  tuAsDj: {
    color: 'white',
    fontSize: 16,
  },
  connexion: {
    color: "#5378c0",
    fontSize: 16,
  },
  tuAsDjContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});