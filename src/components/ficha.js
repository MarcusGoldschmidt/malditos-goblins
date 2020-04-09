import React from 'react';
import IconFormInput from './icon-form-input'

import { Form, Input, Grid, Header, Select, Button, TextArea } from 'semantic-ui-react'

import GoblinHead from '../icons/goblin-head.svg';
import Mustache from '../icons/mustache.svg';
import Blacksmith from '../icons/blacksmith.svg';
import MedalSkull from '../icons/medal-skull.svg';
import { ocupacao, carcteristica, coloracao } from '../utils/rpg/goblin/goblin-props';
import { mapObject } from '../utils/object';
import Atributos from './atributos';
import Equipamentos from './equipamentos';
import Vitalidade from './vitalidade';
import AtributosCalculados from './atributos-calculados';
import { Ball } from './helpers/inputs';
import { atribuiBonusPelaOcupacao, atribuiBonusPelaCor, gerarNomeGoblin, createGoblin } from '../utils/rpg/goblin/create-goblin';
import ImportFicha from './ficha/import';
import ExportFicha from './ficha/export';
import PropTypes from 'prop-types';

const optionsCarcteristica = mapObject(carcteristica, (value, key) => {
    return {
        key: value.number,
        text: value.name,
        value: key,
    }
});

const optionsOcupacao = mapObject(ocupacao, (value, key) => {
    return {
        key: value.number,
        text: value.name,
        value: key,
    }
});

const optionsColoracao = mapObject(coloracao, (value, key) => {
    return {
        key: value.number,
        text: value.name,
        value: key,
    }
});

class Ficha extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            coloracao: null,
            carcteristica: null,
            ocupacao: null,
            nivel: 1,
            atributos: {
                combate: 0,
                conhecimento: 0,
                habilidade: 0,
                sorte: 0,
            },
            dano: 0,
            protecao: 0,
            vitalidadeMax: 4,
            vitalidade: 4,
            equipamentos: [],
            manaMax: 8,
            mana: 8,
            descricao: '',
        };

        this.state = props.ficha || this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAtributos = this.handleChangeAtributos.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.atribuiAtributos = this.atribuiAtributos.bind(this);
        this.importarFichar = this.importarFichar.bind(this);
    }

    importarFichar(e) {
        this.setState({...e.data});
    }

    salvarFicha(){

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    atribuiAtributos(cor, job) {
        let atributos = atribuiBonusPelaCor(cor);

        atributos = atribuiBonusPelaOcupacao({
            ocupacao: job,
            atributos,
        });

        this.setState({
            atributos
        });
    }

    handleChangeSelect(e, data) {
        let prop;

        switch (data.name) {
            case 'ocupacao':
                prop = ocupacao;
                this.atribuiAtributos(this.state.coloracao, prop[data.value]);
                break
            case 'coloracao':
                prop = coloracao;
                this.atribuiAtributos(prop[data.value], this.state.ocupacao);
                break
            case 'carcteristica':
                prop = carcteristica;
                break
            default:
                return;
        }
        this.setState({
            [data.name]: prop[data.value]
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

    render() {
        return (
            <>
                <div style={{
                    paddingLeft: `2%`,
                    paddingRight: `2%`,
                }}>
                    {/* NOME */}
                    <Grid>
                        <Grid.Row style={{
                            alignItems: `flex-end`,
                            justifyContent: `space-between`
                        }}>
                            <Grid.Column width={14}>
                                <IconFormInput image={GoblinHead} alt={"Goblin Head"}>
                                    <Form.Field
                                        id='nome'
                                        name='nome'
                                        control={Input}
                                        label='Seu nome das trevas'
                                        placeholder='Sou do mal!!!'
                                        onChange={this.handleChange}
                                        value={this.state.nome}
                                        style={{
                                            width: `100%`
                                        }}
                                    />
                                </IconFormInput>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Button onClick={() => this.setState({ nome: gerarNomeGoblin() })}>
                                    Gerar Nome
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

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
                                            selection
                                            id='carcteristica'
                                            name='carcteristica'
                                            label='Aparência'
                                            control={Select}
                                            options={optionsCarcteristica}
                                            onChange={this.handleChangeSelect}
                                            value={
                                                optionsCarcteristica[this.state.carcteristica && this.state.carcteristica.number || 0].value
                                            }
                                            placeholder='Feio'
                                        />
                                    </Grid.Column>
                                    <Grid.Column width={1}
                                        style={{ paddingBottom: `10px` }}
                                    >E</Grid.Column>
                                    <Grid.Column width={7}>
                                        <Form.Select
                                            fluid
                                            id='coloracao'
                                            name='coloracao'
                                            label='Coloração'
                                            control={Select}
                                            options={optionsColoracao}
                                            onChange={this.handleChangeSelect}
                                            placeholder='Rosa'
                                            value={optionsColoracao[this.state.coloracao && this.state.coloracao.number || 0].value}
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
                                <IconFormInput imgSize={2} image={Blacksmith} alt={"Goblin Head"}>
                                    <Form.Select
                                        fluid
                                        id='ocupacao'
                                        name='ocupacao'
                                        label='Ocupação'
                                        onChange={this.handleChangeSelect}
                                        options={optionsOcupacao}
                                        value={optionsOcupacao[this.state.ocupacao && this.state.ocupacao.number || 0].value}
                                        placeholder='Aspone'
                                    />
                                </IconFormInput >
                            </Grid.Column>
                            <Grid.Column width={7} >
                                <IconFormInput imgSize={4} image={MedalSkull} alt={"Goblin Head"}>
                                    <>
                                        <div style={{
                                            display: `flex`,
                                            justifyContent: `space-around`
                                        }}>
                                            <Ball onClick={() => this.setState({
                                                nivel: this.state.nivel > 1 ? this.state.nivel - 1 : 1
                                            })}>
                                                <Header as='h1'>-</Header>
                                            </Ball>
                                            <Header style={{ margin: 0 }} as='h2'>{this.state.nivel}</Header>
                                            <Ball onClick={() => this.setState({
                                                nivel: this.state.nivel + 1
                                            })}>
                                                <Header as='h3'>+</Header>
                                            </Ball>
                                        </div>
                                    </>
                                </IconFormInput >
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Atributos atributos={this.state.atributos} changeAtributos={this.handleChangeAtributos}></Atributos>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Equipamentos equipamentos={this.state.equipamentos} ></Equipamentos>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Vitalidade
                                    vitalidade={this.state.vitalidade}
                                    vitalidadeMax={this.state.vitalidadeMax}
                                    job={this.state.ocupacao}
                                    mana={this.state.mana}
                                    manaMax={this.state.manaMax}
                                ></Vitalidade>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <AtributosCalculados armas={[]} protecao={[]} ></AtributosCalculados>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Header as='h3'>Descrição</Header>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Form>
                                    <TextArea rows={9} name='descricao' value={this.state.descricao} onChange={this.handleChange} placeholder='Seu passado de vilão' />
                                </Form>
                            </Grid.Column>
                            <Grid.Column width={8} style={{
                                justifyContent: `space-around`
                            }}>
                                <ExportFicha data={this.state}></ExportFicha>
                                <ImportFicha handler={this.importarFichar}></ImportFicha>
                                <Button onClick={() => this.setState({
                                    ...createGoblin({})
                                })}>
                                    Gerar ficha aleatória
                                </Button>
                                <Button onClick={() => this.props.salvarFicha(this.state)}>
                                    Salvar
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

Ficha.propTypes = {
    ficha: PropTypes.object,
    salvarFicha: PropTypes.func.isRequired,
}

export default Ficha;
