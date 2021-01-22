import React from 'react'

const Answer = ({content}) =>{
    
    return(
        <>
            <p>前回のクイズ結果が下に表示されます</p>
            <h2>{content}</h2>
        </>
    )
}

export default Answer