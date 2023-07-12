import './slideshow.scss'
import { useState } from "react"

const Slideshow = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }

    return(
        <div className='slideshowWrapper'> 
            <p className='prevArrow' onClick={goToPrevious}>&#8249;</p>
            <img className='imageWrapper' src={images[currentIndex]}></img>
            <p className='nextArrow' onClick={goToNext}>&#8250;</p>
        </div>
    )
};

export default Slideshow