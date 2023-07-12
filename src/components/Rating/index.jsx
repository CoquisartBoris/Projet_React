import './rating.scss'

function Rating({ratingValue}) {
    ratingValue = parseInt(ratingValue)
    return (
        <div className='ratingWrapper'>
            <div className="starRating">
                {[...Array(ratingValue)].map(() => {    
                return (
                    <span className="starRed">&#9733;</span>
                );
            })}
            </div>
            <div className="starRating">
                {[...Array(5 - ratingValue)].map(() => {    
                return (
                    <span className="starGrey">&#9733;</span>
                );
            })}
            </div>
        </div>
    )
}

export default Rating