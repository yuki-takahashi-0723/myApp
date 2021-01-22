import React from 'react'

const Question = ({dates,addPoint,question,next,displayState}) =>{
    // const [display,setDisplay]=useState(false)
    console.log(question,dates.length)
    const handleClick =(e)=>{
        e.preventDefault()
        addPoint(e.target.innerHTML)
        next()
        console.log(dates[0].display)
        


    }
    return(
        <>
            <h2 style={
                {display : displayState ? 'none' :'block'}
            }
            >{dates[question].question}
            </h2>
            <form>
                {
                    dates[question].select.map((date,index)=>
                        <button style ={
                            {display : displayState ? 'none' : 'inlin'}
                        }
                                onClick ={handleClick}
                                key={index} 
                        >
                            {date} 
                        </button> 
                    )
                }

                <button　style={
                    {display : displayState ? 'block' : 'none'}
                }>もう一回やる</button>
                
                
            </form>
        </>
    )
}

export default Question