import './collapseList.scss'
import Collapse from "../Collapse"

function CollapseList ({ data }){
    return (
        <div className='wrapper'>
            <div className='accordion'>
                {data.map((item, i) => (
                    <Collapse question={item.question} answers={[item.answer]}/>
                ))}
            </div>
        </div>
    )
}

export default CollapseList;