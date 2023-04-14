import { NavigationContainer } from '@react-navigation/native'
import React, {useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import Formulario from './src/components/Formulario'
import { createTables, listarPessoas } from './src/database/db'
import StackNavigation from './src/navigation/StackNavigation'

export default (props) => {
    
    async function init() {
        await createTables()
    }

    useEffect(() => {
        init()
    }, [])

    return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer style={{flex: 1}}>
            <StackNavigation>

            </StackNavigation>
        </NavigationContainer>
    </SafeAreaView>
    )
}