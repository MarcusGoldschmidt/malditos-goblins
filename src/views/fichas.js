import React from "react";
import { Table, Button } from "semantic-ui-react";
import { PaddingDiv } from "../components/helpers/container";
import Ficha from "../components/ficha";
import storage from "../utils/session-storage";
import { Link } from "react-router-dom";

const LOCAL_STORAGE_KEY = "FICHAS";

class Fichas extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fichas: storage.getObject(LOCAL_STORAGE_KEY) || [],
            criandoFicha: false,
            editandoFicha: false,
            fichaAux: {},
        };

        this.adicionarFicha = this.adicionarFicha.bind(this);
        this.excluirFicha = this.excluirFicha.bind(this);
        this.editarFicha = this.editarFicha.bind(this);
    }

    adicionarFicha(ficha) {
        let fichas = this.state.fichas;

        fichas.push(ficha);

        storage.setItem(LOCAL_STORAGE_KEY, fichas);

        this.setState({
            criandoFicha: false,
            fichas
        });
    }

    editarFicha(ficha) {
        let fichas = this.state.fichas;

        const index = fichas.findIndex(e => {
            return e === this.state.fichaAux;
        });

        fichas[index] = ficha;

        this.setState({
            editandoFicha: false,
            fichas,
            fichaAux: {}
        });
    }

    excluirFicha(ficha) {
        let fichas = this.state.fichas;

        fichas = fichas.filter(e => e !== ficha);

        sessionStorage.setItem(LOCAL_STORAGE_KEY, fichas);

        this.setState({
            fichas
        });
    }

    render() {
        if (this.state.criandoFicha) {
            return <Ficha salvarFicha={this.adicionarFicha}/>
        }

        if (this.state.editandoFicha) {
            return <Ficha salvarFicha={this.editarFicha} ficha={this.state.fichaAux}/>
        }

        return (<>
            <PaddingDiv>
                <Button onClick={() => this.setState({ criandoFicha: true })} color='black'>Criar novo</Button>
                <Link to='/'><Button color='black'>Voltar</Button></Link>
                <Table color='red'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>Aparência</Table.HeaderCell>
                            <Table.HeaderCell>Ocupação</Table.HeaderCell>
                            <Table.HeaderCell/>
                            <Table.HeaderCell/>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.fichas.map((ficha) => (<>
                            <Table.Row key={ficha.nome}>
                                <Table.Cell>{ficha.nome}</Table.Cell>
                                <Table.Cell>{ficha.caracteristica.name} e {ficha.coloracao.name}</Table.Cell>
                                <Table.Cell>{ficha.ocupacao.name}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => this.setState({ editandoFicha: true, fichaAux: ficha })} color='yellow'>Editar</Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => this.excluirFicha(ficha)} color='red'>Excluir</Button>
                                </Table.Cell>
                            </Table.Row>
                        </>))}
                    </Table.Body>
                </Table>
            </PaddingDiv>
        </>)
    }
}

export default Fichas
