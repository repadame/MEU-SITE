const quizData = [
    {
        question: "pergunta 1",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "d",
    },
    {
        question:"pergunta 2",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "d",
    },
    {
        question:"pergunta 3",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "d",
    },
    {
        question:"pergunta 4",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "d",
    },
    {
        question:"pergunta 5",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "b",
    },
    {
        question: "pergunta 6",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "a",
    },
    {
        question: "pergunta 7",
        a: "resposta",
        b: "resposta",
        c: "resposta",
        d: "resposta",
        e: "resposta",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0


loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerHTML = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você acertou ${score}/${quizData.length} corretamente</h2>

           <button  id="submit" onclick="location.reload()">Reiniciar</button>
           `
       }
    }
})
