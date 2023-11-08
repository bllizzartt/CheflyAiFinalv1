// IngredientScreen.js
import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Make sure to install react-native-vector-icons

// Accept navigation as a prop
const IngredientScreen = ({ navigation }) => {

  // Function to handle the navigation to RecommendedMeals when Confirm is pressed
  const handleConfirmPress = () => {
    navigation.navigate('Recommended Meals'); // This string must match the name of the screen in your navigator
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Back</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Ingredients Identified</Text>
        {/* This is where you map through your array of ingredients */}
        {[...Array(4)].map((_, index) => (
          <View key={index} style={styles.ingredientItem}>
            <Image style={styles.ingredientImage} source={{ uri: 'https://via.placeholder.com/50' }} />
            <Text style={styles.ingredientText}>Ingredient {index + 1}</Text>
          </View>
        ))}
        <TextInput style={styles.input} placeholder="Add more here" />
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="cloud-upload-outline" size={25} />
          <Text>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Re-take</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleConfirmPress}>
          <Text>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Tab Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={25} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Explore')}>
          <Icon name="search-outline" size={25} />
          <Text>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Saved')}>
          <Icon name="bookmark-outline" size={25} />
          <Text>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Account')}>
          <Icon name="person-outline" size={25} />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ingredientImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    backgroundColor: '#cccccc', // Placeholder color
  },
  ingredientText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  footer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  tabItem: {
    alignItems: 'center',
  },
});

export default IngredientScreen
