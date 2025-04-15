import React, { useState } from 'react';
import { View, Button, Text, Alert, Linking, Platform, PermissionsAndroid } from 'react-native';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';

const UploadPDF = () => {
  const [pdfUrl, setPdfUrl] = useState('');

  // Fonction pour demander les permissions sur Android
  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Permission requise',
            message: 'L\'application a besoin d\'accéder à vos fichiers pour uploader des PDFs.',
            buttonNeutral: 'Demander plus tard',
            buttonNegative: 'Annuler',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS n'a pas besoin de cette permission
  };

  // Fonction pour sélectionner un PDF
  const pickDocument = async () => {
    const permissionGranted = await requestStoragePermission();
    if (!permissionGranted) {
      Alert.alert('Permission refusée', 'Vous devez autoriser l\'accès aux fichiers pour continuer.');
      return;
    }

    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf], // Sélectionner uniquement des fichiers PDF
        copyTo: 'cachesDirectory', // Assure la copie locale pour éviter les erreurs
      });

      const fileUri = res.fileCopyUri || res.uri; // Utilisation de fileCopyUri pour éviter les erreurs d'accès
      const fileName = res.name;

      uploadPDFToFirebase(fileUri, fileName);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Annulé', 'Aucun fichier sélectionné');
      } else {
        Alert.alert('Erreur', err.message);
      }
    }
  };

  // Fonction pour uploader le fichier PDF sur Firebase Storage
  const uploadPDFToFirebase = async (fileUri, fileName) => {
    const reference = storage().ref(`Sujetspdf/${fileName}`); // Crée un dossier "Sujetspdf" dans Firebase Storage

    try {
      await reference.putFile(fileUri); // Upload du fichier
      const downloadURL = await reference.getDownloadURL(); // Obtenir l'URL de téléchargement
      setPdfUrl(downloadURL);
      Alert.alert('Succès', 'PDF uploadé avec succès !');
    } catch (error) {
      Alert.alert('Erreur', 'Échec du téléchargement');
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Choisir un PDF" onPress={pickDocument} />
      {pdfUrl ? (
        <Text style={{ color: 'blue', marginTop: 10 }} onPress={() => Linking.openURL(pdfUrl)}>
          Ouvrir le PDF
        </Text>
      ) : null}
    </View>
  );
};

export default UploadPDF;
