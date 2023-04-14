import { ListItem, Icon } from '@rneui/base'
import React, {useContext} from 'react'
import { Button, View } from 'react-native'
import ImovelContext from '../context/ImovelContext'
import locatario from '../data/locatario'

export default props => {

    const {state, dispatch} = useContext(ImovelContext)

    return (
        <View>
            {
                state.imoveis.map(imovel => {
                    return (
                        <ListItem key={imovel.endereco}>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {imovel.endereco}
                                </ListItem.Title>
                                <ListItem.Subtitle>
                                    {imovel.tipo} - {imovel.isLocado == true ? ("Locado por: " + imovel.locatario) : "Não locado"}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <Icon name='edit' onPress={() =>
                                dispatch({
                                    action: 'finalizar',
                                    value: imovel
                                })
                                } />
                            <Icon name='edit' onPress={() => 
                                props.navigation.navigate("CadastroImovel", imovel)}/>
                            <Icon name='delete' onPress={() => 
                               dispatch({
                                action: 'remover',
                                value: imovel
                               })} />
                        </ListItem>
                    )
                })
            }
        </View>
    )
}

                        