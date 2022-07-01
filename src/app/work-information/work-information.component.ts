import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-work-information',
  templateUrl: './work-information.component.html',
  styleUrls: ['./work-information.component.css']
})
export class WorkInformationComponent {

  view = 1;

  workForm =  new FormGroup({
    empresa1_nombre: new FormControl(),
    empresa1_fecha_inicio: new FormControl(),
    empresa1_fecha_fin: new FormControl(),
    empresa1_telefono: new FormControl(),
    empresa1_direccion: new FormControl(),
    empresa1_puesto: new FormControl(),
    empresa1_jefe: new FormControl(),
    empresa1_jefe_telefono: new FormControl(),
    empresa1_salario: new FormControl(),
    empresa1_motivo_salida: new FormControl(),
    empresa1_responsabilidades: new FormControl(),

    empresa2_nombre: new FormControl(),
    empresa2_fecha_inicio: new FormControl(),
    empresa2_fecha_fin: new FormControl(),
    empresa2_telefono: new FormControl(),
    empresa2_direccion: new FormControl(),
    empresa2_puesto: new FormControl(),
    empresa2_jefe: new FormControl(),
    empresa2_jefe_telefono: new FormControl(),
    empresa2_salario: new FormControl(),
    empresa2_motivo_salida: new FormControl(),
    empresa2_responsabilidades: new FormControl(),

    empresa3_nombre: new FormControl(),
    empresa3_fecha_inicio: new FormControl(),
    empresa3_fecha_fin: new FormControl(),
    empresa3_telefono: new FormControl(),
    empresa3_direccion: new FormControl(),
    empresa3_puesto: new FormControl(),
    empresa3_jefe: new FormControl(),
    empresa3_jefe_telefono: new FormControl(),
    empresa3_salario: new FormControl(),
    empresa3_motivo_salida: new FormControl(),
    empresa3_responsabilidades: new FormControl(),

    empresa4_nombre: new FormControl(),
    empresa4_fecha_inicio: new FormControl(),
    empresa4_fecha_fin: new FormControl(),
    empresa4_telefono: new FormControl(),
    empresa4_direccion: new FormControl(),
    empresa4_puesto: new FormControl(),
    empresa4_jefe: new FormControl(),
    empresa4_jefe_telefono: new FormControl(),
    empresa4_salario: new FormControl(),
    empresa4_motivo_salida: new FormControl(),
    empresa4_responsabilidades: new FormControl(),
  });
  constructor() { }

  setView(newView: number){
    this.view = newView;
  }
  onFormSubmit(): void {
    console.log('holi');
  }

}
