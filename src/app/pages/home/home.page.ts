import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(private route: ActivatedRoute, private animationCtrl: AnimationController, private alertController: AlertController) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || ''; 
    });
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = ''; 

    const animation = this.animationCtrl.create()
      .addElement(document.querySelectorAll('ion-input'))
      .duration(1000)
      .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
    animation.play();
  }

  async mostrar() {
    const alert = await this.alertController.create({
        header: 'Información del Usuario',
        message: `
            Usuario: ${this.username}\n
            Nombre: ${this.nombre} ${this.apellido}\n
            Nivel de Educación: ${this.nivelEducacion}\n
            Fecha de Nacimiento: ${this.fechaNacimiento || 'No especificada'}
        `,
        buttons: ['Cerrar'],
    });
    await alert.present();
  } 
}
 