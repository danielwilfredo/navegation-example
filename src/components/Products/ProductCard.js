import { View, Text, StyleSheet, Alert, Image, FlatList } from 'react-native';

export default function ProductCard({ item }) {

  return (
   <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>Precio: ${item.price}</Text>
      <Text style={styles.productStock}>Stock: {item.stock}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAD8C0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#5C3D2E',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
    color: '#5C3D2E',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    width: 350,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
    textAlign: 'center'
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a0',
  },
  productStock: {
    fontSize: 14,
    color: '#999',
  }
});
