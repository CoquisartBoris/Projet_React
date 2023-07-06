import './rating.scss'

const rating = (props) => {
    console.log("note :"+props.data)
    let note = parseInt(props.data)
    let finalNote = 5 - note;
    console.log("final note : " + finalNote)
    return (
        <div className='ratingWrapper'>
            <div className="starRating">
                {[...Array(note)].map((star) => {    
                return (
                    <span className="starRed">&#9733;</span>
                );
            })}
            </div>
            <div className="starRating">
                {[...Array(finalNote)].map((star) => {    
                return (
                    <span className="starGrey">&#9733;</span>
                );
            })}
            </div>
        </div>
    )
}

export default rating