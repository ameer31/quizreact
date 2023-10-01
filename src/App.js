import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
export default App;

const questions = [
  {
    title: 'what does HTML stand  for ?',
    options: ['Hyper Text markup language', 'Hyper Text makeup language', 'Home Tool makeup language', 'HyperTextLinks and markup language'],
    correctanswer: 'Hyper Text markup languag'
  },

  {
    title: 'Who is making the Web standards?',
    options: ['The world wide Web Consortium', 'Microsoft', 'Google', 'Mozilla'],
    correctanswer: 'he world wide Web Consortium'
  },

  {
    title: 'Choose the correct HTML element for the largest heading:',
    options: ['<h1>', '<h6>', 'Large', '<heading>'],
    correctanswer: '<h1>'
  },

  {
    title: 'What is the correct HTML element for inserting a line break?',
    options: ['<break>', '<br>', 'lb', '<linebreak>'],
    correctanswer: '<br>'
  },

  {
    title: 'What is the correct HTML for adding a background color?',
    options: ['<background>yellow</background>', '<body style="background-color:yellow;">', '<body style="background:yellow'],
    correctanswer: '<body style="background-color:yellow;>'
  },

  {
    title: 'Choose the correct HTML element to define important text',
    options: ['<b>', '<important>', 'i', '<strong>'],
    correctanswer: '<strong>'
  },

  {
    title: 'Choose the correct HTML element to define emphasized text',
    options: ['<em>', '<italic>', '<i>',],
    correctanswer: '<em>'
  },

  {
    title: 'Inline elements are normally displayed without starting a new line.',
    options: ['True', 'False',],
    correctanswer: '<false>'
  },

  {
    title: 'What is the correct HTML for making a checkbox?',
    options: ['<input type="checkbox">', '<input type="box">', '<check>', '<checkbox>'],
    correctanswer: '<input type="checkbox">'
  }
]

function App() {
  const [questionNo, setquestionNo] = useState(0)
  // const [score, setScore] = useState(0)

  function nextBtn() {
    let temList = questionNo
    setquestionNo(++temList)
  }


  const options = questions[questionNo].options

  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Q{questionNo + 1}) {questions[questionNo].title}
        </h4>

        {options.map(function (item) {
          return <div>
            <input name='q1' type='radio' value={item}
            />{item}
          </div>
        })}

        {questionNo < questions.length - 1 && <button onClick={nextBtn}>NEXT</button>}

      </header>
    </div>
  );
}

