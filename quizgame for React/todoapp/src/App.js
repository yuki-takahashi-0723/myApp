import React, { useState } from 'react'
import Answer from './Answer'
import Select from './select'


const App = () =>{
    const [quizCount,setQuizCount]=useState(0)
    const [userAnswer,setUserAnswer]=useState('')
    
    const quizs =[
        {
            Problem:'第１問　この内私が持っていない電子ガジェットは？',
            Select : [
                'ipad pro',
                'mac book pro',
                'surface pro6',
                'surface go2'
            ],
            Correct: 'surface go2'
        },
        {
            Problem:'第２問　答えはBです！ほんとです',
            Select : ['A','B','C','D'],
            Correct: 'B'
        },
        {
            Problem:'第３問　答えはCです！ほんとです',
            Select : ['A','B','C','D'],
            Correct: 'C'
        },
        {
            Problem:'第４問　答えはDです！ほんとです',
            Select : ['A','B','C','D'],
            Correct: 'D'
        },
        {
            Problem:'第５問　答えはAです！ほんとです',
            Select : ['A','B','C','D'],
            Correct: 'B'
        },
    ]
       //答え判別する処理（何を押されたかを受け取る）
       //コンポーネント化は使い回すのかどうかで判別する。

    const judge = (judgeCorrect) =>{
        
        if(quizs[quizCount].Correct!==judgeCorrect){
           setUserAnswer(`第${quizCount+1}問の結果は不正解です`)
           console.log(quizCount)
           
        }else{
            setUserAnswer(`第${quizCount+1}問の結果は正解です`)
           
        }
        setQuizCount(quizCount+1)
        if(quizCount === quizs.length-1){
            alert('クイズは終了です')
            setQuizCount(0)
        }
    }









    return(
        <>
            <h1>クイズゲーム</h1>
            <h2>{quizs[quizCount].Problem}</h2>
            <Select  quizs = {quizs[quizCount].Select}  judge = {judge}/>
            <Answer　content = {userAnswer} />
        
        </>


    )
}

export default App