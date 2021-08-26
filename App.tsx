import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Maitoa' },
    { id: uuid.v4(), text: 'Juustoa' },
    { id: uuid.v4(), text: 'Leipää' },
    { id: uuid.v4(), text: 'Voita' }
  ]);

  const deleteItem = (itemToDelete: any) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== itemToDelete.id);
    });
  };

  const addItem = (text: string) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [ {text: "OK"} ]);
      return;
    }
    setItems(prevItems => {
      return [{ id: uuid.v4(), text }, ...prevItems]
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping list" />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
});

export default App;
