import React from "react";
import Jogador from "../components/jogador";
import Mestre from "../components/mestre";
import { useParams } from "react-router-dom";
import { Header } from "semantic-ui-react";



const Room = () => {
    let { roomId } = useParams();

    const validaSeHaPartidaEmAndamento = () => {
       
        return true
    }

    return (<>
        <Header as='h3'>Sala {roomId}</Header>
        {validaSeHaPartidaEmAndamento() ? <Jogador></Jogador> :  <Mestre></Mestre>}
    </>)
    
}

export default Room;