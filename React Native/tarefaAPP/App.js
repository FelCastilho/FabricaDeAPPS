import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native';

import Login from './src/components/Login';
import TaskList from './src/components/TaskList';
import firebase from './src/services/firebaseConections';

import { Feather } from '@expo/vector-icons';

export default function App() {
  //Controlando usuário logado
  const inputref = useRef(null);
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [key, setKey] = useState('');

  useEffect(()=>{
    function getUser(){

      //Caso não o úsuario esteja na tela de tarefas sem estar logado
      if(!user){
        return
      }

      firebase.database().ref('tarefas').child(user).once('value', (snapshot) =>{
        setTasks([]);

        snapshot?.forEach((childItem)=>{
          let data = {
            key: childItem.key,
            nome: childItem.val().nome
          }

          setTasks(oldTasks => [...oldTasks, data])
        })
      })

    }
    
    getUser();
  }, [user])

  //Adicionando uma tarefa
  function handleAdd(){
    //Para caso o input esteja vazio
    if (newTask === ''){
      return;
    }

    //Usuário quer editar uma tarefa
    if(key !== ''){
      firebase.database().ref('tarefas').child(user).child(key).update({
        nome: newTask,
      })
      .then(() =>{
        const taskIndex = tasks.findIndex( item => item.key === key);
        const taskClone = tasks;
        taskClone[taskIndex].nome = newTask;

        setTasks([...taskClone])
      })

      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      return;
    }

    let tarefas = firebase.database().ref('tarefas').child(user);
    //Criando uma chave única para cada item do banco
    let chave = tarefas.push().key;

    //Criando a tarefa
    tarefas.child(chave).set({
      nome: newTask,
    })
    .then(()=>{
      const data ={
        key: chave,
        nome: newTask
      }

      setTasks(oldTasks => [...oldTasks, data])

    })

    //Fechando o teclado após criar uma tarefa e limpando o input
    Keyboard.dismiss();
    setNewTask('');

  }

  //Removendo um item do banco de dados
  function handleDelete(key){
    firebase.database().ref('tarefas').child(user).child(key).remove()
    .then(()=>{
      //Filtrando a lista para retornar somente o item selecionado
      const findTasks = tasks.filter( item => item.key !== key);
      setTasks(findTasks)
    })
  }

  //Editando um valor dentro do input
  function handleEdit(data){
    setKey(data.key)
    setNewTask(data.nome);
    //Dando foco no cursor do teclado
    inputref.current.focus();
  }

  function cancelEdit(){
    setKey('');
    setNewTask('');
    Keyboard.dismiss();
  }

  if(!user){
    return <Login changeStatus={ (user) => setUser(user) }/>
  }

  return (
    <SafeAreaView style={styles.container}>

    { key.length > 0 && (
            <View style={{flexDirection: 'row', marginBottom:8, marginTop: 10 }}>
            <TouchableOpacity onPress={cancelEdit}>
              <Feather name="x-circle" size={20} color="#ff0000" />
            </TouchableOpacity>
    
            <Text style={{color:"#ff0000", marginLeft: 5, }}>
              Você está editando uma tarefa
            </Text>
          </View>
    )}

      <View style = {styles.containerTask}>

        <TextInput
        style = {styles.input}
        placeholder='O que vai fazer hoje?'
        value = {newTask}
        onChangeText={(text) => setNewTask(text)}
        ref={inputref}
        />

        <TouchableOpacity style = {styles.buttonAdd} onPress={handleAdd}>
          <Text style = {styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
      data={tasks}
      keyExtractor={(item) => item.key}
      renderItem={({item})=>(
        <TaskList data ={item} deleteItem={handleDelete} editItem={handleEdit}/>
      )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2F6FC'
  },

  containerTask:{
    flexDirection: "row"
  },

  input:{
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },

  buttonAdd:{
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10,
    paddingHorizontal: 14,
    borderRadius: 4,
  },

  buttonText:{
    color: '#fff',
    fontSize: 22,
  }
});