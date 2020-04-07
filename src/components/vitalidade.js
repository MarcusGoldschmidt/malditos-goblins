import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import _ from 'lodash'
import { FlexContainer, FlexItem } from './helpers/container';
import Heart from './icons/heart';
import Mana from './icons/mana';
import { ocupacao } from '../utils/rpg/goblin/goblin-props'

const ManaProp = ({ job, manaMax, mana }) => {
    if (job !== ocupacao.XAMA) {
        return <></>
    }

    return (<>
        <Header as='h3'>Pontos de magia</Header>
        <FlexContainer
            style={{
                justifyContent: `space-around`,
                flexWrap: `wrap`,
            }}
        >

            {_.range(0, manaMax).map((e) =>
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
                            <Mana color={mana <= e ? '#fff' : '#7526fd'}></Mana>
                        </div>
                    </div>
                </FlexItem>
            )}

        </FlexContainer>
    </>)
}

const Vitalidade = ({ vitalidadeMax, vitalidade, job, mana, manaMax }) => {

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
            <ManaProp job={job} manaMax={manaMax} mana={mana}></ManaProp>
        </>
    )
}

Vitalidade.propTypes = {
    vitalidadeMax: PropTypes.number.isRequired,
    vitalidade: PropTypes.number.isRequired,
    job: PropTypes.any.isRequired,
    manaMax: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired,
}

ManaProp.propTypes = {
    job: PropTypes.any.isRequired,
    manaMax: PropTypes.number.isRequired,
    mana: PropTypes.number.isRequired,
}

export default Vitalidade;