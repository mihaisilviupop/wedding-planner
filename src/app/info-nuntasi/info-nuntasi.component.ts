import { Component, OnInit } from '@angular/core';
import { NuntasiService } from '../services/nuntasi.service';

@Component({
  selector: 'info-nuntasi',
  templateUrl: './info-nuntasi.component.html',
  styleUrls: ['./info-nuntasi.component.css']
})
export class InfoNuntasiComponent implements OnInit {
  totalConfirmat = 0;
  totalInvitati = 0;
  totalNuntasi = 0;
  totalPersoane = 0;
  totalInsotitori = 0;
  constructor(public nuntasiService: NuntasiService) {
  }

  ngOnInit() {

    this.subscribeTotaluri();
  }

  subscribeTotaluri() {
    this.nuntasiService.queryNuntasi('confirmat', true).subscribe(items => {
      this.totalConfirmat = items.length;
    });
    this.nuntasiService.queryNuntasi('invitat', true).subscribe(items => {
      this.totalInvitati = items.length;
    });
    this.nuntasiService.nuntasi.subscribe(items => {
      this.totalNuntasi = items.length;
      this.totalInsotitori = 0;
      items.forEach(item => {
        if (item.nrInsotitori) {
          this.totalNuntasi += item.nrInsotitori;
          this.totalInsotitori += item.nrInsotitori;
        }
      });
    });
  }

}
