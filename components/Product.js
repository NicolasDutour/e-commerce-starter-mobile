import React, { useState } from 'react'
import {
   Image,
   Text,
   View,
   TouchableOpacity,
   TextInput
} from 'react-native';

import { styles } from '../styles/product'

export default function Product({ navigation, route }) {
   const { product: { name, ingredients, price } } = route.params

   const [value, onChangeText] = useState('0');

   return (
      <View style={styles.product}>
         <View style={styles.imageView}>
            <Image
               style={styles.tinyLogo}
               source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
               }}
            />
         </View>
         <View style={styles.detailsView}>
            <Text style={styles.nameText}> {name} </Text>
            <Text style={styles.ingredientsText}> {ingredients} </Text>
            <Text style={styles.priceText}> {(price.toFixed(2))} € </Text>
         </View>
         <View style={styles.counter}>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.plus}>-</Text>
            </TouchableOpacity>
            <TextInput
               style={styles.countItem}
               onChangeText={text => onChangeText(text)}
               value={value}
            />
            <TouchableOpacity style={styles.button}>
               <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.addToCart}>
            <Text style={styles.addToCartText}>Ajouter au panier</Text>
         </TouchableOpacity>
      </View>
   )
}
