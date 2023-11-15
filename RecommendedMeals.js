// RecommendedMeals.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RecommendedMeals = ({ navigation }) => {
  // Dummy data for the list of meals
  const meals = [
    { id: '1', title: 'Meal 1 Description' },
    { id: '2', title: 'Meal 2 Description' },
    { id: '3', title: 'Meal 3 Description' },
    { id: '4', title: 'Meal 4 Description' },
    { id: '5', title: 'Meal 5 Description' },
    // ... Add more meal items
  ];

  const navigateToMeal = (mealId) => {
    navigation.navigate('MealDetails', { mealId });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.mealItem}
      onPress={() => navigateToMeal(item.id)}
    >
      <View style={styles.mealImagePlaceholder}>
        {/* Placeholder for image */}
      </View>
      <View style={styles.mealDescription}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <Text style={styles.header}>5 Suggested Meals</Text>}
      />
      <TouchableOpacity style={styles.regenerateButton}>
        <Text style={styles.regenerateButtonText}>Regenerate</Text>
      </TouchableOpacity>

      {/* Footer Navigation */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Icon name="home-outline" size={25} />
          <Text>Home</Text>
        </TouchableOpacity>
        {/* ... Other tab items ... */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF', // Light background color for the whole screen
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    backgroundColor: '#E8EAF6', // Light blue background color for the header
  },
  mealItem: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fff', // White background color for each meal item
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mealImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd', // Gray color for the placeholder
    borderRadius: 25, // Rounded corners for the placeholder
    marginRight: 10,
  },
  mealDescription: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start', // Align text to the start
  },
  regenerateButton: {
    backgroundColor: '#E0E0E0', // Light gray color for the button
    padding: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  regenerateButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Darker text color for better contrast
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#cccccc', // Light gray color for the top border of the tab bar
    backgroundColor: '#FAFAFA', // Light background color for the tab bar
  },
  tabItem: {
    alignItems: 'center',
    padding: 10, // Padding for tap targets
  },
  // ... Add styles for other elements as needed ...
});


export default RecommendedMeals;



// // RecommendedMeals.js
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const RecommendedMeals = ({ navigation }) => {
//   // Dummy data for the list of meals
//   const meals = [
//     { id: '1', title: 'Meal 1 Description' },
//     { id: '2', title: 'Meal 2 Description' },
//     { id: '3', title: 'Meal 3 Description' },
//     { id: '4', title: 'Meal 4 Description' },
//     { id: '5', title: 'Meal 5 Description' },

//     // ... Add more meal items
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.mealItem}>
//       <View style={styles.mealImagePlaceholder}>
//         {/* Placeholder for image */}
//       </View>
//       <View style={styles.mealDescription}>
//         <Text>{item.title}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={meals}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         ListHeaderComponent={() => <Text style={styles.header}>5 Suggested Meals</Text>}
//       />
//       <TouchableOpacity style={styles.regenerateButton}>
//         <Text style={styles.regenerateButtonText}>Regenerate</Text>
//       </TouchableOpacity>

//       {/* Footer Navigation */}
//       <View style={styles.tabBar}>
//         <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
//           <Icon name="home-outline" size={25} />
//           <Text>Home</Text>
//         </TouchableOpacity>
//         {/* ... Other tab items ... */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     padding: 20,
//     textAlign: 'center',
//   },
//   mealItem: {
//     flexDirection: 'row',
//     padding: 10,
//     margin: 10,
//     backgroundColor: '#fff', // Use white or another light color for the background
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   mealImagePlaceholder: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#ddd',
//     borderRadius: 25, // Make the placeholder image rounded
//     marginRight: 10,
//   },
//   mealDescription: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   regenerateButton: {
//     backgroundColor: '#E0E0E0', // A light gray color
//     padding: 15,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//   },
//   regenerateButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#cccccc',
//   },
//   tabItem: {
//     alignItems: 'center',
//   },
//   // ... Add styles for other elements as needed ...
// });

// export default RecommendedMeals;
