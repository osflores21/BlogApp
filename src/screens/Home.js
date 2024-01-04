import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />



const Home = ({ navigation }) => {

    const [post, setPost] = useState([])
    const [search, setSearch] = useState();

    const fetchData = async () => {
        try {
            const response = await axios.get("https://blogapi-production-9469.up.railway.app/api");
            setPost(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchData2 = async () => {
        try {
            let apiUrl = "https://blogapi-production-9469.up.railway.app/api/";
    
            // Verificar si search no es null o undefined
            if (search) {
                apiUrl += `${encodeURIComponent(search)}`;
            }
    
            const response = await axios.get(apiUrl);
            setPost(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData(search);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

  
     

    const renderPostCard = (item) => {
        const { autor, content, dateCreate, id, title } = item.item;
        const formattedDate = dateCreate.slice(0, 10);
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
                    <Button mode="text" onPress={() => navigation.navigate('DetailPost', { autor, content, title, dateCreate })}>Leer más</Button>
                </Card.Actions>
            </Card>
        );
    }
    if(search === ""){
        fetchData()
    }
    return (
        <View style={styles.layout}>
            <View style={styles.contentTitle}>
                <Text variant="displayMedium">Personal Blog</Text>
            </View>

            <View style={styles.contentCard}>
                <View style={styles.contentSearch}>
                    <TextInput
                        style={styles.contentInputSearch}
                        mode="outlined"
                        placeholder="Search post by autor, title or content"
                        value={search}
                        onChangeText={text => setSearch(text)}
                    />
                    <Button
                        style={styles.contentButtonSearch}
                        mode="contained"
                        onPress={() =>{fetchData2(search)}}>
                        Search
                    </Button>
                </View>

                <FlatList
                    data={post}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderPostCard}
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
    flatList: {
        height: hp(70),
        marginBottom: 10
    },
    contentSearch:{
        flexDirection:'row'
    },
    contentInputSearch: {
        width: wp(60),
        height: hp(5),
        margin: 10
    },
    contentButtonSearch: {
        width: wp(25),
        margin: 10
    },

})
export default Home