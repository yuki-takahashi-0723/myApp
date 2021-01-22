const quiz = [
    {
        quwstion : '問題1 アムロレイの最大のライバルといえば？',
        select : ['シャリア・ブル','シャア・アズナブル','ジョニー・ライデン','アスラン・ザラ'],
        answer : 'シャア・アズナブル'
    },
    {
        quwstion : '問題2　「ガンダム〇〇よ！」といえば？〇〇に入る言葉はなんでしょう？',
        select : ['死ぬ','やばい','強い','売る'],
        answer : '売る'
    },
    {
        quwstion : '問題3　「俺が〇〇だ！」といえば？〇〇に入る言葉はなんでしょう？',
        select : ['最後の戦士','最強','ガンダム','アムロレイ'],
        answer : 'ガンダム'
    },
    {
        quwstion : '問題4　ガンダムmarkⅡに対してGディフェンサーを装着することでmarkⅡから名前が変わります、なんという名前でしょう？',
        select : ['ガンダムmarkⅢ','GDガンダム','クスィーガンダム','スーパーガンダム'],
        answer : 'スーパーガンダム'
    },
    {
        quwstion : '問題５　以下のうちシャアがその生涯の内名乗った名前ではない物は？',
        select : ['キャスバル・レム・ダイクン','シュウ・アカギ','エドワウ・マス','クワトロバジーナ'],
        answer : 'シュウ・アカギ'
    }
]

const $getStart = document.getElementById('start') //スタートボタンを取得する
const $getReStart = document.getElementById('reStart')　//リスタートボタンを取得する

const $getquiz = document.querySelectorAll('.quiz') //クラスquizを取得する


const $getResult = document.getElementById('result')// ID result を取得する
let quizCount = 0　　　　　//現在難問目が出題されているかを表す変数

//問題のセットアップ    //テキストをHtmlに反映させる


 const $setQuiz = ()=>{ 
                        // console.log(quizCount)
                        document.getElementById('problem').textContent = quiz[quizCount].quwstion
                        
                        for (let j = 0 ; j<quiz[quizCount].select.length; j++)
                        {
                        $getquiz[j].textContent = quiz[quizCount].select[j] 
                    }
                    // console.log(quizCount)
}

const $next = () =>{
    quizCount++
    console.log('aaaaaaaaaa')
    if(quizCount <  quiz.length){
        $setQuiz()
       
      }else{
        
         document.getElementById('endColl').textContent = 'これでクイズは終了です！'
         for(let k =0; k<quiz[k].select.length;k++){
            $getquiz[k].style.display ='none';
            $getReStart.style.display = 'block'
         }      
        }
       
    
}


    const $setSelect = (elm) =>{
                if ( elm.textContent === quiz[quizCount].answer){
                    console.log('正解')
                    $getResult.textContent = '正解' 
                }else{
                    $getResult.textContent = '不正解' 
                }
                
            
            $next()             
            }
             
                  
const $displayLoop = (tmp) =>{
    for(let a =0; a<quiz[a].select.length;a++)
    {
    $getquiz[a].style.display = tmp
    }
}



const $AllSet = () =>{
        for( let i = 0; i < quiz[quizCount].select.length;i++ ){
            
            $getquiz[i].addEventListener('click',(e) =>
            {
                $setSelect(e.target)
            })
        }
}




$getReStart.style.display ='none'
$displayLoop('none')
$getStart.addEventListener('click', ()=>{
    $getStart.style.display = 'none'
    $displayLoop('block')
    $setQuiz()
})

$AllSet()


$getReStart.addEventListener('click',()=>{
    $getStart.style.display = 'block'
    quizCount = 0
    })




  
    



     
    


   





