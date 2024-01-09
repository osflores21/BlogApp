import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, Text } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliceDate } from '../functions/Functions';

const DetailPost = ({ route }) => {
    const { dateCreate, autor, content, title } = route.params;
    const formattedDate = sliceDate(dateCreate)
    return (
        <Card style={styles.card}>
            <Text style={styles.text} variant="titleSmall">Autor: {autor} </Text>
            <Card.Title title={title} subtitle={formattedDate} />
            <Card.Content>
                <Text variant="bodyMedium">{content} </Text>
            </Card.Content>
            <Card.Actions>
            </Card.Actions>
        </Card>
    )
}

export default DetailPost

const styles = StyleSheet.create({
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
    text: {
        marginTop: 10,
        marginLeft: 10
    }
})