import React from 'react'
import { Button, Modal, Form, TextArea } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import { Base64 } from 'js-base64';


const base64ToJson = (data) => {
    let stringJson;
    try {
        stringJson = Base64.decode(data);
    } catch (e) {
        console.log(e);
        return null
    }
    console.log(data);
    console.log(stringJson);
    return JSON.parse(stringJson);
}

class ImportFicha extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ``,
            error: false,
        }

        this.importaFicha = this.importaFicha.bind(this);
    }

    importaFicha(){
        const strignJson = base64ToJson(this.state.input);

        strignJson ? this.props.handler(strignJson) : this.setState({error:true});
    }

    render() {
        return (<>
            <Modal trigger={<Button>Importar Ficha</Button>}>
                <Modal.Header style={{
                    textAlign: `center`
                }}>Importar Ficha</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Form>
                            <TextArea rows={9} value={this.state.input} onChange={e => this.setState({ input: e.target.value })} name='dadosFicha' placeholder='Dados da ficha aqui' />
                        </Form>
                        <br></br>
                        <div style={{
                            textAlign: `right`
                        }}>
                            <Button onClick={this.importaFicha}>
                                Importar
                        </Button>
                        </div>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </>)
    }
}

ImportFicha.propTypes = {
    handler: PropTypes.func,
}

export default ImportFicha;