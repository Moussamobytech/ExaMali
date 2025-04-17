import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email invalide').required('Email est requis'),
  password: Yup.string().min(6, 'Le mot de passe doit être au moins 6 caractères').required('Mot de passe est requis')
});

function Connexion() {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
       <ScrollView  vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <View style={styles.containerR}>
        <Image
          style={styles.apprenantChild}
          resizeMode="cover"
          source={require("./../../../Asset/connexion.png")}
        />
      </View>
      <View style={styles.containergrande}>
        <View style={[styles.inscriptionmaitreChild, styles.inscrisVousPosition]} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              const userCredential = await auth().signInWithEmailAndPassword(values.email, values.password);
              const user = userCredential.user;

              const userDoc = await firestore().collection('users').doc(user.uid).get();
              const userData = userDoc.data();

              if (userData?.niveauEtude === 'DEF') {
                navigation.navigate('AccueilMaitre');
              } else if (userData?.niveauEtude === 'BAC') {
                navigation.navigate('AccueilMaitres');
              } else {
                setErrorMessage("Niveau d'étude non reconnu.");
              }
            } catch (error) {
              setErrorMessage(error.message);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View style={styles.middle}>
                <Text style={styles.loginText}>Connectez-vous</Text>
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

              <View style={styles.inputField}>
                <View style={styles.inputContainer}>
                  <View style={styles.passwordWrapper}>
                    <TextInput
                      style={[styles.input, { flex: 1 }]}
                      placeholder="Votre mot de passe"
                      placeholderTextColor="gray"
                      secureTextEntry={!passwordVisible}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                      <Text style={styles.toggleText}>
                        {passwordVisible ? '🙈' : '👁️'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Se connecter</Text>
                </TouchableOpacity>
              </View>

              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}
            </>
          )}
        </Formik>

        <Text style={[styles.tuAsDjContainer, styles.crerTypo]}>
          <Text style={styles.tuAsDj}>Vous n'avez pas de compte ? </Text>
          <Text
            style={styles.connexion}
            onPress={() => navigation.navigate("Inscription")}
          >
            Inscrivez-vous
          </Text>
        </Text>
      </View>
      </View>
        </ScrollView>
    
  );
}

export default Connexion;

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

  scrollContainer: {
    paddingBottom: 20,
  },
  loginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
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
    color: '#FFF',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 10,
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
  apprenantChild: {
    height: 260,
    width: 380,
    top: 0,
    alignSelf: 'center',
  },
  crerTypo: {
    textAlign: "center",
    fontWeight: "500",
  },
  tuAsDj: {
    color: 'white',
    fontSize: 20,
  },
  connexion: {
    color: 'red',
    fontSize: 20,
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
