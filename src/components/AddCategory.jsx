import { useState } from "react";

export const AddCategory = ({onNewCategory}) => 
{
    const [inputValue, setInputValue] = useState('');

    //Optine el valor del input 
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //Evita el refres del navegador: ocacionado por el form
        event.preventDefault();

        //La condicion evita que se inserte espacios
        if(inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.trim());
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={inputValue}
                //formas de capturar el event
                // onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )
}
