import React, { useState } from "react";
import { Grid, Header, Form, Button } from "semantic-ui-react";
import {
    useHistory
} from "react-router-dom";

const Lobby = () => {

    const [sala, setSala] = useState();
    const history = useHistory();

    const entrarNaSala = () => {
        history.push('/room/'+sala);
    }

    return (<>
        <Grid centered columns={2}>
            <Grid.Column style={{
                marginTop: `20%`
            }}>
                <Header as='h2'>Procure uma sala ou crie uma</Header>
                <Form onSubmit={entrarNaSala}>
                    <Form.Field>
                        <input name='room' placeholder='Sala' value={sala} onChange={(e) => setSala(e.target.value)} />
                    </Form.Field>
                    <Header as='h5'>* Caso haja um jogo em andamento você entrara como jogador</Header>
                    <div style={{
                        textAlign: `center`
                    }}>
                        <Button type='submit'>Entrar</Button>
                    </div>
                </Form>
            </Grid.Column>
        </Grid>
    </>)
}

export default Lobby;