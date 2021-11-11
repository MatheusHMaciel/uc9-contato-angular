import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
    
    
  }
     onsubmit(form: NgForm){    
     let dados=`
     Nome: ${form.value.nome}`
     ;
      console.log(dados);
    }


 

}
