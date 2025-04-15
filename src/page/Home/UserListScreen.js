import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  const currentUser = auth().currentUser;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('users')
      .where('uid', '!=', currentUser.uid)
      .onSnapshot(snapshot => {
        const userList = snapshot.docs.map(doc => doc.data());
        setUsers(userList);
      });

    return () => unsubscribe();
  }, []);

  const startChat = async (otherUserId) => {
    const chatQuery = await firestore()
      .collection('chats')
      .where('users', 'in', [
        [currentUser.uid, otherUserId],
        [otherUserId, currentUser.uid],
      ])
      .limit(1)
      .get();

    let chatId;
    if (!chatQuery.empty) {
      chatId = chatQuery.docs[0].id;
    } else {
      const newChat = await firestore().collection('chats').add({
        users: [currentUser.uid, otherUserId],
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      chatId = newChat.id;
    }

    navigation.navigate('Chat', {
      chatId,
      otherUserId,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilisateurs</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.userItem} onPress={() => startChat(item.uid)}>
            <Text style={styles.username}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  username: { fontSize: 18 },
});

export default UserListScreen;
