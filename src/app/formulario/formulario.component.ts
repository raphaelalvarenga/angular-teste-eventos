import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  form = this.fb.group({
    nome: [''],
    profissao: [''],
    salario: []
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
