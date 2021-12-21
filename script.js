window.addEventListener('load', () => {
  const categoryDropdown = document.getElementById('category-dropdown');
  categoryDropdown.addEventListener('change', () => {
    handleCategoryChange();    
  });

  const difficultyDropdown = document.getElementById('difficulty-dropdown');
  difficultyDropdown.addEventListener('change', () => {
    handleDifficultyChange(this.value);
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
    correctAnswer: 'False',
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
  const difficulty = document.getElementById('difficulty-dropdown').value;
  quizConfig.difficulty = difficulty;
}


// Questions

async function fetchQuestions() {
  const { amount, category, difficulty, type, encoding } = quizConfig;
  const uri = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}&encoding=${encoding}`;
  
  const response = await fetch(uri);
  const data = await response.json();

  return data.results.map(result => ({
    question: result.question,
    correctAnswer: result.correct_answer,
  }));
}

function displayQuestions() {
  // TODO: render all the 'questions' in 'questions-container'

}



async function startQuiz() {
  // TODO: save them to 'questions' and display the questions

  let isQuizConfigValid = true;
  if (quizConfig.category === undefined) {
    const categoryDropdownErrorMessage = document.querySelector('#category-dropdown-error');
    categoryDropdownErrorMessage.style.display = 'block';
    isQuizConfigValid = false;
  }

  if (quizConfig.difficulty === undefined) {
    const difficultyDropdownErrorMessage = document.querySelector('#difficulty-dropdown-error');
    difficultyDropdownErrorMessage.style.display = 'block';
    isQuizConfigValid = false;
  }

  if (!isQuizConfigValid) {
    
    // we do not want to execute the rest of the function
    // until the unser set up the quiz config properly
    return;
  }

  const results = await fetchQuestions();

  console.log('The following questions have been fetched: ', results);
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
