import React from "react";
import { StyleSheet } from "react-native";
import { Card, Button, Text } from 'react-native-paper'
import { sliceDate } from "../functions/Functions";

const CardPost = ({ autor, content, dateCreate, title, navigation }) => {
    const formattedDate = sliceDate(dateCreate);
    let first70 = content.substring(0, 70);
    if (content.length > 10) {
        first70 += "...";
    }
    return (
        <Card style={styles.card}>
            <Card.Title title={title} subtitle={formattedDate} />
            <Card.Content>
                <Text variant="bodyMedium">{first70} </Text>
            </Card.Content>
            <Card.Actions>
                <Button mode="text" onPress={() => navigation.navigate('DetailPost', { autor, content, title, dateCreate })}>Read more</Button>
            </Card.Actions>
        </Card>
    );
}
const styles = StyleSheet.create({
    card: {
        margin: 10
    }
})

export default CardPost