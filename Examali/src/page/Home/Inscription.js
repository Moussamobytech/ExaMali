import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email invalide').required('Email est requis'),
  password: Yup.string().min(6, 'Le mot de passe doit être au moins 6 caractères').required('Mot de passe est requis')
});

function Inscription() {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');

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
      <View style={[styles.inscriptionmaitreChild, styles.inscrisVousPosition]} />
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            await auth().signInWithEmailAndPassword(values.email, values.password);
            navigation.navigate('Accueil'); // Navigation vers l'écran d'accueil après connexion réussie
          } catch (error) {
            setErrorMessage(error.message); // Afficher le message d'erreur
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <View style={styles.middle}>
              <Text style={styles.loginText}>Créer un compte pour continuer</Text>
            </View>
            <View style={styles.text2}>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                {/* Optionnellement, ajouter du texte ou une icône ici */}
              </TouchableOpacity>
            </View>

            {/* Champ d'email */}
            <View style={styles.inputField}>
              <View style={styles.inputContainer}>
                <TextInput
                 style={styles.input}
                 placeholder="Prénom et Nom"
                 placeholderTextColor="gray"
                 onChangeText={handleChange('username')}
                 onBlur={handleBlur('username')}
                 value={values.username}
                />
              {touched.username && errors.username && (
                <Text style={styles.errorText}>{errors.username}</Text>
              )}
              </View>
            </View>

            <View style={styles.inputField}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Entrer votre e-mail"
                  placeholderTextColor="gray"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
            </View>
            {/* Champ de mot de passe */}
            <View style={styles.inputField}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Votre mot de passe"
                  placeholderTextColor="gray"
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
            </View>

             {/* Champ de mot de passe */}
             <View style={styles.inputField}>
              <View style={styles.inputContainer}>
                <TextInput
               style={styles.input}
               placeholder="Confirmer mot de passe"
               placeholderTextColor="gray"
               secureTextEntry
               onChangeText={handleChange('confirmPassword')}
               onBlur={handleBlur('confirmPassword')}
               value={values.confirmPassword}
             />
             {touched.confirmPassword && errors.confirmPassword && (
               <Text style={styles.errorText}>{errors.confirmPassword}</Text>
             )}
              </View>
            </View>

            {/* Bouton de connexion */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Inscrire</Text>
              </TouchableOpacity>
            </View>

            {/* Message d'erreur */}
            {errorMessage ? (
              <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null}

          </>
        )}
      </Formik>
      <Text style={[styles.tuAsDjContainer, styles.crerTypo]}>
        <Text style={styles.tuAsDj}>Vous avez déja un compte ?</Text>
        <Text style={styles.text}> </Text>
        <Text style={styles.connexion} 
          onPress={() => navigation.navigate("CreerCompte")}
        >Connectez-vous</Text>
      </Text>
  

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
    top: -80
  },
  middle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'blod',
    color: 'white'
  },
  text2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 5,
  },
  signupText: {
    fontWeight: 'bold',
  },
  inputField: {
    marginTop: 20,
  },
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    margin: 10
  },
  input: {
    height: 50,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 30,

  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#D024BF'
  },
 
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lineContainer: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orText: {
    width: 50,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    color: 'white',
  },
  socialButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  socialIcon: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  apprenantChild: {
    height: 138,
    width:138,
    top: 0,
    alignSelf: 'center',
  },
 
  //CCCCCC

  crerTypo: {
    textAlign: "center",
    fontWeight: "500",
    
  },
  
  tuAsDj: {
    color: 'white',
    fontSize: 20,
    flexDirection: 'row',
    
  },
  text: {
    color: 'white',
  },
  connexion: {
    color: "#5378c0",
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  tuAsDjContainer: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: "Inter Medium",
    fontWeight: "500",
    flexDirection: 'row',
    justifyContent: 'center',
  },
 
});
             