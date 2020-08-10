import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {

    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
            <Text style={styles.label}>Edit Content:</Text>
            <TextInput style={styles.input} value={content} onChangeText={(newContent) => setContent(newContent)} />
            <Button title="Add Blog Post" onPress={() => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
            }} />
        </View>
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default EditScreen;
