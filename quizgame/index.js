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

const $getStart = document.getElementById('start')
const $getReStart = document.getElementById('reStart')

const $getquiz = document.querySelectorAll('.quiz') //クラスquizを取得する

const $getResult = document.getElementById('result')// ID result を取得する
let quizCount = 0

//問題のセットアップ    //テキストをHtmlに反映させる


 const $setQuiz = ()=>{ 
                        console.log(quizCount)
                        document.getElementById('problem').textContent = quiz[quizCount].quwstion
                        
                        
                        for (let j = 0 ; j<quiz[quizCount].select.length; j++)
                        {
                        $getquiz[j].textContent = quiz[quizCount].select[j] 
                    }
                    // console.log(quizCount)
}



    const $setSelect = () =>{
        for (let i = 0 ; i < quiz[quizCount].select.length; i++){
            
            $getquiz[i].addEventListener('click', ()=>{
               
                if(quiz[quizCount].select[i]===quiz[quizCount].answer){
                    // console.log('正解')
                    $getResult.textContent = '正解' 
                }else{
                    $getResult.textContent = '不正解' 
                } 
                quizCount++
             
                // console.log(quizCount)
               
                if(quizCount <  quiz.length){
                    $setQuiz()
                  }else{
                    document.getElementById('endColl').style.display = 'block'
                     document.getElementById('endColl').textContent = 'これでクイズは終了です！'
                     for(let k =0; k<quiz[k].select.length;k++){
                        $getquiz[k].style.display ='none';
                        $getReStart.style.display = 'block'
                     }      
                    }
                  }
              )
          }
      }

const $displayLoop = (tmp) =>{
    for(let a =0; a<quiz[a].select.length;a++)
    {
    $getquiz[a].style.display = tmp
    }
}


$getReStart.style.display ='none'
$displayLoop('none')
$getStart.addEventListener('click',() =>
    {
        $getResult.style.display = 'block'
        $getResult.textContent ='正解と不正解はここに出ます'
        document.getElementById('problem').style.display ='block'
        quizCount = 0
        $setQuiz()
        $getStart.style.display = 'none'
        $displayLoop('block')
        
    })


$setSelect()

$getReStart.addEventListener('click',()=>{
    $getReStart.style.display= 'none'
    $getResult.style.display = 'none'
    $getStart.style.display = 'block'
    document.getElementById('problem').style.display =('none')
    document.getElementById('endColl').style.display = 'none'
    
    })




  
    



     
    


   





