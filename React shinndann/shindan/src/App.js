import React, { useState } from 'react'
import Question from './Question'
import Result from './Result'
import shortid from 'shortid'
import './App.css'

const App = () =>{
    const dates = [
        {
            question : 'ピカチュウは好きですか？',
            select : ['めっちゃ好き','普通に好き','嫌い','ネズミ野郎'],
            id : shortid.generate(),
           
        
        },
        {
            question : 'じゃあフシギダネは好きですか？',
            select : ['だから！ピカチュウが好きなの！','スッスキです','フシギダネって海外ドラマのフラッシュにもワードとして出てきたんだよねー！ねぇこれ知ってた？','不思議だね'],
            id : shortid.generate(),
          
        },
        {
            question : 'ポケモンの中で好きなタイプは？',
            select : ['電気','草','メス','豚'],
            id : shortid.generate(),
           
        },
        {
            question : 'ではピチュウはどうですか？好きでしょう！いいですよね〜ピチュウ！（圧強め）',
            select : ['ピチュウも好き','フシギダネが好き','ピチュウって小さくても大人をビリビリさせるくらいの電気出せるらしんですけど自分も驚いちゃうんですってーーはっはーカワイイー！','隣の回答ボタンウザいし枠取りすぎ'],
            id : shortid.generate(),
           
        },
        
    ]
// const [value,setValue]= useState('')
// const addValue =(value) =>{
//     setValue(value)
// }
// console.log(value)


const [pointA,setPointA] = useState(0)
const [pointB,setPointB] = useState(0)
const [pointC,setPointC] = useState(0)
const [pointD,setPointD] = useState(0)

console.log([pointA,pointB,pointC,pointD])
const [resultText,setResultText] =useState('')
console.log(resultText)
const judgeResult = () =>{
　　　　const AllPoint = [pointA,pointB,pointC,pointD]
        if(pointA===Math.max(...AllPoint)){
            setResultText('ちっ！.......あなたはピカチュウタイプです！人気者でよかったですね！')
        }
        if(pointB===Math.max(...AllPoint)){
            setResultText('あなたはフシギダネタイプです。特に何も言うことはありません')
        }
        if(pointC===Math.max(...AllPoint)){
            setResultText('あなたは残念タイプです。あっ残念ってことです！残念でした')
        }
        if(pointD===Math.max(...AllPoint)){
            setResultText('あなたは氷タイプです。いやむしろ北極タイプです')
        }
//    if(pointB<pointA && pointC<pointA && pointD<pointA){
//         setResultText('あなたはA型です')
//     }else if(pointB===pointA && pointC===pointA && pointD===pointA){
//         setResultText('あなたはAB型です')
//     }else　if(pointA<pointB && pointC<pointB && pointD<pointB){
//         setResultText('あなたはB型です')
//     }else if(pointA<pointC && pointB<pointC && pointD<pointC){
//         setResultText('あなたはC型です')
//     }else if(pointA<pointD && pointB<pointD && pointC<pointD){
//         setResultText('あなたはD型です')
//     }


}


const addPoint = (value) =>{
    dates.map((date)=>{
        if (value===date.select[0]){
          return  setPointA(pointA+1)
        }else if(value===date.select[1]){
           return setPointB(pointB+1)
        }else if(value===date.select[2]){
          return  setPointC(pointC+1)
        }else if(value===date.select[3]){
           return setPointD(pointD+1)
        }
    return date}
    )

    
}
const [question,setQuestion] = useState(0)
const [displayState,setDisplayState] =useState(false) 

const next = () =>{
    setQuestion(question+1)
    if(question+1===dates.length){
       setQuestion(0)
       setDisplayState(!displayState)
       judgeResult()
　　　　
    }
    
}






    return(
        <>
            <h1>楽しいポケモン診断！</h1>
            <Question   addPoint={addPoint} dates = {dates} question={question} next={next}  displayState={displayState}/>
            <h2　className='ResultText'
                    style={
                    {display : displayState ?'block' : 'none'}
                    }
            >
                診断結果は！
            </h2>
            <Result resultText={resultText} />
        </>
    )
}

export default App