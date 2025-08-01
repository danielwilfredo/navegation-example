import React, { useContext } from 'react';
import { View, Text, StyleSheet, Alert, Image, FlatList } from 'react-native';
import Buttons from '../components/Buttons';
import { AuthContext } from "../context/AuthContext"; 
import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard from '../components/Products/ProductCard'

export default function Products({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  const { productos, loading, fetchProductos } = useFetchProducts();

  const goBackHome = () => {
    navigation.navigate('TabNavigator');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/users.png')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Bienvenido{user ? `, ${user}` : ''}
      </Text>
      <Text style={styles.subtitle}>
        Esta aplicación nos servirá para comprender como utilizar la navegación y un tab menu en una aplicación móvil de react native
      </Text>

      <Buttons text='Regresar a home' action={goBackHome} />
  
      <Text style={styles.title}>Productos de la tienda</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item._id}
        renderItem={ProductCard}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
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
