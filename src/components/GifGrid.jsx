import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    // console.log({images, isLoading});
        
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // // console.log(images);
    // //Hooks para disparar efectos segundarios
    // //Evita que se vuelva a renderizar
    // useEffect(() => {
    //     getImages();

    //     //Otra manera de otener las magenes
    //     // getGifs(category)
    //     // .then( newImages => setImages(newImages) );
    // }, [ ])
    
    return (
        <>
            <h3>{category}</h3>
            {/* Muestra un mensage de carga cundo isloading es true */}
            {
                isLoading && (<h2>Cargando....</h2>)
            }
            
            <div className="card-grid">{
                images.map( (image) => (
                    <GifItem 
                        key={image.id}
                        //Mejor manera de enviar la props
                        {...image} 
                    />
                ))
            }</div>


        </>
    )
}
