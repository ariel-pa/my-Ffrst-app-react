import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    //Verificar bien: creo que evita la renderixzacion de nuevo
    const [isLoading, setLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    };

    useEffect(() => {
        getImages();        
    }, [ ]);

  return {
    images,
    isLoading
  }
}
