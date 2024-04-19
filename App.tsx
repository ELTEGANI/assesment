import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RemindersLists from './src/screens/RemindersLists';
import AddReminder from './src/screens/AddReminder';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import "./global.css"

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
 <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={"RemindersList"}>
      <Stack.Screen name="RemindersList" component={RemindersLists} />
      <Stack.Screen name="AddReminder" component={AddReminder} />
    </Stack.Navigator>
  </NavigationContainer>
    </QueryClientProvider>
   
  )
}

export default App


