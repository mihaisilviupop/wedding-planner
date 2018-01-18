import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Nuntas } from '../models/nuntas.model';
import { FormBuilder, FormGroup, Validator } from "@angular/forms";

@Component({
  selector: 'znuntas-nou',
  templateUrl: './nuntas-nou.component.html',
  styleUrls: ['./nuntas-nou.component.css']
})
export class NuntasNouComponent {
  nuntasNou: Nuntas = new Nuntas();
  options: FormGroup;

  constructor(public dialogRef: MatDialogRef<NuntasNouComponent>, public fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  confirm() {
    this.dialogRef.close(this.nuntasNou);
  }

}
