
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

const API_URL = 'http://192.168.1.23:3000';
// For Android emulator, uncomment the following if testing on emulator:
// const API_URL = 'http://10.0.2.2:3000';

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
      console.log('Sending registration request to:', `${API_URL}/api/auth/register`);
      console.log('Request data:', {
        username: values.username,
        email: values.email,
        niveauEtude: values.niveauEtude,
      });

      const response = await axios.post(`${API_URL}/api/auth/register`, {
        username: values.username,
        email: values.email,
        password: values.password,
        niveauEtude: values.niveauEtude
      }, { timeout: 10000 }); // 10-second timeout

      console.log('Registration successful:', response.data);

      // Store token and user data
      await AsyncStorage.setItem('userToken', response.data.token);
      await AsyncStorage.setItem('userData', JSON.stringify({
        username: values.username,
        email: values.email,
      }));
      
      // Ensure modal closes before navigation
      setIsLoading(false);
      setIsSubmitting(false);

      // Navigate based on niveauEtude
      if (values.niveauEtude === 'DEF') {
        console.log('Navigating to AccueilMaitre');
        navigation.navigate('AccueilMaitre');
      } else if (values.niveauEtude === 'BAC') {
        console.log('Navigating to AccueilMaitres');
        navigation.navigate('AccueilMaitres');
      }
      
    } catch (error) {
      console.error('Erreur d\'inscription:', error.message, error.config);
      let errorMsg;
      if (error.code === 'ECONNABORTED') {
        errorMsg = 'La requête a expiré. Vérifiez votre connexion réseau.';
      } else if (error.code === 'ERR_NETWORK') {
        errorMsg = 'Impossible de se connecter au serveur. Vérifiez l\'adresse du serveur ou votre connexion.';
      } else if (error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else {
        errorMsg = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.';
      }
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
            source={require("./../../../Asset/logoexamali.png")}
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
        onRequestClose={() => {}} 
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
    height: 237,
    width: 272,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
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