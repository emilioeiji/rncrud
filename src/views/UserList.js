import React, { useContext } from 'react'
import { View, Text, FlatList, Image, Alert } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Button, Icon } from '@rneui/themed'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário ' + user.name + ' ?' , [
            {
                text: 'sim',
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear'
                    icon={<Icon name='edit' size={20} color='#1F7BF4' />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name='delete' size={20} color='#f4511e' />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm', user)}
            >
                <View style={{ marginRight: 10 }}>
                    <Image
                    source={{ uri: user.avatarUrl }}
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text>{user.name}</Text>
                    <Text>{user.email}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    {getActions(user)}
                </View>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}