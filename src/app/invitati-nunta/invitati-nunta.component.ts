import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'invitati-nunta',
  templateUrl: './invitati-nunta.component.html',
  styleUrls: ['./invitati-nunta.component.css']
})
export class InvitatiNuntaComponent implements OnInit {
  private nuntasi: Observable<INuntas[]>;
  private nuntasiRef: AngularFireList<INuntas>;
  private nuntasNou: INuntas = {
    nume: "",
    prenume: "",
    parte: "",
    categorii: ""
  };
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getNuntasi();
  }

  getNuntasi() {
    this.nuntasiRef = this.db.list('/nuntasi');
    this.nuntasi = this.nuntasiRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  adaugaNuntas() {
    this.nuntasiRef.push(this.nuntasNou);
    this.nuntasNou = {
      nume: "",
      prenume: "",
      parte: "",
      categorii: ""
    };
  }

  stergeNuntas(key) {
    this.nuntasiRef.remove(key);
  }

}

class INuntas {
  nume: string;
  prenume: string;
  invitat?: boolean;
  confirmat?: boolean;
  parte: string;
  nrInsotitori?: number;
  categorii: string;
}
