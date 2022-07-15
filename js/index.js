const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
// const answerArray = document.querySelectorAll("[card-answers]");
// const answers = [answerArray.querySelectorAll("[data-answers]")];
// console.log(answers);

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

let currentScore = 0;

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
  getCurrentAnswers();
  console.log(getCurrentAnswers()[0]);
  if (getCurrentAnswers()[0] === "here") {
    console.log("HEEERREEE!!!!");
  }
}

multiStepForm.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1;
  }
  console.log("clicked");
  showCurrentStep();
  getCurrentAnswers();
  if (getCurrentAnswers()[0] === "fuck") {
    console.log("HEEERRRREE!!!!");
  }
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

function getCurrentAnswers() {
  const currentAnswers = [
    formSteps[currentStep].querySelectorAll("[data-answer]"),
  ];
  const [answer1, answer2, answer3, answer4] = [
    currentAnswers[0][0].innerText,
    currentAnswers[0][1].innerText,
    currentAnswers[0][1].innerText,
    currentAnswers[0][1].innerText,
  ];

  return [answer1, answer2, answer3, answer4];
}

const answerElements = [...document.querySelectorAll("[data-card-answers]")];
console.log(answerElements);

function handleAnswer() {}
