import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Lista from '../components/Lista'
import Formulario from '../components/Formulario'
import { Button } from '@rneui/themed'
import { Icon } from '@rneui/base'
import { ImovelProvider } from '../context/ImovelContext'
import FormularioLocatorio from '../components/FormularioLocatorio'

const Stack = createNativeStackNavigator()

export default props => {

    return (
        <ImovelProvider>
            <Stack.Navigator initialRouteName='ListarImoveis'>
                <Stack.Screen name='ListarImoveis'
                    component={Lista}
                    options={ ({navigation}) => {
                        return {
                            title: 'Lista de Imoveis',
                            headerRight: () => 
                                <Button
                                type='clear'
                                icon={<Icon name='add'
                                    size={30}
                                    color='black'/>}
                                onPress={() => navigation.
                                    navigate("CadastroImovel")}
                                />
                            }
                        }}>
                </Stack.Screen>

                <Stack.Screen name='CadastroImovel'
                    component={Formulario}
                    options={{title: 'Cadastro de Imovel'}}>
                </Stack.Screen>

                <Stack.Screen name='CadastroLocatorio'
                    component={FormularioLocatorio}
                    options={{title: 'Cadastro de Locatorio'}}>
                </Stack.Screen>
                
            </Stack.Navigator>
        </ImovelProvider>
    )
}