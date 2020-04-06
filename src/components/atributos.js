import React from 'react';
import { Table, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Ball } from './helpers/inputs'


const Atributos = (props) => {
    const todosAtributos = Object.keys(props.atributos).map((key) => {
        return {
            value: props.atributos[key],
            key: key,
        }
    });

    const AtributeHandler = ({ name, value }) => <>
        <div style={{
            display: `flex`,
            justifyContent: `space-around`
        }}>
            <Ball onClick={() => {
                if (value <= 1) { return }
                props.changeAtributos({
                    name: name,
                    value: value - 1
                })
            }}>-</Ball>
            {value}
            <Ball onClick={() => {
                props.changeAtributos({
                    name: name,
                    value: value + 1
                })
            }}>+</Ball>
        </div>
    </>
    AtributeHandler.propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    }

    return (
        <>
            <Header as='h3'>Atributos</Header>
            <Table color='red'>
                {todosAtributos.map(e =>
                    <Table.Header key={e.key}>
                        <Table.Row>
                            <Table.HeaderCell style={{ textTransform: `capitalize` }}>{e.key}</Table.HeaderCell>
                            <Table.HeaderCell>
                                <AtributeHandler name={e.key} value={e.value} />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>)
                }
            </Table>
        </>
    )
}

Atributos.propTypes = {
    atributos: PropTypes.any.isRequired,
    changeAtributos: PropTypes.func.isRequired,
}

export default Atributos;