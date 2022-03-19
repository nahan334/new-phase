const quiz = [
  {
    question: '仙台と金沢と名古屋のうち一番東京から近いのは？',
    correct: '名古屋'
  }, {
    question: '日本で一番多い苗字を漢字で答えなさい',
    correct: '佐藤'
  }, {
    question: '今、何問目？（漢数字のみ入力）',
    correct: '三'
  }
];


//各種定数、変数の定義
const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $ans = document.getElementById('unko')

const $buttons = $doc.getElementById("js-items");

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

//ボタンに選択肢を表示する
const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

//次の問題に遷移する仕組み
const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

//プレイヤーの正誤判定、得点の追加
const judge = (elm) => {
  if($ans.value === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

//スコア表示
const showEnd = () => {
  $question.textContent = 'お疲れ様でした！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();





$buttons.addEventListener('click', (e) => {
    judge();
    console.log($ans.value);
  });
