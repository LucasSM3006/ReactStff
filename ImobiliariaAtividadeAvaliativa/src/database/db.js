import { enablePromise, openDatabase } from 'react-native-sqlite-storage'

enablePromise(true)

export async function getConnection() {
    return await openDatabase({name: 'pessoadb', location: 'default'})
}

export async function createTables() {
    const db = await getConnection()
    const sql = `
        CREATE TABLE IF NOT EXISTS imovel (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            endereco VARCHAR(150) NOT NULL,
            tipo VARCHAR(20) NOT NULL,
            valor VARCHAR(10) NOT NULL,
            valorcondominio VARCHAR(10),
            numquartos VARCHAR(10),
            numbanheiros VARCHAR(10),
            imageurl VARCHAR(150),
            islocado BOOLEAN,
            locatario INTEGER
        )

        CREATE TABLE IF NOT EXISTS locatario (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            imovelid INTEGER NOT NULL,
            nome VARCHAR(150) NOT NULL,
            cpf VARCHAR(14) NOT NULL,
            datanasc DATETIME,
            renda FLOAT,
            vencimentoaluguel DATETIME,
            datainiciocontrato DATETIME,
            dataterminocontrato DATETIME
        )
    `
    await db.executeSql(sql)
        .then((response) => console.warn(response))
        .catch((erro) => console.warn(erro))
    await db.close()
}

export async function addLocatario(locatario) {
    const db = await getConnection()
    const sql = `
        INSERT INTO locatario (
        imovelid, nome, cpf, datanasc, renda, vencimentoaluguel, datainiciocontrato, dataterminocontrato)
        VALUES (${locatario.idImovel}, "${locatario.nome}", "${locatario.cpf}", ${locatario.dataNasc},
        ${locatario.renda}, ${locatario.vencimentoAluguel} ${locatario.dataInicioContrato},
        ${locatario.dataTerminoContrato})
    `

    await db.executeSql(sql)
        .then((response) => console.warn("Inserido: " + JSON.stringify(response)))
        .catch((erro) => console.warn('Erro: ' + JSON.stringify(erro)))
    await db.close()
}

export async function addImovel(imovel) {
    const db = await getConnection()
    const sql = `
    INSERT INTO 
    `
}

export async function updateImovel(locatario) {
    const db = await getConnection()
    const sql = `UPDATE imovel SET islocado = 1 WHERE id = ${locatario.idImovel};`
    const imovel = null;

    await db.executeSql(sql).then((response) => {
        imovel = response;
    })
}

export async function listarPessoas() {
    const db = await getConnection()
    const sql = `
        SELECT id, nome, cpf, idade, responsavel, pussuicnh FROM pessoa
    `
    const listaRetorno = []
    await db.executeSql(sql)
        .then((response) => {
            const uniqueResponse = response[0]
            const rows = uniqueResponse.rows
            for (let i = 0; i < rows.length; i++) {
                const item = rows.item(i)
                const itemPessoa = {
                    id: item.id,
                    nome: item.nome,
                    cpf: item.cpf,
                    idade: item.idade,
                    responsavelLegal: item.responsavel,
                    isPossuiCnh: item.possuicnh
                }
                listaRetorno.push(itemPessoa)
            }
            db.close()
        })
    return listaRetorno
}

