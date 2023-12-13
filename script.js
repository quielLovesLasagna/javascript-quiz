"use strict";

// Element/s
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const scoreTxt = document.querySelector(".score");
const tryAgainBtn = document.querySelector(".try-again");
const questions = document.querySelectorAll(".question");

// Quiz Answers
const correctAnswers = ["B", "A", "B", "C", "A"];

// Function/s
function updateScore(answer, correctAnswer) {
	return answer === correctAnswer ? 1 : 0;
}

function updateBackgroundColor(answer, index) {
	const question = questions[index];
	question.classList.remove("correct", "wrong");

	if (answer === correctAnswers[index]) {
		question.classList.add("correct");
	} else {
		question.classList.add("wrong");
	}
}

function checkAnswers(answers) {
	// Set initial score to 0
	let score = 0;

	// Check each answer if it matches correct answer
	answers.forEach((answer, index) => {
		score += updateScore(answer, correctAnswers[index]);
		updateBackgroundColor(answer, index);
	});

	// Remove hide class from result to see result
	result.classList.remove("hide");

	// Update score on UI
	scoreTxt.textContent = `You scored ${score}/5!`;

	// Scroll to top to see result
	scrollTo(0, 0);
}

function reload() {
	// Reload whole page
	location.reload();
}

// Event Listsner/s
form.addEventListener("submit", (event) => {
	// Prevent default form behavior
	event.preventDefault();

	// Get user answers
	const userAnswers = [
		form.q1.value,
		form.q2.value,
		form.q3.value,
		form.q4.value,
		form.q5.value,
	];

	// Check user answers
	checkAnswers(userAnswers);
});

tryAgainBtn.addEventListener("click", reload);
