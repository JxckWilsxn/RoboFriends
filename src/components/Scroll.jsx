import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', padding: '5px'}}>
            {props.children}
        </div>
    )
}

export default Scroll