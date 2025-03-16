import { Component, OnInit } from '@angular/core';
import { QuizComponent } from "../../componentes/quiz/quiz.component";

@Component({
  selector: 'app-homepage',
  imports: [QuizComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }
  
}
