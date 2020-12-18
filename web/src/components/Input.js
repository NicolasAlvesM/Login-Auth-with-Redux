import React from 'react'
const Input = React.forwardRef(({label,name,...rest},ref)=>{
    return (
        <div>
            <label className="visually-hidden" htmlFor={name}>{label}</label>
            <input placeholder={label} ref={ref} {...rest }id={name} className="form-control mb-1" required/>
        </div>
    )
})
export default Input