import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { Button, Icon } from '@rneui/themed'
// import { Icon } from '@rneui/base'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='UserList'
                screenOptions={screenOptions}
            >
                <Stack.Screen 
                    name='UserList'
                    component={UserList}
                    options={({ navigation }) => {
                        return {
                            title: 'Lista de Usuários',
                            headerRight: () => (
                                <Button 
                                    type='clear'
                                    onPress={() => navigation.navigate('UserForm')}
                                >
                                    <Icon name='add' size={25} color='white' />
                                </Button>
                                
                            )
                        }
                    }}
                />
                <Stack.Screen 
                    name='UserForm'
                    component={UserForm}
                    options={{
                        title: 'Formulário de Usuários'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}