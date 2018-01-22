import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { NuntasiService } from '../services/nuntasi.service';
import { Nuntas } from '../models/nuntas.model';
import { Observable } from 'rxjs/Observable';
import { NuntasNouComponent } from "../nuntas-nou/nuntas-nou.component";
import { ConfirmModalComponent, ConfirmModal } from "../confirm-modal/confirm-modal.component";

@Component({
  selector: 'nuntasi',
  templateUrl: './nuntasi.component.html',
  styleUrls: ['./nuntasi.component.css']
})
export class NuntasiComponent implements OnInit {
  displayedColumns = ['options', 'nume', 'prenume', 'categorii', 'nrInsotitori', 'parte', 'invitat', 'confirmat'];
  dataSource: MatTableDataSource<Nuntas>;
  nuntasi: Nuntas[];
  nuntasNou: Nuntas = new Nuntas();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private nuntasiService: NuntasiService, private dialog: MatDialog) {
    this.nuntasiService.getNuntasiList();

    this.nuntasiService.nuntasi.subscribe(items => {
      this.dataSource.data = items;
    });
    this.dataSource = new MatTableDataSource(this.nuntasi)
  }

  ngOnInit() {
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  editNuntas(key: string = undefined) {
    let dialog = this.dialog.open(NuntasNouComponent, {
      autoFocus: true,
      data: { key: key }
    });
    dialog.afterClosed().subscribe((item: { nuntas: Nuntas, key?: string }) => {
      if (item) {
        if (item.key) {
          this.nuntasiService.updateNuntas(item.key, item.nuntas);
        }
        else {
          this.nuntasiService.createNuntas(item.nuntas);
        }
      }
    });
  }

  stergeNuntas(key: string) {
    let dialog = this.dialog.open(ConfirmModalComponent, {
      data: <ConfirmModal>{
        title: 'Sterge persoana',
        message: 'Esti sigur ca vrei sa stergi aceasta persoana?',
        cancel: "Nu",
        confirm: 'Da'
      }
    });
    dialog.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.nuntasiService.deleteNuntas(key);
      }
    });
  }

  // importNuntasi(){
  //   this.nuntasiService.importNuntasi();
  // }

}
