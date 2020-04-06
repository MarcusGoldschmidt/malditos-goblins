import React from 'react';
import { Table, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { TIPO } from '../utils/rpg/itens/equipamento-props'


const Equipamentos = (props) => {

    return (
        <>
            <Header as='h3'>Equipamentos</Header>
            <Table color={props.color || 'red'}>
                {props.equipamentos.map(e =>
                    <Table.Header key={e.nome}>
                        <Table.Row>
                            <Table.HeaderCell style={{ textTransform: `capitalize` }}>{e.nome}</Table.HeaderCell>
                            <Table.HeaderCell>
                                {e.nome}
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                {e.tipo === TIPO.PROTECAO ? `Defesa: ${e.atr}` : `Dano: ${e.atr}`}
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                {e.tipo === TIPO.PROTECAO ? `Defesa: ${e.atr}` : `Dano: ${e.atr}`}
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>)
                }
            </Table>
        </>
    )
}

Equipamentos.propTypes = {
    equipamentos: PropTypes.array.isRequired,
    color: PropTypes.string,
}

export default Equipamentos;