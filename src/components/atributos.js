import React from 'react';
import {Table} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Atributos = (props) => {
    const todosAtributos = Object.keys(props.atributos).map((key) => {
        return {
            value: props.atributos[key],
            key: key,
        }
    });

    const Ball = (data) => <>
        <button style={{
            borderRadius: `25%`,
            backgroundColor: `#e0e1e2`
        }}
            onClick={data.onClick}
        >
            {data.children}
        </button>
    </>

    const AtributeHandler = ({name, value}) => <>
        <div style={{
            display: `flex`,
            justifyContent: `space-around`
        }}>
            <Ball onClick={() => {
                if (value <= 1){return}
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
        value:  PropTypes.number.isRequired,
    }

    return (
        <>
            <Table color='red'>
                {todosAtributos.map(e =>
                    <Table.Header key={e.key}>
                        <Table.Row>
                            <Table.HeaderCell>{e.key}</Table.HeaderCell>
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