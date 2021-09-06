import { useState } from 'react';


export const useForm = (initialState) => {
    const [ inputsData, setInputsData ] = useState(initialState)

    const handleInputChange = (e) => {
        setInputsData({
            ...inputsData,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setInputsData(initialState)
    }

    return{
        inputsData,
        handleInputChange,
        setInputsData,
        resetForm
    };
}


