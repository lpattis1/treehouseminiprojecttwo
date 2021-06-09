/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element

const main = document.querySelector("main");

// ------------------------------

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const questionOne = prompt("What is 6 times 2?");
const questionTwo = prompt("What is 8 times 2?");
const questionThree = prompt("What is 5 times 2?");
const questionFour = prompt("What is 9 times 2?");
const questionFive = prompt("What is 10 times 2?");

const userAnswerOne = Number(questionOne);
const userAnswerTwo = Number(questionTwo);
const userAnswerThree = Number(questionThree);
const userAnswerFour = Number(questionFour);
const userAnswerFive = Number(questionFive);
let correctAnswers = 0;

// ------------------------------

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (userAnswerOne === 12) {
  console.log(userAnswerOne);
  correctAnswers += 1;
}

if (userAnswerTwo === 16) {
  correctAnswers += 1;
}

if (userAnswerThree === 10) {
  correctAnswers += 1;
}

if (userAnswerFour === 18) {
  correctAnswers += 1;
}

if (userAnswerFive === 20) {
  correctAnswers += 1;
}

// -----------------------------

// Determine ranks

if (correctAnswers === 5) {
  rank = "Gold";
} else if (correctAnswers >= 3 && correctAnswers <= 4) {
  rank = "Silver";
} else if (correctAnswers >= 1 && correctAnswers <= 2) {
  rank = "Bronze";
} else {
  rank = "No Crown";
}

// 6. Output results to the <main> element

const h1 = document.createElement("h1");
h1.textContent = `You got ${correctAnswers} out of 5 questions correct.`;

const h2 = document.createElement("h2");
h2.textContent = `Crown earned: ${rank}`;

if (h2.textContent.includes("Gold")) {
  h2.style.color = "gold";
} else if (h2.textContent.includes("Silver")) {
  h2.style.color = "grey";
} else if (h2.textContent.includes("Bronze")) {
  h2.style.color = "#cd7f32";
} else {
  h2.style.color = "white";
}

main.appendChild(h1);
main.appendChild(h2);
