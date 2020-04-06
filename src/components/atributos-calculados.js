import React from 'react';
import { Table, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const AtributosCalculados = (props) => {

    return (
        <>
            <Header as='h3'>Status</Header>
            <Table color={props.color || 'red'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{ textTransform: `capitalize` }}>Dano</Table.HeaderCell>
                        <Table.HeaderCell>
                            {props.armas.reduce((a, b) => a.atr + b.atr, 0)}
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell style={{ textTransform: `capitalize` }}>Proteção</Table.HeaderCell>
                        <Table.HeaderCell>
                            {props.protecao.reduce((a, b) => a.atr + b.atr, 0)}
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>
        </>
    )
}

AtributosCalculados.propTypes = {
    armas: PropTypes.array.isRequired,
    protecao: PropTypes.array.isRequired,
    color: PropTypes.string
}

export default AtributosCalculados;