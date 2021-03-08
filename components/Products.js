import React from 'react';
import {
   StyleSheet,
   Text,
   View,
   Image,
   ScrollView,
   TouchableOpacity
} from 'react-native';

import { styles } from '../styles/products'

const products = [
   { name: 'Cheese Burger', price: 15, ingredients: 'Pain, Fromage, Oignons, bacon' },
   { name: 'Bacon Burger', price: 12, ingredients: 'Pain, Fromage, Oignons, bacon' },
   { name: 'Double Cheese Burger', price: 17, ingredients: 'Pain, Fromage, Oignons, bacon' },
   { name: 'Mega Burger', price: 9, ingredients: 'Pain, Fromage, Oignons, bacon' }
]

export default function Products({ navigation }) {
   return (
      <View>
         <ScrollView style={styles.scrollView}>
            {
               products.map((product, index) => {
                  return (
                     <TouchableOpacity
                        key={index}
                        style={styles.button}
                        onPress={() =>
                           navigation.navigate('Product', { product: product })
                        }
                     >
                        <View style={styles.product}>
                           <View style={styles.detailsView}>
                              <Text style={styles.nameText}> {product.name} </Text>
                              <Text style={styles.ingredientsText}> {product.ingredients} </Text>
                              <Text style={styles.priceText}> {(product.price.toFixed(2))} € </Text>
                           </View>
                           <View style={styles.imageView}>
                              <Image
                                 style={styles.tinyLogo}
                                 source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                 }}
                              />
                           </View>
                        </View>
                     </TouchableOpacity>
                  )
               })
            }
         </ScrollView>
      </View>
   )
}
