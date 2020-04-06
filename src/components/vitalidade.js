import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import { FlexContainer, FlexItem } from './helpers/container';
import Heart from './icons/heart';


const Vitalidade = ({ vitalidadeMax, vitalidade }) => {

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
                            <div style={{
                                maxWidth: `70px`
                            }}>
                                <Heart color={vitalidade <= e ? '#fff' : 'red'}></Heart>
                            </div>
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