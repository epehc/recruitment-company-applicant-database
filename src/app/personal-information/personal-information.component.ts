import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent  {

  personalForm =  new FormGroup({
    no_dpi: new FormControl(),
    nombre_completo: new FormControl(),
    genero: new FormControl(),
    no_telefono: new FormControl(),
    no_celular: new FormControl(),
    correo_electronico: new FormControl(),
    fecha_nacimiento: new FormControl(),

  });
  constructor() { }

  onFormSubmit(): void {
    console.log('holi');
} 
  
}
