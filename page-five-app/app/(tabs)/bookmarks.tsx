import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

const bookmarks = [
  { id: "1", name: "Tropical Paradise Resort", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Beaches" },
  { id: "2", name: "Alpine Chalet Retreat", image: "https://images.unsplash.com/photo-1512273222628-4daea6e55abb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Mountains" },
  { id: "3", name: "Urban Explorer's Dream", image: "https://images.unsplash.com/photo-1546436836-07a91091f160?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  category: "Cities" },
  { id: "4", name: "Enchanted Forest Retreat", image: "https://plus.unsplash.com/premium_photo-1668917805105-2d5d9e49af87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", category: "Forests" },
  { id: "5", name: "Tranquil Lakeside Haven", image: "https://images.unsplash.com/photo-1535927583620-7940e95a5a05?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSx0cmFucXVpbHx8fHx8fDE3MTEwMzI1MjA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Lakes" },
  { id: "6", name: "Sandy Shores Beach Resort", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhY2gsc2FuZHl8fHx8fHwxNzExMDMyNTg5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Beaches" },
  { id: "7", name: "Majestic Mountain Lodge", image: "https://images.unsplash.com/photo-1543768179-656dbc9d9be9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW4sbWFqZXN0aWN8fHx8fHwxNzExMDMyNjUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Mountains" },
  { id: "8", name: "Metropolitan Marvels", image: "https://images.unsplash.com/photo-1697543117287-53b5ab69742b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxtZXRyb3BvbGl0YW58fHx8fHwxNzExMDMyNzM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Cities" },
  { id: "9", name: "Mystical Forest Sanctuary", image: "https://images.unsplash.com/photo-1496564692837-ec757c470e07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9yZXN0LG15c3RpY2FsfHx8fHx8MTcxMTAzMjgyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Forests" },
  { id: "10", name: "Serene Lake Retreat", image: "https://images.unsplash.com/photo-1541420937988-702d78cb9fa1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxzZXJlbmV8fHx8fHwxNzExMDMyODcx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Lakes" },
  { id: "11", name: "Golden Sands Beach Resort", image: "https://images.unsplash.com/photo-1535792679781-7a212687bc8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhY2gsZ29sZGVufHx8fHx8MTcxMTAzMjkzOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Beaches" },
  { id: "12", name: "Snowy Peak Chalet", image: "https://images.unsplash.com/photo-1599612586467-d790cdd52f1b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zLHNub3d8fHx8fHwxNzExMDMyOTUy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Mountains" },
  { id: "13", name: "Cultural Capital Wonders", image: "https://images.unsplash.com/photo-1584776982773-1da84f4d5a08?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0eSxjdWx0dXJhbHxhcnR8fHx8fHwxNzExMDMzMTAy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Cities" },
  { id: "14", name: "Forest Haven Escape", image: "https://images.unsplash.com/photo-1564853096-3b152f1d490e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9yZXN0LGVzc2FjZXxlfHx8fHwxNzExMDMzMTMw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Forests" },
  { id: "15", name: "Picturesque Lake Lodge", image: "https://images.unsplash.com/photo-1529935000955-846c0958b11b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSwtcGljdHVyZXNxdWV8fHx8fHwxNzExMDMzMTI1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Lakes" },
  { id: "16", name: "Oceanfront Beach Retreat", image: "https://images.unsplash.com/photo-1526855889460-90e61b39b6c8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVhY2gsb2NlYW5mcm9udHx8fHx8MTcxMTAzMjk0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Beaches" },
  { id: "17", name: "Winter Wonderland Lodge", image: "https://images.unsplash.com/photo-1540651297591-08c739e9088a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bW91bnRhaW5zLXNub3d8fHx8fHwxNzExMDMzMjQw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Mountains" },
  { id: "18", name: "Modern Metropolis Stay", image: "https://images.unsplash.com/photo-1560435393-6f89cdebf7a0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2l0ZXMsdG9wLWhvdGVsfHx8fHwxNzExMDMzMjUw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Cities" },
  { id: "19", name: "Serenity Forest Retreat", image: "https://images.unsplash.com/photo-1506748686214e9df14a55d6c4a5d90f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Zm9yZXN0LHNlcmVuaXR5fHx8fHwxNzExMDMzMjk2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",  category: "Forests" },
  { id: "20", name: "Grand Lake View Lodge", image: "https://images.unsplash.com/photo-1530871079896-3fbe3b72b93a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFrZSxvbmV8fHx8fHwxNzExMDMzMjcy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600", category: "Lakes" },
];

const Page = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
});
