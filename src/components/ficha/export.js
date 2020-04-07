import React from 'react'
import { Button } from 'semantic-ui-react'
import { Base64 } from 'js-base64';

const exportarBase64 = (data) => {
    if(!(data instanceof Object)){
        return
    }

    const json = JSON.stringify(data);
    const base64 = Base64.encode(json);

    navigator.clipboard.writeText(base64);
}

const ExportFicha = (data) => {

    return (<>
        <Button onClick={() => exportarBase64(data)}>
            Exportar Ficha
        </Button>
    </>)
}

export default ExportFicha;