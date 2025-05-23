import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid gray', margin: '0px 100px 100px 100px', padding: '5px', height: '100%', borderRadius: '25px'}}>
            {props.children}
        </div>
    )
}

export default Scroll