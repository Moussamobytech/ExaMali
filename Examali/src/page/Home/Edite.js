import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = () => {
  const [name, setName] = useState('Diakité');
  const [firstName, setFirstName] = useState('Broulaye');
  const [email, setEmail] = useState('moussakouyate@gmail.com');
  const [password, setPassword] = useState('***************');
  const [confirmPassword, setConfirmPassword] = useState('***************');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
      <Text style={styles.title}>Editez Profile</Text>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
      <TouchableOpacity style={styles.cameraIcon}>
        <Ionicons name="camera" size={20} color="black" />
      </TouchableOpacity>

      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
      <TextInput style={[styles.input, styles.disabledInput]} value={email} editable={false} />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>
      
      <Ionicons name="checkmark" size={24} color="green" style={styles.checkIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  cameraIcon: { position: 'absolute', top: 100, left: 210, backgroundColor: '#fff', padding: 5, borderRadius: 20 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, marginBottom: 10 },
  disabledInput: { backgroundColor: '#eee' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, marginBottom: 10, paddingRight: 10 },
  passwordInput: { flex: 1, padding: 10 },
  backIcon: { position: 'absolute', top: 20, left: 20 },
  checkIcon: { position: 'absolute', top: 20, right: 20 }
});

export default EditProfileScreen;
