import React from 'react'

const Select = ({quizs,judge}) => {

    const handleButton = (e) =>{
            judge(e.target.innerHTML)
            
          
        
    }
    return(
            
        quizs.map(
            (quiz,index) => <button 
                                key={index}
                                onClick={handleButton}           
                            >
                                    {quiz}
                            </button> 
        ) 
                    
    )
} 

export default Select