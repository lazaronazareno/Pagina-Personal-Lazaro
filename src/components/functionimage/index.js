import React from 'react';
import images from '../componentesSection/images/index';

class ImageFuncion extends React.Component{
    render(){
        return(
            <div>
                {
                    images.map((images) => {
                        return <div>
                            <img src={images.url} alt=""/>
                            <h1>{images.title}</h1>
                            <h2>{images.about}</h2>
                        </div>
                    })
                }

            </div>
        
        );
    }
}
export default ImageFuncion;