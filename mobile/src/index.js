import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import api from './services/api';

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
 * Podemos tratar scroll utilizando a ScrollView:
 * import {ScrollView, Text, StyleSheet, StatusBar} from 'react-native';
 * 
 * Porém como vamos tratar com listas não podemos utilizar a ScrollView. Neste caso,
 * vamos utilizar o FLatList, que é um componente performático para listas dentro
 * do ReactNative. 
 * A propriedade 'data' dentro do FlatList significa qual a variável que carrega
 * os dados dentro de nossa FlatList. Neste caso é a variável projects.
 * O data precisa ser obrigatoriamente um array.
 * 
 * Não existe valor semântico no React.
 * 
 * O SafeAreaView funciona como a área segura para ser exibido algum tipo de conteúdo.
 * 
 * O TouchableOpacity é um botão que quando clicamos nele, a opacidade é levemente diminuída.
 * 
 * No ReactNative não existe clique, mas sim press.
 */

export default function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects')
      .then(response => {
        setProjects(response.data);
      });
  }, [])

  async function handleProject(){
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: 'Thadeu Munhóz Cesário'
    });

    const project = response.data;

    setProjects([...projects, project])
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>

      <SafeAreaView style={styles.container}>
        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project} key={project.id}>{project.title}</Text>
          )}
        />

        <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#7159c1'
  },
  project:{
    color: '#FFF',
    fontSize: 20
  },
  button:{
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 16
  }
});