import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Nuntas, NuntasForm } from '../models/nuntas.model';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { NuntasiService } from "../services/nuntasi.service";

@Component({
  selector: 'nuntas-nou',
  templateUrl: './nuntas-nou.component.html',
  styleUrls: ['./nuntas-nou.component.css']
})
export class NuntasNouComponent {
  nuntas = new NuntasForm();
  options: FormGroup;



  constructor(
    public dialogRef: MatDialogRef<NuntasNouComponent>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { key: string },
    private nuntasiServie: NuntasiService) {
    if (data && data.key) {
      this.nuntasiServie.getNuntas(data.key).subscribe(item => {
        this.nuntas = new NuntasForm(item);
      });
    }
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  confirm() {
    this.dialogRef.close({
      nuntas: this.nuntas.getNuntas(),
      key: this.data && this.data.key ? this.data.key : undefined
    });
  }

}
