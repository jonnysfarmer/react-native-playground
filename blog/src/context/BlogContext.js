import createDataContext from './createDataContext'


const blogReducer = (state, action) => {
  switch (action.type){
    case 'add_blogpost':
      return [...state, { title: `Blog post Number ${state.length + 1}` }]
    default:
      return state
  }

}

// We need to do with this, so each of the functions are called with the dispatch function
// in createDataContext
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' })
  }
} 


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, [])