import React from "react";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

import { sliceDate } from "../functions/Functions";

const CardManage = ({ autor, content, dateCreate, title, id, navigation, handleVisible, setIdPost }) => {
  const formattedDate = sliceDate(dateCreate);



  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("EditPost", { id: id, oldAutor: autor, oldContent: content, dateCreate: formattedDate, oldTitle: title })}
    >
      <Card style={styles.card}>
        <Card.Title title={title} subtitle={formattedDate} />
        <Card.Actions>
          <Button mode="text" onPress={() => {
            handleVisible();
            setIdPost(id);
          }}>Delete </Button>
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