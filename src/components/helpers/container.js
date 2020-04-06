import React from 'react';

export const container = (props) => {

    return (
        <>
            <div style={{
                display: `flex`,
                ...props.style,
            }}>
                props.children
            </div>
        </>
    )
}

export const flex = (props) => {

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