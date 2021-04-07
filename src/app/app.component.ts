import { Component } from '@angular/core';
import { Funcionario } from "./interfaces/funcionario-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  funcionarios: Funcionario[] = [
    {id: 1, nome: 'João', profissao: 'Gerente', salario: 6000},
    {id: 2, nome: 'José', profissao: 'Supervisor', salario: 4000},
    {id: 3, nome: 'Francisco', profissao: 'Vendedor', salario: 3000}
  ];

  deletarFuncionario(funcionario: Funcionario) {
    this.funcionarios = this.funcionarios.filter(funcionarioLoop => funcionarioLoop !== funcionario);
  }
}
