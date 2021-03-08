import {
   StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
   header: {
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray'
   },
   title: {
      textAlign: 'center',
      fontSize: 30
   },
   product: {
      flexDirection: 'row',
      padding: 10,
      marginBottom: 30
   },
   detailsView: {
      width: '70%',
   },
   nameText: {
      fontSize: 20
   },
   ingredientsText: {
      fontSize: 12,
      paddingLeft: 8
   },
   priceText: {
      fontSize: 16,
      marginLeft: 6,
      marginTop: 10
   },
   imageView: {
      width: '30%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   tinyLogo: {
      width: 70,
      height: 70,
   },
})