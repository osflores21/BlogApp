import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { deletePost } from '../services/services'


const CardManage = ({ autor, content, dateCreate, title, id, navigation }) => {
  /*  const { autor, content, dateCreate, id, title } = item.item; */
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

const styles = StyleSheet.create({
  card: {
    margin: 10
  }
})
export default CardManage;