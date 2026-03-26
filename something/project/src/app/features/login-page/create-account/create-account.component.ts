import { Component } from '@angular/core';
import MockUser, { IUser } from '../User.mock';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  //variáveis recebidas pelo ngModel
  cpf!: string
  name!: string
  pass!: string
  validForm: boolean = false

  users: IUser[] = MockUser;
  newUser?: IUser

  //função com todas as validações dentro
  validateForm() {
    this.validForm =
      this.validateNameandPass(this.name) &&
      this.isValidCPF(this.cpf) &&
      this.validateNameandPass(this.pass);
    
      //se a validação deu certo, crie o usuário
    if (this.validForm) {
      const newUser: IUser = {
        name: this.name,
        pass: this.pass,
        document: this.cpf
      };

      this.users.push(newUser);

      console.log('Usuário criado:', newUser);
      console.log('Lista atualizada:', this.users);
    }
  }

  validateNameandPass(name: string){
    //trim tira os espaços vazios
    if (!this.name || this.name.trim() === '') {
      return false
    }

    if (this.name.length < 5 || this.name.length > 30) {
      return false
    }

    return true
  }
  //validção pronta de cpf
  isValidCPF(value: string) {
      if (typeof value !== 'string') {
      return false;
    }
    
    value = value.replace(/[^\d]+/g, '');
    
    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
      return false;
    }

    const values = value.split('').map(el => +el);
    const rest = (count: number) => (values.slice(0, count-12).reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10;

    return rest(10) === values[9] && rest(11) === values[10];
  }
}
