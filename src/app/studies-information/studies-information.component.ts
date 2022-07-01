import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-studies-information',
  templateUrl: './studies-information.component.html',
  styleUrls: ['./studies-information.component.css']
})
export class StudiesInformationComponent  {

  view = 'default';

  constructor() { }

  studiesForm =  new FormGroup({
    estudios_mas_altos: new FormControl(),
    doctorado_institucion: new FormControl(),
    doctorado_estudio: new FormControl(),
    doctorado_grado: new FormControl(),
    maestria_institucion: new FormControl(),
    maestria_estudio: new FormControl(),
    maestria_grado: new FormControl(),
    licenciatura_institucion: new FormControl(),
    licenciatura_estudio: new FormControl(),
    licenciatura_grado: new FormControl(),
    tecnico_institucion: new FormControl(),
    tecnico_estudio: new FormControl(),
    tecnico_grado: new FormControl(),
    colegio_institucion: new FormControl(),
    colegio_estudio: new FormControl(),
    colegio_grado: new FormControl(),
    otros_estudios: new FormControl(),

  });

  setView(newView: string){
    this.view = newView;
  }

  onFormSubmit(): void {
    console.log('holi');
}

}
