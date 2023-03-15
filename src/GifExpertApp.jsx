import {useState} from 'react';
import { AddCategory, GifGrid } from './components';


//rafc: Para generar componentes de manera rapida.

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Valorant']);

    const onAddCategory = (newCategory) => {

        // Evita que se repita el mismo valor en el arreglo
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {/* Listado de items Gif */}
            
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }    
                
                {/* Gif Item */}
        </>
    )
}

