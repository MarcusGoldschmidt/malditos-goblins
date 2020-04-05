export const TIPO = {
    PROTECAO: 0,
    DISTANCIA: 1,
    CORPO_A_CORPO: 2,
}

export const EQUIPAMENTOS = {
    ADAGA: {
        nome: `Adaga`,
        atr: 2,
        tipo: TIPO.CORPO_A_CORPO,
    },
    ARCO_SIMPLES: {
        nome: `Arco Simples`,
        atr: 2,
        tipo: TIPO.DISTANCIA
    },
    ARCO_COMPOSTO: {
        nome: `Arco Composto`,
        atr: 3,
        tipo: TIPO.DISTANCIA
    },
    BESTA: {
        nome: `Besta`,
        atr: 3,
        tipo: TIPO.DISTANCIA
    },
    ESCUDO: {
        nome: `Escudo`,
        atr: 1,
        tipo: TIPO.PROTECAO
    },
    ELMO: {
        nome: `Elmo`,
        atr: 1,
        tipo: TIPO.PROTECAO
    },
    ESPADA: {
        nome: `Espada`,
        atr: 3,
        tipo: TIPO.CORPO_A_CORPO
    },
    MACHADO: {
        nome: `Machado`,
        atr: 4,
        tipo: TIPO.CORPO_A_CORPO
    },
    MACHADINHA: {
        nome: `Machadinha`,
        atr: 3,
        tipo: TIPO.CORPO_A_CORPO
    },
    ESPADONA: {
        nome: `Espadona`,
        atr: 5,
        tipo: TIPO.CORPO_A_CORPO
    },
    ARMADURA: {
        nome: `Armadura`,
        atr: 1,
        tipo: TIPO.PROTECAO
    },
    PISTOLA: {
        nome: `Pistola`,
        atr: 4,
        tipo: TIPO.DISTANCIA
    },
    GALINHA_EXPLOSIVA: {
        nome: `Galinhas Explosivas`,
        atr: 4,
        tipo: TIPO.DISTANCIA
    },
    BARRIL_POLVORA: {
        nome: `Barril de Pólvora`,
        atr: 5,
        tipo: TIPO.DISTANCIA
    },
    CANHAO: {
        nome: `Barril de Pólvora`,
        atr: 8,
        tipo: TIPO.DISTANCIA
    },
}