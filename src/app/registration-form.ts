import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="inscricao" class="form-section">
      <div class="form-container">
        <h2>Ficou interessado? Garanta sua vaga!</h2>
        <p>Preencha os campos abaixo e nossa equipe entrará em contato.</p>

        <div *ngIf="sucesso" class="alert-success">
          ✓ Cadastro realizado com sucesso! (Dados exibidos no Console do Desenvolvedor)
        </div>

        <form [formGroup]="formInscricao" (ngSubmit)="enviar()">
          <div class="form-group">
            <label for="nome">Nome Completo *</label>
            <input id="nome" type="text" formControlName="nome" placeholder="Digite seu nome">
            <span *ngIf="formInscricao.get('nome')?.touched && formInscricao.get('nome')?.errors?.['required']" class="error">O nome é obrigatório.</span>
          </div>

          <div class="form-group">
            <label for="email">E-mail *</label>
            <input id="email" type="email" formControlName="email" placeholder="seuemail@faesa.edu.br">
            <span *ngIf="formInscricao.get('email')?.touched && formInscricao.get('email')?.errors?.['email']" class="error">Insira um e-mail válido.</span>
            <span *ngIf="formInscricao.get('email')?.touched && formInscricao.get('email')?.errors?.['required']" class="error">O e-mail é obrigatório.</span>
          </div>

          <div class="form-group">
            <label for="telefone">Telefone *</label>
            <input id="telefone" type="text" formControlName="telefone" placeholder="Ex: 27999998888 (somente números)">
            <span *ngIf="formInscricao.get('telefone')?.touched && formInscricao.get('telefone')?.errors?.['required']" class="error">O telefone é obrigatório.</span>
            <span *ngIf="formInscricao.get('telefone')?.touched && formInscricao.get('telefone')?.errors?.['pattern']" class="error">Insira um telefone válido com DDD (10 ou 11 dígitos).</span>
          </div>

          <div class="form-group">
            <label for="mensagem">Mensagem *</label>
            <textarea id="mensagem" formControlName="mensagem" rows="4" placeholder="Por que você quer fazer este curso?"></textarea>
            <span *ngIf="formInscricao.get('mensagem')?.touched && formInscricao.get('mensagem')?.errors?.['required']" class="error">A mensagem é obrigatória.</span>
          </div>

          <button type="submit" [disabled]="formInscricao.invalid" class="submit-btn">Enviar Inscrição</button>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .form-section { padding: 60px 10%; background-color: #ffffff; display: flex; justify-content: center; }
    .form-container { width: 100%; max-width: 600px; background: #f8f9fa; padding: 40px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .form-container h2 { color: #0b2545; margin-bottom: 10px; text-align: center; }
    .form-container p { text-align: center; color: #666; margin-bottom: 30px; }
    .form-group { margin-bottom: 20px; display: flex; flex-direction: column; }
    .form-group label { font-weight: 600; margin-bottom: 8px; color: #333; }
    .form-group input, .form-group textarea { padding: 12px; border: 1px solid #ccc; border-radius: 5px; font-size: 1rem; }
    .error { color: #d9534f; font-size: 0.85rem; margin-top: 5px; }
    .submit-btn { width: 100%; background-color: #134074; color: white; border: none; padding: 14px; font-size: 1.1rem; font-weight: bold; border-radius: 5px; cursor: pointer; transition: background 0.3s; }
    .submit-btn:hover:not(:disabled) { background-color: #0b2545; }
    .submit-btn:disabled { background-color: #cccccc; cursor: not-allowed; }
    .alert-success { background-color: #d4edda; color: #155724; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center; font-weight: bold; }
  `]
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
      console.log('Dados do formulário FAESA:', this.formInscricao.value);
      this.sucesso = true;
      this.formInscricao.reset();
      setTimeout(() => this.sucesso = false, 5000);
    } else {
      this.formInscricao.markAllAsTouched();
    }
  }
}