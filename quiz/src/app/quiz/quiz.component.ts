import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: `./quiz.component.html`,
})
export class QuizComponent implements OnInit {
  public questions = [
    {
      question: 'What is the capital of France?',
      answers: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'What is the currency of Japan?',
      answers: ['Dollar', 'Euro', 'Yen', 'Pound'],
      correctAnswer: 'Yen',
    },
    {
      question: 'What is the currency of Japan?',
      answers: ['Dollar', 'Euro', 'Yen', 'Pound'],
      correctAnswer: 'Yen',
    },
    {
      question: 'What is the largest ocean in the world?',
      answers: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      correctAnswer: 'Pacific',
    },
    {
      question: 'What is the national animal of India?',
      answers: ['Tiger', 'Lion', 'Elephant', 'Rhino'],
      correctAnswer: 'Tiger',
    },
    {
      question: 'What is the largest country in the world by area?',
      answers: ['China', 'USA', 'Russia', 'India'],
      correctAnswer: 'Russia',
    },
    {
      question: 'What is the capital of Australia?',
      answers: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
      correctAnswer: 'Canberra',
    },
    {
      question: 'What is the currency of the United States?',
      answers: ['Dollar', 'Euro', 'Yen', 'Pound'],
      correctAnswer: 'Dollar',
    },
    {
      question: 'What is the largest continent in the world?',
      answers: ['Africa', 'Europe', 'Asia', 'Australia'],
      correctAnswer: 'Asia',
    },
  ];
  public currentQuestion = 0;
  public selectedAnswer = '';
  public isFinished = false;
  public score = 0;
  public startTime = 0;
  public elapsedTime = 0;
  public maxTimePerQuestion = 0;
  public minTimePerQuestion = Infinity;
  public isTimed = true;
  public timePerQuestion = 10 * this.questions.length;
  public isTimedOut = false;

  constructor() { }

  ngOnInit(): void {
    this.startTime = Date.now();
    this.elapsedTime = 0;
    setInterval(() => {
      this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
      if (this.isTimed && !this.isFinished && this.elapsedTime >= this.timePerQuestion) {
        this.isTimedOut = true;
        this.selectedAnswer = this.questions[this.currentQuestion].correctAnswer;
      }
    }, 100);
  }

  selectAnswer(answer: string): void {
    if (!this.isTimedOut) {
      this.selectedAnswer = answer;
    }
  }

  nextQuestion(): void {
    if (this.selectedAnswer === this.questions[this.currentQuestion].correctAnswer) {
      this.score++;
    }
    this.currentQuestion++;
    this.selectedAnswer = '';
    this.isTimedOut = false;

    if (this.isTimed) {
      const timeTaken = this.elapsedTime % this.timePerQuestion;
      this.maxTimePerQuestion = Math.max(this.maxTimePerQuestion, timeTaken);
      this.minTimePerQuestion = Math.min(this.minTimePerQuestion, timeTaken);
    }
    if (this.currentQuestion === this.questions.length) {
      this.isFinished = true;
    }
  }

  removeTimeControl(): void {
    this.isTimed = false;
    this.timePerQuestion = Infinity;
  }
}

