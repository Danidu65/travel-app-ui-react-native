import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';

const places = [
  { id: '1', name: 'Tropical Paradise Resort', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '2', name: 'Alpine Chalet Retreat', image: 'https://images.unsplash.com/photo-1512273222628-4daea6e55abb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '3', name: 'Urban Explorer\'s Dream', image: 'https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '4', name: 'Enchanted Forest Retreat', image: 'https://plus.unsplash.com/premium_photo-1668917805105-2d5d9e49af87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: '5', name: 'Tranquil Lakeside Haven', image: 'https://images.unsplash.com/photo-1535927583620-7940e95a5a05?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSx0cmFucXVpbHx8fHx8fDE3MTEwMzI1MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' },
  { id: "6", name: "Sandy Shores Beach Resort", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhY2gsc2FuZHl8fHx8fHwxNzExMDMyNTg5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Beaches" },
  { id: "7", name: "Majestic Mountain Lodge", image: "https://images.unsplash.com/photo-1543768179-656dbc9d9be9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW4sbWFqZXN0aWN8fHx8fHwxNzExMDMyNjUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Mountains" },
  { id: "8", name: "Metropolitan Marvels", image: "https://images.unsplash.com/photo-1697543117287-53b5ab69742b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxtZXRyb3BvbGl0YW58fHx8fHwxNzExMDMyNzM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Cities" },
  { id: "9", name: "Mystical Forest Sanctuary", image: "https://images.unsplash.com/photo-1496564692837-ec757c470e07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9yZXN0LG15c3RpY2FsfHx8fHx8MTcxMTAzMjgyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Forests" },
  { id: "10", name: "Serene Lake Retreat", image: "https://images.unsplash.com/photo-1541420937988-702d78cb9fa1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxzZXJlbmV8fHx8fHwxNzExMDMyODcx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Lakes" },
  
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const handleSearchChange = (text) => {
    setSearchQuery(text);

    const results = places.filter(place =>
      place.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredPlaces(results);
  };

  const renderPlace = ({ item }) => (
    <TouchableOpacity style={styles.placeButton}>
      <Image source={{ uri: item.image }} style={styles.placeImage} />
      <Text style={styles.placeText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search places..."
        value={searchQuery}
        onChangeText={handleSearchChange}
      />

      <FlatList
        data={filteredPlaces}
        keyExtractor={(item) => item.id}
        renderItem={renderPlace}
        numColumns={2} 
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  placeButton: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    padding: 8,
  },
  placeImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  placeText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default Page;
