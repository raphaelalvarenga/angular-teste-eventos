import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Funcionario } from '../interfaces/funcionario-interface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  @Input() funcionarios: Funcionario[];
  @Output() funcionariosEvent = new EventEmitter<Funcionario>();

  constructor() { }

  ngOnInit(): void {
  }

  deletarFuncionario(funcionario: Funcionario) {
    this.funcionariosEvent.emit(funcionario);
  }

}
