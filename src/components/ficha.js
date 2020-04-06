import React from 'react';
import IconFormInput from './icon-form-input'

import { Form, Input, Grid, Header, Button } from 'semantic-ui-react'

import GoblinHead from '../icons/goblin-head.svg';
import Mustache from '../icons/mustache.svg';
import Blacksmith from '../icons/blacksmith.svg';
import MedalSkull from '../icons/medal-skull.svg';
import { ocupacao, carcteristica, coloracao } from '../utils/rpg/goblin/goblin-props';
import { mapObject } from '../utils/object';
import Atributos from './atributos';

const optionsCarcteristica = mapObject(carcteristica, (value) => {
    return {
        key: value.number,
        text: value.name,
        value: value.number,
    }
});

const optionsOcupacao = mapObject(ocupacao, (value) => {
    return {
        key: value.number,
        text: value.name,
        value: value.number,
    }
});

const optionsColoracao = mapObject(coloracao, (value) => {
    return {
        key: value.number,
        text: value.name,
        value: value.number,
    }
});

class Ficha extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            aparencia: "",
            ocupacao: "",
            nivel: 1,
            atributos: {
                combate: 1,
                conhecimento: 1,
                habilidade: 1,
                sorte: 1,
            },
            dano: 0,
            protecao: 0,
            vitalidadeMax: 4,
            vitalidade: 4,
            equipamentos: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAtributos = this.handleChangeAtributos.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeAtributos(e) {
        this.setState({
            atributos: {
                ...this.state.atributos,
                [e.name]: e.value
            }
        });
    }

    salvarPersonagem() {
        return;
    }

    render() {
        return (
            <>
                <div style={{
                    paddingLeft: `2%`,
                    paddingRight: `2%`,
                }}>
                    {/* NOME */}
                    <IconFormInput image={GoblinHead} alt={"Goblin Head"}>
                        <Form.Field
                            id='name'
                            name='name'
                            control={Input}
                            label='Seu nome das trevas'
                            placeholder='Sou do mal!!!'
                            onChange={this.handleChange}
                            style={{
                                width: `100%`
                            }}
                        />
                    </IconFormInput>

                    {/* APARENCIA */}
                    <IconFormInput image={Mustache} alt={"Goblin Head"}>
                        <>
                            <Grid>
                                <Grid.Row style={{
                                    alignItems: `flex-end`,
                                    justifyContent: `space-between`
                                }}>
                                    <Grid.Column width={7}>
                                        <Form.Select
                                            fluid
                                            id='aparencia'
                                            name='aparencia'
                                            label='Aparência'
                                            options={optionsCarcteristica}
                                            placeholder='Feio'
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={1}
                                        style={{ paddingBottom: `10px` }}
                                    >E</Grid.Column>
                                    <Grid.Column width={7} >
                                        <Form.Select
                                            fluid
                                            id='coloracao'
                                            name='coloracao'
                                            label=''
                                            options={optionsColoracao}
                                            placeholder='Rosa'
                                            style={{
                                                width: `100%`
                                            }}
                                        />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </>
                    </IconFormInput>

                    {/* OCUPACAO */}
                    <Grid>
                        <Grid.Row style={{
                            alignItems: `center`,
                            justifyContent: `space-between`,
                        }}>
                            <Grid.Column width={8}>
                                <IconFormInput imgSize={4} image={Blacksmith} alt={"Goblin Head"}>
                                    <Form.Select
                                        fluid
                                        id='ocupacao'
                                        name='ocupacao'
                                        label='Ocupação'
                                        options={optionsOcupacao}
                                        placeholder='Aspone'
                                    />
                                </IconFormInput >
                            </Grid.Column>
                            <Grid.Column width={8} >
                                <IconFormInput imgSize={4} image={MedalSkull} alt={"Goblin Head"}>
                                    <>
                                        <div style={{
                                            display: `flex`,
                                            justifyContent: `space-around`
                                        }}>
                                            <Button style={{
                                                flex: `1`
                                            }} onClick={() => this.setState({
                                                nivel: this.state.nivel > 1 ? this.state.nivel - 1 : 1
                                            })}>
                                                <Header as='h1'>-</Header>
                                            </Button>
                                            <Header style={{
                                                flex: `1`,
                                                textAlign: `center`
                                            }} as='h2'>{this.state.nivel}</Header>
                                            <Button style={{
                                                flex: `1`,
                                                padding: `0`
                                            }} onClick={() => this.setState({
                                                nivel: this.state.nivel + 1
                                            })}>
                                                <Header as='h1'>+</Header>
                                            </Button>
                                        </div>
                                    </>
                                </IconFormInput >
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <Atributos atributos={this.state.atributos} changeAtributos={this.handleChangeAtributos}></Atributos>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div >
            </>
        );
    }
}

export default Ficha;
