import React from 'react';
import PropTypes from 'prop-types'

export const FlexContainer = (props) => {

    return (
        <>
            <div style={{
                display: `flex`,
                ...props.style,
            }}>
                {props.children}
            </div>
        </>
    )
}

export const FlexItem = (props) => {

    return (
        <>
            <div style={{
                flex: props.flex || 1,
                ...props.style,
            }}>
                {props.children}
            </div>
        </>
    )
}

FlexItem.propTypes = {
    style: PropTypes.any,
    flex: PropTypes.number,
    children: PropTypes.node,
}

FlexContainer.propTypes = {
    style: PropTypes.any,
    flex: PropTypes.number,
    children: PropTypes.node,
}