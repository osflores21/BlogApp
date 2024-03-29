import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput, Button } from 'react-native-paper';
import { FormattedDate, generarID } from '../functions/Functions';
import { newPost } from '../services/services';

const CreatePost = ({ navigation }) => {

  const [title, setTitle] = useState();
  const [autor, setAutor] = useState();
  const [content, setContent] = useState();

  const createPost = async () => {
    const data = {
      id: generarID(),
      title: title,
      autor: autor,
      content: content,
      dateCreate: FormattedDate(),
    };
    const result = await newPost(data);
    if (result === 200) {
      navigation.navigate("ManagePost");
    }
  }

  return (
    <View style={styles.contentCreatePost}>
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
        <Button mode="contained" onPress={() => createPost()}>
          Share
        </Button>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  contentCreatePost: {
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
export default CreatePost