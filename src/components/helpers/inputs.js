import React from 'react';
import PropTypes from 'prop-types';

export const Ball = (data) => <>
    <button style={{
        borderRadius: `25%`,
        backgroundColor: `#e0e1e2`
    }}
        onClick={data.onClick}
    >
        {data.children}
    </button>
</>

Ball.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
}