import React from 'react';
import { Table } from 'semantic-ui-react';


export const Atributos = (props) => {
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

    const AtributeHandler = (data) => <>
        <div style={{
            display: `flex`,
            justifyContent: `space-around`
        }}>
            <Ball onClick={() => {
                props.changeAtributos({

                })
            }}>-</Ball>
            {data.value}
            <Ball>+</Ball>
        </div>
    </>

    return (
        <>
            <Table color='red'>

                {todosAtributos.map(e =>
                    <Table.Header  key={e.key}>
                        <Table.Row>
                        <Table.HeaderCell>{e.key}</Table.HeaderCell>
                            <Table.HeaderCell>
                                <AtributeHandler value={e.value} />
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>)
                }


            </Table>
        </>
    )
}