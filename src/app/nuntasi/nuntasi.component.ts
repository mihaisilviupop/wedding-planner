import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { NuntasiService } from '../services/nuntasi.service';
import { Nuntas } from '../models/nuntas.model';
import { Observable } from 'rxjs/Observable';
import { NuntasNouComponent } from "../nuntas-nou/nuntas-nou.component";;

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

  adaugaNuntas() {
    let dialog = this.dialog.open(NuntasNouComponent, { autoFocus: true });
    dialog.afterClosed().subscribe((nuntas: Nuntas) => {
      this.nuntasiService.createNuntas(nuntas);
    });
  }

  stergeNuntas(key: string) {
    this.nuntasiService.deleteNuntas(key);
  }

}
