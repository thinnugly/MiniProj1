import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public idade: number = 0;
  public nome: string = 'Renato Madeia Muiambo';
  public cidade: string = 'Maputo';
  public dataNascimento: Date = new Date(1995, 4, 20); // 20 de maio de 1995 (mês começa de 0)

  constructor() { }

  ngOnInit(): void {
    this.idade = this.calcularIdade(this.dataNascimento);
  }

  // Função para calcular a idade
  calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    // Verifica se já fez aniversário este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }
    return idade;
  }
}
