import { caracteristica, coloracao, ocupacao, anomalia  } from "./goblin-props";
import { getRandonProp, random} from "../../randon";
import { rolarDados } from "../../dados";

const atribuiAtributos = (...array) => {
    return {
        combate: array[0],
        conhecimento: array[1],
        habilidade: array[2],
        sorte: array[3]
    }
}

export const atribuiBonusPelaCor = cor => {
    switch(cor){
        case coloracao.AZUL:
            return atribuiAtributos(1,2,1,2);
        case coloracao.VERDE:
            return atribuiAtributos(2,1,1,2);
        case coloracao.VERDE_CLARO:
            return atribuiAtributos(2,2,1,1);
        case coloracao.VERMELHO:
            return atribuiAtributos(1,2,2,1);
        case coloracao.VERDE_ESCURO:
            return atribuiAtributos(2,1,2,1);
        case coloracao.AMARELO:
            return atribuiAtributos(1,1,2,2);
        default:
            return atribuiAtributos(0,0,0,0);
    }
}

export const atribuiBonusPelaOcupacao = (goblin) => {

    if(!goblin.ocupacao || !goblin.ocupacao.atributos){
        return goblin.atributos;
    }

    Object.keys(goblin.ocupacao.atributos).forEach(e => {
        goblin.atributos[e] =  goblin.atributos[e] + goblin.ocupacao.atributos[e]
    });

    return goblin.atributos;
}

export const atribuiEquipamentos = profissao =>{
    switch(profissao){
        case ocupacao.AZUL:
            return atribuiAtributos(1,2,1,2);
        case coloracao.VERDE:
            return atribuiAtributos(2,1,1,2);
        case coloracao.VERDE_CLARO:
            return atribuiAtributos(2,2,1,1);
        case coloracao.VERMELHO:
            return atribuiAtributos(1,2,2,1);
        case coloracao.VERDE_ESCURO:
            return atribuiAtributos(2,1,2,1);
        default:
            return atribuiAtributos(1,1,1,1);
    }
}

export const atribuiAnomalia = () => {
    const diceResult = rolarDados("2d6");

    switch(diceResult){
        case 2:
            return [anomalia.MANCHAS_ROSAS]
        case 3:
            return [anomalia.MANCHAS_ROSAS]
        case 4:
            return [anomalia.ORELHAS_SOVACO]
        case 5:
            return [anomalia.CORCUNDA]
        case 6:
            return [anomalia.BRACO_EXTRA]
        case 7:
            return [{
                ...anomalia.OLHOS,
                quantidade: random(6)
            }]
        case 8:
            return [anomalia.OLHOS_GIGANTES]
        case 9:
            return [anomalia.MAOS_GIGANTES]
        case 10:
            return [anomalia.DUAS_CABECAS]
        case 11:
            return atribuiAnomalia().push().atribuiAnomalia()
        case 12:
            return atribuiAnomalia().push().atribuiAnomalia()
        default:
            return []
    }
}

const primeiraSilaba = [
    "Sp",
    "Cr",
    "Bu",
    "Ut",
    "An",
    "Om"
]

const silabaQualquer = [
    "or",
    "ut",
    "ar",
    "an",
    "ot",
    "ec"
]

export function gerarNomeGoblin(){
    let numeroSilabas = random(8)
    numeroSilabas = numeroSilabas < 2 ? 2 : numeroSilabas;

    let globinName = primeiraSilaba[random(primeiraSilaba.length - 1)];

    for(let i = 1; i < numeroSilabas; i++){
        globinName += silabaQualquer[random(silabaQualquer.length - 1)]
    }
    return globinName;
}

export function createGoblin(options) {
    const goblin = {
        nome: options.nome || gerarNomeGoblin(),
        coloracao: options.coloracao || getRandonProp(coloracao),
        caracteristica: options.caracteristica || getRandonProp(caracteristica),
        ocupacao: options.ocupacao || getRandonProp(ocupacao),
        vitalidadeMax: 4,
        vitalidade: 4,
        protecao: 0,
        dano: 0,
        vozGoblin: false,
    }

    goblin.atributos = atribuiBonusPelaCor(goblin.coloracao);

    goblin.atributos = atribuiBonusPelaOcupacao({
        ocupacao: goblin.ocupacao,
        atributos: goblin.atributos
    });
    // goblin.equipamentos = atribuiEquipamentos(goblin.ocupacao);

    // if(goblin.caracteristica === caracteristica.ANOMALIA){
    //     goblin.caracteristica.anomalias = atribuiAnomalia();
    // }
    return goblin;
}
