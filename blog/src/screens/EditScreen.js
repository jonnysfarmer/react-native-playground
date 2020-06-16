import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BlogContext'

const EditScreen = ( { navigation }) => {

  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)


  return (
    <View>
      <Text>Edit Blog post</Text>

      <Text style={styles.label}>Edit Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Edit Content: </Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
      {/* <Button 
        title='Add Blog post'
        onPress={() => addBlogPost(title, content, ()=> navigation.navigate('Index'))}  
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 10,
    margin: 5
  
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  }
})

export default EditScreen