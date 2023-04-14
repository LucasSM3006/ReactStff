import React, { useState, useContext } from 'react'
import { Button, StyleSheet, TextInput, Text, View } from 'react-native'
import LocatorioContext from "../context/LocatorioContext"


export default () => {
    
    const {state, dispatch} = useContext(LocatorioContext)

    const [locatario, setLocatario] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        rendaMensal: '',
        diaVencimentoAluguel: '',
        dataInicioContrato: '',
        dataTerminoContrato: ''
    })

    const salvar = () => {
        // Save the locatario data
    }

    return (
        <View style={styles.formulario}>
            <Text>Nome do locatário(a):</Text>
            <TextInput value={locatario.nome}
                onChangeText={nome => setLocatario({ ...locatario, nome })}
                style={styles.input} />

            <Text>CPF:</Text>
            <TextInput value={locatario.cpf}
                onChangeText={cpf => setLocatario({ ...locatario, cpf })}
                style={styles.input} />

            <Text>Data de Nascimento:</Text>
            <TextInput value={locatario.dataNascimento}
                onChangeText={dataNascimento => setLocatario({ ...locatario, dataNascimento })}
                style={styles.input} />

            <Text>Renda Mensal:</Text>
            <TextInput value={locatario.rendaMensal}
                onChangeText={rendaMensal => setLocatario({ ...locatario, rendaMensal })}
                style={styles.input}
                keyboardType='numeric' />

            <Text>Dia para vencimento do aluguel:</Text>
            <TextInput value={locatario.diaVencimentoAluguel}
                onChangeText={diaVencimentoAluguel => setLocatario({ ...locatario, diaVencimentoAluguel })}
                style={styles.input}
                keyboardType='numeric' />

            <Text>Data do início do contrato:</Text>
            <TextInput value={locatario.dataInicioContrato}
                onChangeText={dataInicioContrato => setLocatario({ ...locatario, dataInicioContrato })}
                style={styles.input} />

            <Text>Data do término do contrato:</Text>
            <TextInput value={locatario.dataTerminoContrato}
                onChangeText={dataTerminoContrato => setLocatario({ ...locatario, dataTerminoContrato })}
                style={styles.input} />

            <Button title='Salvar' onPress={salvar} />
        </View>
    )
}

const styles = StyleSheet.create({
    formulario: {
        padding: 30
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray'
    }
})