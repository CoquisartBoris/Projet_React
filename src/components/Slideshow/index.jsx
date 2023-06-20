import './slideshow.scss'
import { useState } from "react"

const Slideshow = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.images.length -1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === props.images.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }

    return(
        <div className='slideshowWrapper'> 
            <p onClick={goToPrevious}>prev</p>
            <img className='imageWrapper' src={props.images[currentIndex]}></img>
            <p onClick={goToNext}>next</p>
        </div>
    )
};

export default Slideshow