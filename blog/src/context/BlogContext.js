import React from 'react'

// This is our default export as this is how we get the data
const BlogContext = React.createContext()


// This is what wraps the app.  the App in App.js is the {children} which is a prop
export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={5}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext