import { Component, OnInit } from '@angular/core';
import {Quiz} from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes:Quiz[]=[];

currentQuiz =0;
answerSelected = false;
correctAnswers=0;
incorrectAnswers=0;

  randomize!: number;
result =false;

constructor(private quizService:QuizService){}
  

  ngOnInit(): void {
    this.quizzes =this.quizService.getQuizzes();
    this.randomize=Math.floor(Math.random()* this.quizzes.length)
  }

  onAnswer(option:boolean){  
    console.log(option);
    this.answerSelected =true;
    setTimeout(()=>{
      this.currentQuiz++;
      this.answerSelected =false;
      this.randomize=Math.floor(Math.random()* this.quizzes.length)
    },3000);
    if (option){
      this.correctAnswers++;
    }else{
      this.incorrectAnswers++;
    }
}

showResult(){
  this.result=true; 
}

}