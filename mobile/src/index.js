import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

/**
 * View será utilizada para nossos containers, sendo que ela substituirá
 * <div>, <footer>, <header>, <main>, <aside>, <section>
 * 
 * Text será utilizado para qualquer tipo de texto, substituindo
 * <p>, <span>, <h1>, <h2>, <h3>
 * 
 * Não possui estilização própria igual o <h1> no html.
 * 
 * Todos os componentes do React Native, possuem por padrão display: flex.
 * 
 * Dentro do ReactNative não existe herança de estilos.
 * 
 * Não existe valor semântico
 */

export default function App(){
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold'
  }
});