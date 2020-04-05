import React from 'react';

import GoblinHead from '../icons/goblin-head.svg';
import Mustache from '../icons/mustache.svg';
import Blacksmith from '../icons/blacksmith.svg';
import Stars from '../icons/stars-stack.svg';
import '../assets/ficha.css'
import { ocupacao } from '../utils/rpg/goblin/goblin-props'

const ocupacaoLista = Object.keys(ocupacao).map(
    e => <MenuItem
    value={ocupacao[e].number.toString()}
    key={ocupacao[e].number.toString()}
>{ocupacao[e].nome}</MenuItem>)

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
            ...this.state,
            atributos: {
                [e.target.name]: e.target.value
            }
        });
    }

    salvarPersonagem() {
        return;
    }

    render() {
        return (
            <>
                <div>
                    {/* NOME */}
                    <img className="ficha-form--icon" src={GoblinHead} alt="Goblin Head" />
                </div>
            </>
        );
    }
}

export default Ficha;
