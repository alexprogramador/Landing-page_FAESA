import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  formInscricao: FormGroup;
  sucesso: boolean = false;

  constructor(private fb: FormBuilder) {
    this.formInscricao = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      mensagem: ['', [Validators.required]]
    });
  }

  enviar() {
    if (this.formInscricao.valid) {
      console.log('Dados enviados com sucesso:', this.formInscricao.value);
      this.sucesso = true;
      this.formInscricao.reset();
      
      // Remove o aviso de sucesso após 5 segundos
      setTimeout(() => this.sucesso = false, 5000);
    } else {
      this.formInscricao.markAllAsTouched();
    }
  }
}
