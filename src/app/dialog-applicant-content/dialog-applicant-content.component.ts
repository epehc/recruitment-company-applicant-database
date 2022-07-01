import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-applicant-content',
  templateUrl: './dialog-applicant-content.component.html',
  styleUrls: ['./dialog-applicant-content.component.css']
})
export class DialogApplicantContentComponent implements OnInit {
  
  
  constructor(public dialogRef: MatDialogRef<DialogApplicantContentComponent>) {}

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
  

}
