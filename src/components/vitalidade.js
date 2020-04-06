import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import EvilLove from '../icons/evil-love.svg'
import { FlexContainer, FlexItem } from './helpers/container';


const Vitalidade = ({ vitalidadeMax }) => {

    console.log(EvilLove)

    return (
        <>
            <Header as='h3'>Vitalidade</Header>
            <FlexContainer
                style={{
                    justifyContent: `space-around`,
                    flexWrap: `wrap`,
                }}
            >

                {_.range(0, vitalidadeMax).map((e) =>
                    <FlexItem
                        style={{
                            flex: `1 1 10%`,
                        }}
                        key={e}>
                        <div style={{
                            padding: `5%`
                        }}>
                            <img style={{
                                maxWidth: `70px`
                            }} src={EvilLove}></img>
                        </div>
                    </FlexItem>
                )}

            </FlexContainer>
        </>
    )
}

Vitalidade.propTypes = {
    vitalidadeMax: PropTypes.number.isRequired,
    vitalidade: PropTypes.number.isRequired,
}

export default Vitalidade;