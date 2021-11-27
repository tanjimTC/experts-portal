import { useState, useEffect } from "react";


const TextInputPrimary = ({onChange, name, value, options = [], label = 'Select One', placeholder, type='text' }) => {
    const [v, setV] = useState('')

    useEffect(() => {
        if(value){
            setV(value)
            onChange && onChange({target: {value, name}})
        }

    }, [])

    const handleChange = e => {
        setV(e.target.value)
        onChange && onChange(e)
    }

    return (
        <div className={'grid grid-cols-4'}>
            <div className="col-span-1 flex items-center">
                <p className={'text-base font-sans-pro text-gray-700 font-medium md:pl-3'}>{label}</p>
            </div>
            <div className="col-span-3 flex items center">
                <input type={type}
                       className="rounded w-full p-2 border border-gray-200 focus:outline-none font-sans-pro bg-white text-gray-600 text-base"
                       name={name} value={v} onChange={handleChange}
                       placeholder={placeholder}
                />

            </div>
        </div>
    )
}

export default TextInputPrimary
