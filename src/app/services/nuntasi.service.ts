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
  public totalNuntasi: number = 0;

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
      this.totalNuntasi = items.length;
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

}
