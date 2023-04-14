import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import ImovelContext from '../context/ImovelContext'
import { addLocatario } from '../database/db'

export default (props) => {
    const { navigation, route } = props;
    const {state, dispatch} = useContext(ImovelContext)
    
    const [imovel, setImovel] = useState(
        props.route != null &&
        props.route.params != null ?
        props.route.params : {}
    )

    if(imovel.id == null) {
        imovel.id = (imoveis.length + 1)
        //console.warn(imovel.id)
    }
        
    const [isLocado, setIsLocado] = useState(
        props.route != null &&
        props.route.params != null ?
        props.route.params.isLocado : false
    )

    const [isUpdate, setIsUpdate] = useState(
        props.route != null &&
        props.route.params != null ?
        true : false
    )

    const salvar = () => {
        let act;
        if (isUpdate) {
          act = 'editar';
        } else {
          act = 'salvar';
        }

        navigation.navigate('CadastroLocatorio');
    
        dispatch({
          action: act,
          value: imovel,
        });
    
        
    };

    const renderizarValorCondominio = () => {
        return (
            <>
            <Text>Valor do Condominio:</Text>
            <TextInput value={imovel.valorCondominio}
            onChangeText={valorCondominio => setImovel({...imovel, valorCondominio})}
            style={style.input}
            />
            </>
        )
    }

    return (
        <View style={style.formulario}>
            <Text>Endereço:</Text>
            <TextInput value={imovel.endereco} 
                onChangeText={endereco => setImovel({...imovel, endereco})} 
                style={style.input} />
            
            <Text>Valor:</Text>
            <TextInput value={imovel.valor}
                onChangeText={valor => setImovel({...imovel, valor})}
                style={style.input}
                keyboardType='numeric'
                />

            <Text>Tipo:</Text>
            <TextInput value={imovel.tipo}
                onChangeText={tipo => setImovel({...imovel, tipo})}
                style={style.input} />

            {
                imovel.tipo === "Apartamento" && renderizarValorCondominio()
            }

            <Text>Está alugado?</Text>
            <Switch value={isLocado}
                onValueChange={() => setIsLocado(!isLocado)}
            />

            <Text>Número de quartos:</Text>
            <TextInput value={imovel.numQuartos}
                onChangeText={numQuartos => setImovel({...imovel, numQuartos})}
                style={style.input} 
                keyboardType='numeric'
            />

            <Text>Número de banheiros:</Text>
            <TextInput value={imovel.numBanheiros}
                onChangeText={numBanheiros => setImovel({...imovel, numBanheiros})}
                style={style.input} 
                keyboardType='numeric'
            />

            <Text>URL da Foto:</Text>
            <TextInput value={imovel.imageUrl}
                onChangeText={imageUrl => setImovel({...imovel, imageUrl})}
                style={style.input}
            />

            <Button title='Salvar' onPress={salvar} />
        </View>
    )
}

const style = StyleSheet.create({
    formulario: {
        padding: 30
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray'
    },
    labelApresentar: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})





