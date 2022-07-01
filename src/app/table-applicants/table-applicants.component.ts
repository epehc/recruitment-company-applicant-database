import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable } from '@angular/material/table';
import { ApplicantModalComponent } from '../applicant-modal/applicant-modal.component';



export interface ApplicantsTable {
  no_dpi: number;
  fecha: string;
  nombre_completo: string;
  puesto_al_que_aplica: string;
  como_se_entero: string;
  no_telefono: string;
  no_celular: string;
  acciones: string;
}

const APPLICANT_DATA: ApplicantsTable[] = [
  {no_dpi: 1, fecha:'26/06/2022', nombre_completo: 'Name1', puesto_al_que_aplica:'Puesto1', como_se_entero: 'Facebook', no_telefono: '12345', no_celular:'23456', acciones: ''},
  {no_dpi: 2, fecha:'25/06/2022', nombre_completo: 'Name2', puesto_al_que_aplica:'Puesto2', como_se_entero: 'LinkedIn', no_telefono: '23456', no_celular:'34567', acciones: ''},
  {no_dpi: 3, fecha:'24/06/2022', nombre_completo: 'Name3', puesto_al_que_aplica:'Puesto3', como_se_entero: 'Computrabajo', no_telefono: '34567', no_celular:'45678', acciones: 'Close'},
  {no_dpi: 4, fecha:'23/06/2022', nombre_completo: 'Name4', puesto_al_que_aplica:'Puesto4', como_se_entero: 'Facebook', no_telefono: '45678', no_celular:'12345', acciones: 'Close'},

];

@Component({
  selector: 'app-table-applicants',
  templateUrl: './table-applicants.component.html',
  styleUrls: ['./table-applicants.component.css']
})
export class TableApplicantsComponent {
  displayedColumns: string[] = ['no_dpi', 'fecha', 'nombre_completo',
                                'puesto_al_que_aplica', 'como_se_entero', 
                                'no_telefono', 'no_celular', 'acciones']
  dataSource = APPLICANT_DATA;

}
