import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import { Provider as BlogProvider } from './src/context/BlogContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  })

const App = createAppContainer(navigator)

// So we basically Wrap the app in the Blog Provider so we can 
// the APP is basically based down as a prop called children. 
// Therefore all of App has access to the information in Blog Provider.
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}