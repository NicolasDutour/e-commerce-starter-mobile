import {
   StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
   product: {
      padding: 10
   },
   imageView: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20
   },
   tinyLogo: {
      width: 100,
      height: 100,
   },
   detailsView: {
      width: '100%',
   },
   counter: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 20,
   },
   countItem: {
      height: 30,
      width: 40,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: 'center',
      borderRadius: 10,
      fontSize: 20,
   },
   button: {
      backgroundColor: '#6abb81',
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: 'center',
   },
   minus: {
      fontSize: 30,
      textAlign: 'center',
      color: 'black'
   },
   plus: {
      fontSize: 30,
      textAlign: 'center',
      color: 'black'
   },
   nameText: {
      fontSize: 24,
      marginBottom: 10
   },
   ingredientsText: {
      fontSize: 16,
      paddingLeft: 8
   },
   priceText: {
      fontSize: 16,
      marginLeft: 6,
      marginTop: 10
   },
   addToCart: {
      marginTop: 20,
      backgroundColor: '#6abb81',
      padding: 10,
      borderRadius: 20,
   },
   addToCartText: {
      fontSize: 20,
      textAlign: 'center'
   }
})