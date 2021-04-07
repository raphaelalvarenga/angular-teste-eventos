import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Funcionario } from '../interfaces/funcionario-interface';

@Component({
  selector: 'app-tabela-two-way',
  templateUrl: './tabela-two-way.component.html',
  styleUrls: ['./tabela-two-way.component.scss']
})
export class TabelaTwoWayComponent implements OnInit {

  @Input() funcionarios: Funcionario[];
  @Output() funcionariosChange = new EventEmitter<Funcionario[]>();

  constructor() { }

  ngOnInit(): void {
  }

  deletarFuncionario(funcionario: Funcionario) {
    this.funcionarios = this.funcionarios.filter(funcionarioLoop => funcionarioLoop !== funcionario);
    this.funcionariosChange.emit(this.funcionarios);
  }

}
