import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button, Card, Text } from 'react-native-paper';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import MessageDelete from '../components/MessageDelete';

const ManagePost = ({ navigation }) => {
  const [visible, setVisible] = useState(false);


  const [post, setPost] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get("https://blogapi-production-9469.up.railway.app/api");
      setPost(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  const toggleVisible = () => {
    setVisible(!visible);
  };
  const deletePost = (postId) => {
    axios.delete(`https://blogapi-production-9469.up.railway.app/api/${postId}`)
      .then((response) => {
        fetchData()
        console.log('Solicitud DELETE exitosa', response.data);
      })
      .catch((err) => {
        console.log('Error al realizar la solicitud DELETE', err);
      });
  };

  const renderPostCard = (item) => {
    const { autor, content, dateCreate, id, title } = item.item;
    const formattedDate = dateCreate.slice(0, 10);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("EditPost", { params: { id: id, autor: autor, content: content, dateCreate: formattedDate, title: title } })}
      >

        <Card style={styles.card}>
          <Card.Title title={title} subtitle={formattedDate} />
          <Card.Actions>

            <Button mode="text" onPress={() => deletePost(id)}>Delete </Button>
            {/*   <Button mode="text" onPress={toggleVisible}>Delete </Button> */}

          </Card.Actions>
        </Card>

      </TouchableOpacity>
    );
  }

  return (

    <View style={styles.layout}>
      <MessageDelete visible={visible} />
      <View style={styles.contentTitle}>
        <Text variant="displayMedium">Personal Blog</Text>
        <Button style={styles.buttonRound} mode="contained" onPress={() => navigation.navigate('CreatePost')}>
          New post
        </Button>
      </View>

      <View style={styles.contentCard}>
        <FlatList
          data={post}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPostCard}
          style={styles.flatList}
        /* contentContainerStyle={styles.contentCard} */
        />

      </View>



    </View>
  )
}


const styles = StyleSheet.create({
  layout: {
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentTitle: {
    width: wp(100),
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentCard: {
    width: wp(100),
    margin: 10
  },
  card: {
    margin: 10
  },
  buttonRound: {
    marginRight: 10,
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  flatList: {
    height: hp(70),
    marginBottom: 10
  }

})
export default ManagePost