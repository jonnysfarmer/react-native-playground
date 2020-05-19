import React, { useState } from 'react'

// This is our default export as this is how we get the data
const BlogContext = React.createContext()


// This is what wraps the app.  the App in App.js is the {children} which is a prop
export const BlogProvider = ({ children }) => {

  const [blogPosts, setBlogPosts] = useState([])

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post ${blogPosts.length + 1}` } ])
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext