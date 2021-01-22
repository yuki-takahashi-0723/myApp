import React from 'react'



const Form = () =>{
    const [text, setText] = React.useState('')
    const answer = () =>{
    const userPoint = Math.floor(Math.random()*100)
   　console.log(userPoint)
        if(userPoint<=10){
            setText ('大吉')
        }else if(userPoint<=30){
            console.log('中吉')
            setText ('中吉')
        }else if(userPoint<=60){
            setText('吉')
        }else if(userPoint<=80){
            setText ('小吉')
        }else if(userPoint<=90){
            setText ('末吉')
        }else{
            setText ('凶')
        }
    }
    
    return(
        <>
        <button　onClick = {answer}>
            おみくじを引こう！
            </button>
            {text && (
                <h2>今日の運勢は {text}</h2>
            )}
    
           
        </>
    )
}
export default Form

