// import React, { useState } from 'react'
import './../styles/Inputs.css'



// InputDefault.props {
//     type: String,

// }

const InputDefault = ({type, name, id, placeHolder, req}) => {

    return (
        <div className='inputContain'>
            <label htmlFor={name}>{placeHolder}</label>
            <input className='input' type={type} name={name} id={id} required={req ? true : undefined} />
        </div>
    );
};

const InputPassword = ({name, id, placeHolder}) => {

    return (
        <div className='inputContain'>
            <label htmlFor={name}>{placeHolder}</label>
            <input className='input' type='password' name={name} id={id} required/>

        </div>
    );
};

export { InputDefault, InputPassword }