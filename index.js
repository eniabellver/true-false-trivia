window.addEventListener('load', () => {
  const categoryDropdown = document.getElementById('category-dropdown');
  categoryDropdown.addEventListener('change', () => {
    handleCategoryChange();    
  });

  const difficultyDropdown = document.getElementById('difficulty-dropdown');
  difficultyDropdown.addEventListener('change', () => {
    handleDifficultyChange();
  });

  const startQuizButton = document.getElementById('start-quiz-button');
  startQuizButton.addEventListener('click', () => {
    startQuiz();
  });

  const submitAnswersButton = document.getElementById('submit-answers-button');
  submitAnswersButton.addEventListener('click', () => {
    submitAnswers();
  });
});


// Application data

let quizConfig = {
  amount: 3,
  category: undefined,
  difficulty: undefined,
  type: 'boolean',
  encoding: 'default',
};

let questions = [
  {
    question: 'Leonardo DiCaprio won an Oscar for Best Actor in 2004&#039;s &quot;The Aviator&quot;.',
    correctAnswer: 'False',
  },
  {
    question: 'Matt Damon played an astronaut stranded on an extraterrestrial planet in both of the movies Interstellar and The Martian.',
    correctAnswer: 'True',
  },
  {
    question: 'The 2010 film &quot;The Social Network&quot; is a biographical drama film about MySpace founder Tom Anderson.',
    correctAnswer: 'False',
  },
];

function handleCategoryChange() {
  const category = document.getElementById('category-dropdown').value;
  quizConfig.category = category;
}

function handleDifficultyChange() {
  // TODO: save the 'difficulty-dropdown' value to quizConfig

  console.log('Difficulty changed');
}


// Questions

async function fetchQuestions() {
  // TODO: Build up URI and return the list of questions at the end of the function
  
  const uri = `https://opentdb.com/api.php`;
  const response = await fetch(uri);
}

function displayQuestions() {
  // TODO: render all the 'questions' in 'questions-container'

}

function startQuiz() {
  // TODO: fetch questions, save them to 'questions' and display the questions

  console.log('Start quiz button was pressed');
}


// Results

function calcResults() {
  // TODO: Calculate and return the results (every correct answer is 10 point)

}

function displayResults(result) {
  // TODO: Display the calculated result in 'results-container'

}

function submitAnswers() {
  // TODO: Calculate results from 'questions' and display them

  console.log('Submit answers button was pressed');
}
