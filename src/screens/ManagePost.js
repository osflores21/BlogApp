import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import CardManage from '../components/CardManage';
import Header from '../components/Header';
import { fetchData } from '../services/services';
import MessageDelete from "../components/MessageDelete";
import { deletePost } from '../services/services'
const ManagePost = ({ navigation }) => {

  const [visible, setVisible] = useState(false);
  const [post, setPost] = useState([]);
  const [idPost, setIdPost] = useState();
  const [deleteP, setDeleteP] = useState(false)

  const allData = async () => {
    const data = await fetchData();
    setPost(data);
  };

  useEffect(() => {
    allData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      allData();
    }, [])
  );

  const handleVisible = () => {
    setVisible(!visible)
  }

  const deletePo = async () => {
    const result = await deletePost(idPost)
    if (result) {
      setDeleteP(false)
      allData();
    }
  }

  if (deleteP) {
    deletePo();
  }

  return (
    <View style={styles.layout}>
      <Header />
      <MessageDelete visible={visible} setVisible={setVisible} idPost={idPost} setDeleteP={setDeleteP} />
      <View style={styles.contentButtonNew}>
        <Button style={styles.buttonNew} mode="contained" onPress={() => navigation.navigate('CreatePost')}>
          New post
        </Button>
      </View>
      <View style={styles.contentCard}>
        <FlatList
          data={post}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardManage {...item} navigation={navigation} handleVisible={handleVisible} setIdPost={setIdPost} />
          )}
          style={styles.flatList}
        />

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  layout: {
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentCard: {
    width: wp(100),
    margin: 10
  },

  flatList: {
    height: hp(70),
    marginBottom: 10
  },
  contentButtonNew: {
    width: wp(100),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  buttonNew: {
    margin: 10,
  },

})
export default ManagePost