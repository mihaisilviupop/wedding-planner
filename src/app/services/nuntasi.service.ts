import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Nuntas } from '../models/nuntas.model';

@Injectable()
export class NuntasiService {

  private dbPath: string = '/nuntasi';
  public nuntas: AngularFireObject<Nuntas>;
  private nuntasiRef: AngularFireList<Nuntas>;
  public nuntasi: Observable<Nuntas[]>;
  public totalPersoane: number = 0;

  // private importnuntasi = `Ardelean;Laura;2;mihai;familie
  // Ardelean;Stefan;;mihai;familie
  // Boldan;Catalina;1;mihai;familie
  // Ardelean;Catalin;1;mihai;familie
  // Ardelean;Selina;1;mihai;familie
  // Ardelean;Camelia;;mihai;familie
  // Cotiu;Alina;1;mihai;neamuri
  // Ardelean;Marcel;1;mihai;neamuri
  // Vanciu;Stefan;1;mihai;familie
  // Zdrehus;Alina Razvan;3;mihai;familie
  // Vanciu;Sebi;3;mihai;familie
  // Calauz;Sebastian;;mihai;prieteni
  // Pop;Vladut;;mihai;prieteni, colegi
  // Oprea;Dan;;mihai;prieteni, colegi
  // Buciuman;Andra;;mihai;prieteni
  // Sut;Andra;;mihai;prieteni
  // Farcas;Vlad Florin;;mihai;prieteni, colegi
  // Szel;Vlad;;mihai;prieteni
  // Sut;Ionut;1;mihai;prieteni
  // Lazar;Alexandra;1;mihai;prieteni, colegi
  // Ghit;Dorin;;mihai;prieteni, colegi
  // Bojte;Tamas Tomy;1;mihai;prieteni, colegi
  // Franc;Catalin;;mihai;prieteni, colegi
  // Buia ;Andra;;mihai;prieteni, colegi
  // Spaller;Adrian;1;mihai;prieteni, colegi
  // Bogdan;Andrada;;mihai;prieteni
  // Mutiu;Horia;;mihai;prieteni`;

  constructor(private db: AngularFireDatabase) {
    this.nuntasiRef = this.db.list(this.dbPath);
  }

  getNuntas(key: string) {
    this.nuntas = this.db.object(`${this.dbPath}/${key}`);
    return this.nuntas;
  }

  createNuntas(nuntas: Nuntas): void {
    this.nuntasiRef.push(nuntas);
  }

  updateNuntas(key: string, value: any): void {
    this.nuntasiRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteNuntas(key: string): void {
    this.nuntasiRef.remove(key).catch(error => this.handleError(error));
  }

  getNuntasiList(): void {
    this.nuntasi = this.nuntasiRef.snapshotChanges().map(changes => {
      let items = changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      this.totalPersoane = items.length;
      return items;
    });
  }

  queryNuntasi(key: string, value: any) {
    return this.db.list(this.dbPath, ref => ref.orderByChild(key).equalTo(value)).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  private handleError(error) {
    console.log(error);
  }

  // importNuntasi() {
  //   this.importnuntasi.split('\n').forEach(item => {
  //     let itemArr = item.split(';');
  //     let nuntas: Nuntas = new Nuntas();
  //     nuntas.nume = itemArr[0].trim();
  //     nuntas.prenume = itemArr[1].trim();
  //     nuntas.categorii = itemArr[4];
  //     nuntas.parte = itemArr[3];
  //     if (parseInt(itemArr[2]) > 0) {
  //       nuntas.nrInsotitori = parseInt(itemArr[2]);
  //     }
  //     nuntas.invitat = false;
  //     nuntas.confirmat = false;
  //     this.createNuntas(nuntas);
  //   });
  // }

}
