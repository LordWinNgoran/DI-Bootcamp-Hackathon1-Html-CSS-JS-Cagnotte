(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    let RandomObject = [
        {
            id:1,
            question:'How long is a marathon?',
            answers: {
                a: "42.195 kilometres",
                b: "4 kilometres",
                c: "12.9 kilometres",
                d:"22.5 kilometres"
              },
              correctAnswer: "a",
            category:'Sport',
           
    
        },
        {
            id:2,
            question:'How many players are there on a baseball team?',
            answers: {
                a: "11 players",
                b: "9 players",
                c: "14 players",
                d:"8 players"
              },
              correctAnswer: "b",
            category:'Sport',
            
    
        },
        {
            id:3,
            question:'Which country won the World Cup 2018?',
            answers: {
                a: "Argentina",
                b: "Italy",
                c: "United State",
                d:"France"
              },
            correctAnswer: "d",
            category:'Sport',
    
        },
        {
            id:4,
            question:'What sport is considered the “king of sports”?',
            answers: {
                a: "BaseBall",
                b: "Basket Ball",
                c: "Soccer",
                d:"Tennis"
              },
            correctAnswer: "c",
            category:'Sport',
    
        },
        {
          id:5,
          question:'What team won the first NBA game in 1946?',
          answers: {
              a: "The New York Knicks",
              b: "The Brooklyn Nets",
              c: "The Chicago Bulls",
              d:"Tennis"
            },
          correctAnswer: "a",
          category:'Sport',
      },
      {
          id:6,
          question:'In which sport would you have a touchdown?',
          answers: {
              a: "BaseBall",
              b: "tennis",
              c: "Football",
              d:"American football"
            },
          correctAnswer: "d",
          category:'Sport',
  
      },
      {
          id:7,
          question:'How many gold medals has Usain Bolt won?',
          answers: {
              a: 4,
              b: 7,
              c: 8,
              d:5,
            },
          correctAnswer: "c",
          category:'Sport',
  
      },
      {
          id:8,
          question:'Which female tennis player has won the highest number of Grand Slams?',
          answers: {
              a: 'Martina Navratilova(32)',
              b:'Chris Evert(25)',
              c:'Margaret Court (24)',
            },
          correctAnswer: "c",
         
          category:'Sport',
      },
      {
          id:9,
          question:'Which footballer has scored the most goals in World Cup history?',
          answers: {
              a: 'Miroslav Klose',
              b:'Ronaldo Nazario',
              c:'Gerd Müller',
              d:'Lionel Messi',
            },
          correctAnswer: "a",
          category:'Sport',
      },
  
  
      {
          id:10,
          question:'Who were the joint top scorers in the 2021/22 Premier League season?',
          answers: {
              a: 'Harry Kane and Sadio Mane (with 24 goals)',
              b:'Ronaldo (with 24 goals)',
              c:'Wilfrid Zaha and Gilberto Martinez (with 23 goals)',
              d:'Mohamed Salah and H Son (with 23 goals)',
            },
          correctAnswer: "d",
          category:'Sport',
  
      },
      {
        id:11,
        question:'Where is the next Summer Olympic Games set to take place?',
        answers: {
            a:'Londre',
            b:'Abidjan',
            c:'Paris',
            d:'Milan',
          },
        correctAnswer: "c",
        category:'Sport',
    },
    {
        id:12,
        question:'Who has won more grand slam tennis titles?',
        answers: {
            a:'Roger Federer',
            b:'Serena Williams',
          },
        correctAnswer: "a",
        category:'Sport',
    },


    {
        id:13,
        question:'What is the capital of Finland?',
        answers: {
            a:'Yerevan',
            b:'Helsinki',
            c:'Vienna',
            d:'Minsk',
          },
        correctAnswer: "b",
        category:'General knowledge',

    }, {
      id:14,
      question:'Which five colours make up the Olympic rings?',
      answers: {
          a:'Black, brown, blue and red',
          b:'Green, Black, blue, yellow and red',
          c:'Black, white, blue, yellow and red',
          d:'Black, green, blue, yellow and red',
        },
      correctAnswer: "d",
      category:'General knowledge',

  },
  {
      id:15,
      question:'What\'s the biggest animal in the world?',

      answers: {
          a:'Whale Shark',
          b:'Elephant',
          c:'The blue whale',
          d:'Whale',
        },
        correctAnswer: "c",
      category:'General knowledge',
  },
  {
      id:16,
      question:'Which planet is closest to the sun?',
      answers: {
          a:'Mercury',
          b:'Jupiter',
          c:'Venus',
          d:'Mars',
        },
      correctAnswer: "a",
      category:'General knowledge',

  },
  {
      id:17,
      question:'What is the largest country in the world',
      answers: {
        a:'Albania',
        b:'Russia',
        c:'Australia',
        d:'Togo',
      },
      correctAnswer: "b",
      category:'General knowledge'
    },
    {
      id:18,
      question:'How many valves does the heart have?',
      answers: {
          a:'Five heart valves',
          b:'Six heart valves',
          c:'Four heart valves',
        },
      correctAnswer: "c",
      category:'General knowledge',
  },
  {
      id:19,
      question:'What is the capital of Portugal?',
      answers: {
          a:'Lisbon',
          b:'Buenos Aires',
          c:'Vienna',
          d:'Canberra',
        },
      correctAnswer: "a",
      category:'General knowledge',
  },
    
  {
    id:20,
    question:'The end of the First World War?',
    answers: {
        a:'1928',
        b:'1938',
        c:'1918',
        d:'1921',
      },
    correctAnswer: "c",
    category:'General knowledge',
},
{
    id:21,
    question:'Martin Luther launches the Reformation?',
    answers: {
        a:'1519',
        b:'1517',
        c:'1525',
        d:'1535',
      },
    correctAnswer: "b",
    category:'General knowledge',
},
{
    id:22,
    question:'Where in the world is Leonardo da Vinci’s Mona Lisa exhibited?',
    answers: {
        a:'The Louvre, Lyon, France',
        b:'The Louvre, Paris, France',
        c:'The Louvre, île De France, France',
      },
    correctAnswer: "b",
    category:'General knowledge',

},
{
    id:23,
    question:'What nationality was sculptor Alberto Giacometti?',
    answers: {
        a:'Swiss',
        b:'Jamaican',
        c:'Colombian',
        d:'Moldovan',
      },
    correctAnswer: "a",
    category:'General knowledge',
},
{
  id:24,
  question:'What colour is the Mangosteen?',
  answers: {
      a:'purplish red',
      b:'purplish blue',
      c:'purplish yellow',
      d:'purplish green',
    },
  correctAnswer: "a",
  category:'Food & fruit',

},
{
  id:25,
  question:'Where does the Rambutan come from?',
  answers: {
      a:'China',
      b:'Malaysia',
    },
  correctAnswer: "b",
  category:'Food & fruit',
},
{
  id:26,
  question:'What country is the largest producer of kiwi fruit?',
  answers: {
      a:'Chile',
      b:'Italy',
      c:'Greece',
    },
  correctAnswer: "b",
  category:'Food & fruit',

},
{
  id:27,
  question:'What is the most consumed fruit in the world?',
  answers: {
      a:'Apple',
      b:'Orange',
      c:'Banana',
    },
  correctAnswer: "c",
  category:'Food & fruit',

}, {
  id:28,
  question:'How much water is there in a melon?',
  answers: {
      a:'95%',
      b:'98%',
      c:'93%',
      d:'94%',
    },
  correctAnswer: "b",
  category:'Food & fruit',

},
{
  id:29,
  question:'What is the highest peak in Africa?',
  answers: {
      a:'Mount Kilimanjaro',
      b:'Mount Tonkpi',
      c:'Mount Nimba',
    },
  correctAnswer: "a",
  category:'General knowledge',

},
{
  id:32,
  question:'Which state in Africa is most populous?',
  answers: {
      a:'Ivory Coast',
      b:'Ghana',
      c:'Nigeria',
      d:'Burkina Faso',
    },
  correctAnswer: "c",
  category:'General knowledge',

},
    ];
    let QuestionFifteen=RandomObject.sort( () => Math.random() - 0.5)
    const myQuestions=QuestionFifteen.slice(0,15)
    
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();