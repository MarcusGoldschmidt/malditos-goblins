import React from 'react';
import { Table, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const FichaResumida = (atributos, nome, caracteristica, coloracao, ocupacao, dano = 0, protecao = 0) => {

    return (
        <>
            <Header as='h3'>Atributos</Header>
            <Header as='h5'>Nome: {nome}</Header>
            <Header as='h5'>Aparência: {caracteristica.name} & {coloracao.name}</Header>
            <Header as='h5'>Ocupação: {ocupacao.name}</Header>
            <Header as='h5'>Dano: {dano}</Header>
            <Header as='h5'>Proteção: {protecao}</Header>
            <Table color='red'>
                {atributos.map(e =>
                    <Table.Header key={e.key}>
                        <Table.Row>
                            <Table.HeaderCell style={{ textTransform: `capitalize` }}>{e.key}</Table.HeaderCell>
                            <Table.HeaderCell>
                                {e.value}
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>)
                }
            </Table>
        </>
    )
}

FichaResumida.propTypes = {
    nome: PropTypes.string.isRequired,
    atributos: PropTypes.object.isRequired,
    ocupacao: PropTypes.object.isRequired,
    coloracao: PropTypes.object.isRequired,
    caracteristica: PropTypes.object.isRequired,
    protecao: PropTypes.number,
    dano: PropTypes.number,
}

export default FichaResumida;
