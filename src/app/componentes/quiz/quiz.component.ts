import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../../public/assets/data/quizz_questions.json"

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  titulo:string = ""

  questao:any
  questaoSelecionada:any

  resposta:string[] = []
  resultadofinal:string =""

  indexQuestao:number =0
  maximoQuestoes:number=0

  finalizado:boolean = false

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.iniciar();
    }

  }

  iniciar(){
    this.finalizado = false
    this.titulo = quizz_questions.title

    this.questao = quizz_questions.questions
    this.indexQuestao = 0
    this.maximoQuestoes = this.questao.length
    this.questaoSelecionada = this.questao[this.indexQuestao]
    
    console.log(this.indexQuestao)
    console.log(this.maximoQuestoes)
  }

  reiniciar(){
    this.iniciar();
  }

  escolher(value:string){
    this.resposta.push(value)
    this.proximaPergunta()

  }

  async proximaPergunta(){
    this.indexQuestao+=1

    if(this.maximoQuestoes > this.indexQuestao){
        this.questaoSelecionada = this.questao[this.indexQuestao]
    }else{
      const finalAnswer:string = await this.checkResult(this.resposta)
      this.finalizado = true
      this.resultadofinal = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results ]
    }
  }

  async checkResult(respostas:string[]){

    const resultado = respostas.reduce((anterior, atual, i, arr)=>{
        if(
          arr.filter(item => item === anterior).length >
          arr.filter(item => item === atual).length
        ){
          return anterior
        }else{
          return atual
        }
    })

    return resultado
  }

}
