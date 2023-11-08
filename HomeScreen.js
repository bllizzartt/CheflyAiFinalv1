import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const App = () => {
  const navigation = useNavigation(); // Hook to get the navigation prop

  const goToIngredientScreen = () => {
    navigation.navigate('Ingredient'); // Use the name you've given to the IngredientScreen in your navigator
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Button to navigate to IngredientScreen */}
      <TouchableOpacity
        onPress={goToIngredientScreen}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ingredients</Text>
      </TouchableOpacity>

      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        // ... rest of your camera props
      />
      {/* Camera View */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  buttonText: {
    color: '#000',
  },
  // ... rest of your styles
});

export default App;
