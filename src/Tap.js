import React from 'react'


function Tap ({label , clickFunction}) {
    return <button className='style' onClick={() => clickFunction(label)}>
                {label} 
            </button>
}
export default Tap;

