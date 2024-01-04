import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import axios from 'axios';
import {DateComponent} from '../functions/Functions';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const EditPost = ({ navigation, route }) => {
  const { id, dateCreate, autor: initialAutor, content: initialContent, title: initialTitle } = route.params.params;
  const formattedDate = dateCreate.slice(0, 10);
  const [title, setTitle] = useState(initialTitle);
  const [autor, setAutor] = useState(initialAutor);
  const [content, setContent] = useState(initialContent);

  
  const editPost = () => {
    const dataToSend = {
      title: title,
      autor: autor,
      content: content,
      dateCreate: formattedDate,
    };
  
    axios.put(`https://blogapi-production-9469.up.railway.app/api/${id}`, dataToSend)
      .then((response) => {
        console.log('Solicitud PUT exitosa', response.data);
        navigation.navigate('ManagePost');
      })
      .catch((err) => {
        console.log('Error al realizar la solicitud PUT', err);
      });
  };
  return (
    <View style={styles.contentEditPost}>
      <TextInput
        mode="outlined"
        label="Post title"
        placeholder="Enter a title"
        right={<TextInput.Affix />}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        mode="outlined"
        label="Autor"
        placeholder="Enter autor name"
        right={<TextInput.Affix />}
        value={autor}
        onChangeText={text => setAutor(text)}
      />
      <TextInput
        mode="outlined"
        label="Content"
        placeholder="What's on your mind?"
        right={<TextInput.Affix text="/200" />}
        multiline={true}
        numberOfLines={5}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <View style={styles.contentButton}>
        <Button mode="contained" onPress={() => editPost()}>
          Update
        </Button>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  contentEditPost: {
    marginTop: 15,
    alignSelf: 'center',
    width: wp(95)
  },

  contentButton: {
    alignSelf: 'center',
    margin: 20,
    width: wp(30),
  }
})
export default EditPost