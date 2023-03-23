import React, {useEffect, useState} from 'react'
import ImageGallery from 'react-image-gallery'

//компонент показа изображения товара
function ProductImage(props) {

    //изображения товара
    const [Images, setImages] = useState([]);

    useEffect(() => {
        if ( props.detail.images && props.detail.images.length > 0 ) {
            let images = [];
            //cкачиваем изображения товара из props.detail.images
            props.detail.images && props.detail.images.forEach(item => {
                images.push({
                    original: `https://online-shopping-clone-server.herokuapp.com/${item}`,
                    thumbnail: `https://online-shopping-clone-server.herokuapp.com/${item}`
                })
            })
            //фиксируем изображения товара
            setImages(images)
        }
    },[props.detail])

    return (
        //изображаем изображения товара
        <div>
            <ImageGallery items={Images}/>
        </div>
    )
}

export default ProductImage;