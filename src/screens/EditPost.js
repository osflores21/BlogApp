import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { editPost } from '../services/services';
import { sliceDate } from '../functions/Functions';

const EditPost = ({ navigation, route }) => {
  const { oldTitle, oldAutor, oldContent, id, dateCreate } = route.params
  const [title, setTitle] = useState(oldTitle);
  const [autor, setAutor] = useState(oldAutor);
  const [content, setContent] = useState(oldContent);

  const edit = async () => {
    const data = {
      title: title,
      autor: autor,
      content: content,
      dateCreate: sliceDate(dateCreate),
    };

    const result = await editPost(id, data)
    if (result === 200) {
      navigation.navigate("ManagePost");
    }
  }
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
        <Button mode="contained" onPress={() => edit()}>
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