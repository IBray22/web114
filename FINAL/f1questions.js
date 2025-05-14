// BRAYDEN BALLEW FINAL PROJECT (THEME F1) (5/14/25)
// web 114
// JS PAGE
document.addEventListener('DOMContentLoaded',()=> {
const f1Qns = [
{
    question: "Which Driver Won the 2021 Drivers Championship?",
    choices: ["Lewis Hamilton", "Max Verstappen", "Sergio Perez", "Lance Stroll"],
    correctAnswer: 1
},
{
    question: "What is the new 11th Formula 1 team joining in 2026?",
    choices: ["Mercedes", "Audi", "Cadillac", "Porsche"],
    correctAnswer: 2
},
{
    question: "Who is the Oldest Driver on the current grid?",
    choices: ["Max Verstappen", "Lewis Hamilton", "Carlos Sainz", "Fernando Alonso"],
    correctAnswer: 3
},
{
    question: "Who has the best stats out of these 4 Red Bull Drivers?",
    choices: ["Max Verstappen", "Sebastian Vettel", "Yuki Tsunoda", "Alex Albon"],
    correctAnswer: 0
},
{
    question: "Worst Team of the 2024 Season?",
    choices: ["Williams", "Ferrari", "Red Bull", "Sauber"],
    correctAnswer: 3
}
];
let f1Idx = 0;
const f1Q = document.getElementById('question');
const f1Ch = document.getElementById('choices');
const f1Res = document.getElementById('result');
const f1Cur = document.getElementById('current');
const f1Tot = document.getElementById('total');
const f1Next = document.getElementById('next-btn');
const f1Box = document.querySelector('.quiz-placement');
f1Tot.textContent = f1Qns.length;
showF1(f1Idx);

function showF1(i) {
const q = f1Qns[i];
f1Q.textContent = q.question;
f1Ch.innerHTML = '';
q.choices.forEach((c, idx)=> {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.textContent = c;
  btn.classList.add('choice-btn');
  btn.addEventListener('click', ()=> pickF1(idx));
  li.appendChild(btn);
  f1Ch.appendChild(li);
});
f1Res.textContent = '';
f1Cur.textContent = i + 1;
}

function pickF1(n) {
const correct = f1Qns[f1Idx].correctAnswer;
f1Res.textContent = n === correct
  ?'CORRECT!'
  :`WRONG! Correct Anwser Is: “${f1Qns[f1Idx].choices[correct]}.”`;
}

f1Next.addEventListener('click', () => {
f1Idx++;
if (f1Idx < f1Qns.length) {
  showF1(f1Idx);
} else {
  f1Box.innerHTML = `
  <h2>Quiz Complete!</h2>
  <p>Thanks For Playing! - Bray</p>
  `;
  }
 });
});