import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Botón Ingresar presionado');
    
    // Validación de usuario y contraseña
    if (this.username.length >= 3 && this.username.length <= 8 && /^\d{4}$/.test(this.password)) {
      console.log('Validación exitosa. Navegando a home...');
      
      // Redirección a home con el parámetro username
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      console.error('Falló la validación del login');
    }
  }
}