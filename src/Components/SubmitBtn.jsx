import React from 'react';

function SubmitBtn(props) { 
    return (
        <div>
            <button onClick={props.click}> Create Greeting </button>
        </div>
    )
}
export default SubmitBtn;