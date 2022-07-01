import { Component, ContentChild, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogApplicantContentComponent } from '../dialog-applicant-content/dialog-applicant-content.component';

@Component({
  selector: 'app-applicant-modal',
  templateUrl: './applicant-modal.component.html',
  styleUrls: ['./applicant-modal.component.css']
})
export class ApplicantModalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void{
    this.dialog.open(DialogApplicantContentComponent);
  }

  ngOnInit(): void {
  }

}

