import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MealCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <Text style={styles.header}>Meal #1</Text>
      <Image
        source={{ uri: 'path-to-your-image' }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.detailText}>5 min</Text>
        <Text style={styles.detailText}>3 / 4</Text>
        <Text style={styles.detailText}>5+ steps</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>Build this meal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Add to Basket</Text>
      </TouchableOpacity>
      <View style={styles.ingredients}>
        <Text>Key Ingredients:</Text>
        <Text>Ingredient 1</Text>
        <Text>Ingredient 2</Text>
        <Text>Ingredient 3</Text>
      </View>
      <View style={styles.category}>
        <Text>Category</Text>
        <Text>Meats, fish, veggies, etc</Text>
      </View>
      {/* Add navigation bar here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200, // Set image height
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  detailText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'grey',
    padding: 15,
    margin: 10,
    alignItems: 'center',
  },
  ingredients: {
    padding: 10,
  },
  category: {
    padding: 10,
  },
});

export default MealCard;
